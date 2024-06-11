// import React, { useState, useEffect } from 'react';
// import CheckTable from './CheckTable';
// import ChecksAndGroupData from './checksGroups.json';

// type Group = {
//   name: string;
//   checks: { name: string; [key: string]: string | number }[];
// };

// function Groups() {
//   const [jsonData, setJsonData] = useState<{ groups?: Group[]; otherChecks?: { checks: any[] } } | null>(null);

//   useEffect(() => {
//     setJsonData(ChecksAndGroupData);
//   }, []);

//   if (!jsonData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {jsonData.groups && (
//         <div>
//           {jsonData.groups.map((group: Group, index: number) => ( // Type annotations added here
//             <div key={index}>
//               &nbsp;&nbsp;<li className='group-name'>{group.name}</li>
//               <hr style={{ margin: '20px 0' }} />
//               <CheckTable checks={group.checks} />
//             </div>
//           ))}
//         </div>
//       )}
//       {jsonData.otherChecks && (
//         <div>
//           &nbsp;&nbsp;<li className='group-name'>Other Checks</li>
//           <hr style={{ margin: '20px 0' }} />
//           <CheckTable checks={jsonData.otherChecks.checks} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Groups;






import { useState, useEffect } from 'react';
import CheckTable from './CheckTable';
import ChecksAndGroupData from './checksGroups.json';

type Group = {
  name: string;
  checks: { CheckName: string; [key: string]: string | number }[];
};

function renderChecks(jsonData: { groups?: Group[]; otherChecks?: {name: string; checks: any[] } } | null) {
  if (!jsonData) {
    return <div>Loading...</div>;
  }

  if (jsonData.groups && jsonData.otherChecks) {
    return <>
      {jsonData.groups.map((group: Group, index: number) => (
      <div key={index}>
        &nbsp;&nbsp;<li className='group-name'>{group.name}</li>
        <hr style={{ margin: '20px 0' }} />
        <CheckTable checks={group.checks} />
      </div>
    ))};
      <div>
      &nbsp;&nbsp;<li className='group-name'>{jsonData.otherChecks.name}</li>
      <hr style={{ margin: '20px 0' }} />
      <CheckTable checks={jsonData.otherChecks.checks} />
    </div>
    </>
    
  }

  // if (jsonData.otherChecks) {
  //   return (
  //     <div>
  //       &nbsp;&nbsp;<li className='group-name'>Other Checks</li>
  //       <hr style={{ margin: '20px 0' }} />
  //       <CheckTable checks={jsonData.otherChecks.checks} />
  //     </div>
  //   );
  //}
  // const ele = jsonData.groups;
  // return (
  //   <div>{jsonData.groups && <div>{ jsonData.groups.map((group: Group, index: number) => (
  //     <div key={index}>
  //       &nbsp;&nbsp;<li className='group-name'>{group.name}</li>
  //       <hr style={{ margin: '20px 0' }} />
  //       <CheckTable checks={group.checks} />
  //     </div>
  //   ))
  //     }</div>}</div>
  // )
  //return null;
  
}

function Groups() {
  const [jsonData, setJsonData] = useState<{ groups?: Group[]; otherChecks?: { name : string; checks: any[] } } | null>(null);

  useEffect(() => {
    setJsonData(ChecksAndGroupData);
  }, []);

  return (
    <div>
      {renderChecks(jsonData)}
    </div>
  );
}

export default Groups;

// import React, { useState, useEffect } from 'react';
// import ChecksAndGroupData from './checksGroups.json';
// import GroupTable from './CheckTable'

// type Group = {
//     name: string;
//     checks: { name: string; [key: string]: string | number }[];
//   };
// function Groups() {
//   const [jsonData, setJsonData] = useState<{ groups?: Group[]; otherChecks?: { checks: any[] } } | null>(null);

//   useEffect(() => {
//     setJsonData(ChecksAndGroupData);
//   }, []);

//   if (!jsonData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <GroupTable groups={jsonData.groups} />
//       {jsonData.otherChecks && <GroupTable checks={jsonData.otherChecks.checks} />}
//     </div>
//   );
// }

// export default Groups;
