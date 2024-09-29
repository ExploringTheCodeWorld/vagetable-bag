import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/zh-cn';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('zh-cn');

export const nowDate = (date: Date = new Date()) =>dayjs(date).format('YYYY-MM-DD');
export const nowDateTime = (date: Date = new Date()) =>dayjs(date).format('YYYY-MM-DD HH:mm:ss');
export const formatDate = (date: Date, format = 'YYYY-MM-DD HH:mm:ss') => date && dayjs(date).format(format);