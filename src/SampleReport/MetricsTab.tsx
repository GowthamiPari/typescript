import React from 'react';

type MetricRow = {
    Name: string;
    Count: string;
    Rate: string ;
    Average: string;
    Maximum: string;
    Median: string;
    Minimum: string;
    '90thPercentile': string;
    '95thPercentile': string;
  };
  

type MetricsTabProps = {
  metricsData: MetricRow[];
};

const MetricsTab: React.FC<MetricsTabProps> = ({ metricsData }) => {
  const properties = Object.keys(metricsData[0]);

  return (
    <table className="request-metrics-table">
      <thead>
        <tr className='even-row'>
          {properties.map(prop => (
          <th key={prop}>
          {prop === 'Name' ? '' : prop}
          </th>
))}
        </tr>
      </thead>
      <tbody>
        {metricsData.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even-row' : 'odd-row'}>
            <td style={{ fontWeight: 'bold' }}>{row.Name}</td>
            <td>{row.Count}</td>
            <td>{row.Rate}</td>
            <td>{row.Average}</td>
            <td>{row.Maximum}</td>
            <td>{row.Median}</td>
            <td>{row.Minimum}</td>
            <td>{row['90thPercentile']}</td>
            <td>{row['95thPercentile']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MetricsTab;
