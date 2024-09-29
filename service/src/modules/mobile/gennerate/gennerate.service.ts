

import {
    Injectable,
    BadRequestException,
    NotFoundException,
  } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { ChatZhipuAI } from '@langchain/community/chat_models/zhipuai';
  import axios from 'axios';
  import { HttpService } from '@nestjs/axios';
  import { map } from 'rxjs/operators';
  import { firstValueFrom } from 'rxjs';
@Injectable()
export class GennerateService {
    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {}

    async generateModelContent(data: any, type: string): Promise<string> {
        const glm4 = new ChatZhipuAI({
          model: this.configService.get<string>('model.model'),
          temperature: 0.7,
          zhipuAIApiKey: this.configService.get<string>('model.apiKey'),
        });
    
        let messages;
        switch (type) {
          case 'description':
            messages = [
              {
                role: 'system',
                content:
                  '你专门生成模型设定描述，不需要有其他回答，针对的是个人，所以不需要出现大家，你们等词，只需要一句话，不要超过200个字',
              },
              {
                role: 'user',
                content: `角色扮演的名字为：${data.modelName}，请生成一个模型设定描述`,
              },
            ];
            break;
          case 'introduce':
            messages = [
              {
                role: 'system',
                content:
                  '你专门生成模型介绍，不需要有其他回答，针对的是个人，所以不需要出现大家，你们等词，只需要一句话，不要超过50个字',
              },
              {
                role: 'user',
                content: `角色扮演的名字为：${data.modelName}，模型设定描述为：${data.modelDescription},请根据以上内容生成一个模型介绍`,
              },
            ];
            break;
          case 'prologue':
            messages = [
              {
                role: 'system',
                content:
                  '你专门生成模型开场白，不需要有其他回答，针对的是个人，所以不需要出现大家，你们等词，只需要一句话，不要超过50个字',
              },
              {
                role: 'user',
                content: `角色扮演的名字为：${data.modelName}，模型设定描述为：${data.modelDescription}，请根据以下内容生成一个模型开场白`,
              },
            ];
            break;
            case 'improvement':
                messages = [
                    {
                        role:'system',
                        content:'你专门生成模型名称，开场白，描述，介绍等，不需要有其他回答，针对的是个人，所以不需要出现大家，你们等词'
                    },
                    {
                        role:'user',
                        content:`
                        请根据以下内容生成一个模型名称，开场白，描述，介绍，${data.analusisText},回复的数据格式为json
                        {
                            "modelName": "",
                            "modelDescription": "",
                            "prologue": "",
                            "introduce": ""
                        }
                        `
                    }
                ]
                break;
          default:
            throw new Error('Unknown type');
        }
    
        const result = await glm4.invoke(messages);
        return result.content as string;
      }

      async generateText(data: any, type: string): Promise<string> {
        let { message = '' } = data;
        if (message == '') {
          message = '随机生成一段可以生成图片的文字';
        } else {
          message = '根据以下内容生成一段可以生成图片的文字：' + message;
        }
        const glm4 = new ChatZhipuAI({
          model: this.configService.get<string>('model.model'),
          temperature: 0.7,
          zhipuAIApiKey: this.configService.get<string>('model.apiKey'),
        });
        const response = await glm4.invoke(message);
        return response.content as string;
      }
      async generateImage(data, req) {
        const { message = '', input = '', list = [] } = data;
        console.log('message', message);
        let prompt = '根据以下内容生成图片：';
        if (message) prompt += `${message}`;
        if (input) prompt += `${input}，`;
        if (list.length) {
          prompt += '类型为:';
          prompt += list.join('');
        }
        if (!message && !input && !list.length) {
          prompt = '随机生成！';
        }
        console.log('prompt', prompt);
    
        const requestData = {
          model: 'cogview-3-plus',
          prompt: prompt,
          size: '720x1440',
        };
    
        try {
          const result = await axios.post(
            this.configService.get<string>('model.imageUrl'),
            requestData,
            {
              headers: {
                Authorization: `Bearer ${this.configService.get<string>('model.apiKey')}`,
                'Content-Type': 'application/json',
              },
            },
          );
    
          console.log('result', result.data);
    
          // 检查并提取图像URL
          if (
            result.data &&
            result.data.data &&
            result.data.data[0] &&
            result.data.data[0].url
          ) {
            const imageUrl = result.data.data[0].url;
            console.log('Generated Image URL:', imageUrl);
            return result.data;
          } else {
            console.error('Unexpected response format:', result.data);
            throw new Error('Failed to generate image');
          }
        } catch (error) {
          if (error.response) {
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
            console.error('Error response headers:', error.response.headers);
          } else if (error.request) {
            console.error('Error request data:', error.request);
          } else {
            console.error('Error message:', error.message);
          }
          throw error;
        }
      }

      async analyzeImage(data,text, req) {
        
        const requestData = {
          model: 'glm-4v',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image_url',
                  image_url: {
                    url: data,
                  },
                },
                { type: 'text', text: text },
              ],
            },
          ],
          stream: false,
        };
        const response = await firstValueFrom(
          this.httpService
            .post(this.configService.get<string>('model.url'), requestData, {
              responseType: 'stream',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.configService.get<string>('model.apiKey')}`,
              },
            })
            .pipe(
              map((response) => response.data), // 获取流数据
            ),
        );
        return response;
      }

}
