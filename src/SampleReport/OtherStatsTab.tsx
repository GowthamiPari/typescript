// import React, { useState, useEffect }  from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
 //import { faGlobe,faEye, faDownload, faUpload,faRedo, faUser } from '@fortawesome/free-solid-svg-icons';
// import otherStatsData from './otherStats.json';

// type StatsData = {
//     checks: { passed: string; failed: string };
//     iterations: { total: string; rate: string };
//     virtualUsers: { min: string; max: string };
//     requests: { total: string; rate: string };
//     dataReceived: { total: string; rate: string };
//     dataSent: { total: string; rate: string };
// };

// type StatBox = {
//     title: string;
//     icon: IconDefinition;
//     values: { label: string; value: string }[];
// };

// function OtherStatsTab() {
//     const [data, setData] = useState<StatsData | null>(null);

//     useEffect(() => { 
//         setData(otherStatsData.otherStats);
//     }, []);

//     if (!data) {
//         return <div>Loading...</div>;
//     }

//     function Boxx({ title, icon, values }: { title: string; icon: IconDefinition; values: { label: string; value: string}[] }) {
//         return (
//             <div className="boxx">
//                 <span className="icon"><FontAwesomeIcon icon={icon} size="2x" /></span>
//                 <h3>{title}</h3>
//                 {values.map((value, index) => (
//                     <div key={index}>
//                         <strong>{value.label}:</strong> {value.value}
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     const boxesData: StatBox[] = [
//         {title: "Checks",icon: faCheckSquare,values: [{ label: 'Passed', value: data.checks.passed },{ label: 'Failed', value: data.checks.failed }] },
//         {title: "Iterations",icon: faRedo,values: [{ label: 'Total', value: data.iterations.total },{ label: 'Rate', value: data.iterations.rate }]},
//         {title: "Virtual Users",icon: faUser,values: [{ label: 'Min', value: data.virtualUsers.min },{ label: 'Max', value: data.virtualUsers.max }]},
//         {title: "Requests",icon: faGlobe, values: [{ label: 'Total', value: data.requests.total }, { label: 'Rate', value: data.requests.rate } ] },
//         {title: "Data Received",icon: faDownload,values: [{ label: 'Total', value: `${data.dataReceived.total} MB` },{ label: 'Rate', value: `${data.dataReceived.rate} mB/s` }]},
//         {title: "Data Sent",icon: faUpload,values: [{ label: 'Total', value: `${data.dataSent.total} MB` },{ label: 'Rate', value: `${data.dataSent.rate} mB/s` }]}
//     ];

//     return (
//         <div className="other-stats">
//             <div className="other-stats-boxes">
//                 {boxesData.map((item, index) => (
//                     <Boxx key={index} title={item.title} icon={item.icon} values={item.values} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default OtherStatsTab;

import React, { useState, useEffect }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGlobe,faEye, faDownload, faUpload,faRedo, faUser } from '@fortawesome/free-solid-svg-icons';
import otherStatsData from './otherStats.json';

type StatsData = {
    Checks: { Passed: string; Failed: string };
    Iterations: { Total: string; Rate: string };
    VirtualUsers: { Min: string; Max: string };
    Requests: { Total: string; Rate: string };
    DataReceived: { Total: string; Rate: string };
    DataSent: { Total: string; Rate: string };
};

type StatBox = {
    title: string;
    icon: IconDefinition;
    values: { label: string; value: string }[];
};

function OtherStatsTab() {
    const [data, setData] = useState<StatsData | null>(null);

    useEffect(() => { 
        setData(otherStatsData.otherStats);
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const Boxx: React.FC<StatBox> = ({ title, icon, values }) => (
        <div className="boxx">
            <span className="icon"><FontAwesomeIcon icon={icon} size="2x" /></span>
            <div className='text-Overlay'>
            <h3>{title}</h3>
            {values.map((value, index) => (
                <div key={index}>
                    <strong>{value.label}:</strong> {value.value}
                </div>
            ))}
            </div>
        </div>
    );
    const iconMapping: { [key: string]: IconDefinition } = {
        Checks: faEye,
        Iterations: faRedo,
        VirtualUsers: faUser,
        Requests: faGlobe,
        DataReceived: faDownload,
        DataSent: faUpload,
    };

    const boxesData: StatBox[] = Object.entries(data).map(([key, value]) => {
        return {
            title: key,
            icon: iconMapping[key],
            values: Object.entries(value).map(([label, value]) => ({
                label: label,
                value: typeof value === 'string' ? value : `${value}`, // Assuming value is a string or a number
            })),
        };
    });

    return (
        <div className="other-stats">
            <div className="other-stats-boxes">
                {boxesData.map((item, index) => (
                    <Boxx key={index} title={item.title} icon={item.icon} values={item.values} />
                ))}
            </div>
        </div>
    );
}

export default OtherStatsTab;

