import React from 'react';

type Check = {
  //name: string;
  [key: string]: string | number;
};

type CheckTableProps = {
  checks: Check[];
};

const CheckTable: React.FC<CheckTableProps> = ({ checks }) => {
  if (!checks || checks.length === 0) {
    return <div>No data available</div>;
  }

  const properties = Object.keys(checks[0]);

  return (
    <table className='group-table'>
      <thead>
        <tr>
          {/* <th>Check Name</th>
          <th>Passes</th>
          <th>Failures</th> */}
          {properties.map(prop => (
            <th key={prop}>{prop}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {checks.map((check, idx) => (
          <tr key={idx}>
            {properties.map(prop => (
              <td key={prop}>{check[prop]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CheckTable;
