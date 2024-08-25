import { handlerPath } from '@libs/handler-resolver';
import { AWS } from '@serverless/typescript';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [],
  layers: ["arn:aws:lambda:us-east-1:077558009148:layer:nodejs-example-telemetry-api-extension:1"]
} satisfies AWS['functions']["string"];
