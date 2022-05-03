import { API_DATA } from './api-data';

function rawbody(_req: any): string {
  return JSON.stringify(API_DATA[0]);
}

module.exports = rawbody;
