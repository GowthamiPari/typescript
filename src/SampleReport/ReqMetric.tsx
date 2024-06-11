import React from "react";
import RequestMetricsData from "./requestMetrics.json";
import MetricsTab from "./MetricsTab";

const ReqMetrics: React.FC = () => {
  return (
    <div>
      <MetricsTab metricsData={RequestMetricsData.requestMetrics} />
      <h2>Custom Metrics</h2>
      <hr style={{ margin: '20px 0' }} />
      <MetricsTab metricsData={RequestMetricsData.customMetrics} />
      <p className="note"> Note. All times are in milli-seconds</p>
    </div>
  );
};

export default ReqMetrics;
