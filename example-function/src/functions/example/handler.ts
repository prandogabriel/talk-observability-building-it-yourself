import type { Handler } from "aws-lambda";
import { MetricUnit, Metrics } from '@aws-lambda-powertools/metrics';

const metrics = new Metrics();

export const main: Handler = async (event) => {
  console.log("event", event);
  metrics.addMetric('custom-metric', MetricUnit.Count, 1);
 
  metrics.publishStoredMetrics();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `success`
    })
  }
};
