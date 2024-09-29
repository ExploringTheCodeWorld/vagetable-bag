import * as os from 'os'
import { v4 as uuidv4 } from 'uuid';
/**
 * 
 * @description 获取本机ip地址
 * @returns 
 */
export function getIp() {
  function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    let addresses = [];
    for (let iface in interfaces) {
      for (let i = 0; i < interfaces[iface].length; i++) {
        const alias = interfaces[iface][i];
        if (alias.family === 'IPv4' && !alias.internal) {
          addresses.push(alias.address);
        }
      }
    }
    return addresses;
  }
  const ipAddresses = getLocalIpAddress();
  console.log('ipAddresses',ipAddresses)
  // return ipAddresses.join(', ');
  return ipAddresses[0];
}


export const getPagination = (query)=>{
  const { pageNum = 1, pageSize = 10 } = query;
  const skip = (pageNum - 1) * pageSize;
  const take = +pageSize;
  return { skip, take };
}


export function getUUID(): string {
  const uuid = uuidv4();
  return uuid.replaceAll('-', '');
}
export function onDataReceived(data) {
  // 逐条处理接收到的数据
  for (const line of data.split('\n')) {
      if (line.trim()) {
          try {
              const json = JSON.parse(line);
              const content = json.content;

              // 提取 data 部分
              const dataMatch = content.match(/data: (.+)/);
              if (dataMatch) {
                  const jsonData = JSON.parse(dataMatch[1]);
                  const choiceContent = jsonData.choices[0].delta.content;

                  // 直接返回解析的内容
                  return choiceContent; // 解析后立即返回结果

                  // 检查是否是结束标志
                  if (jsonData.choices[0].finish_reason === "stop") {
                      // 如果需要在此处理结束标志，可以在这里做其他操作
                  }
              }
          } catch (error) {
              console.error("解析错误:", error);
          }
      }
  }

  // 如果没有返回，表示没有可解析的内容
  return null; // 或者其他适当的默认值
}
