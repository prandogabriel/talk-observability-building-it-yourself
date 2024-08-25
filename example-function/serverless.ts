import type { AWS } from '@serverless/typescript';

import * as functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'example-function',
  frameworkVersion: '3',
  useDotenv: true,
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DISPATCH_POST_URI: "https://webhook.site/a94e7022-c2a6-47a3-8b40-01bae98ece88"
    },
  },
  // import the function via paths
  functions: functions,
  package: { individually: true, excludeDevDependencies: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['@aws-sdk/*'],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  }
};

module.exports = serverlessConfiguration;
