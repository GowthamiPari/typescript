// import { useEffect, useState } from 'react';
// import './styles.css';
 import { faGlobe, faEye, faChartBar, faTimes, faClock, faChartLine,faCheckSquare, faMountain } from '@fortawesome/free-solid-svg-icons';
// import summaryData from './summaryData.json'
// import ReqMetrics from './ReqMetric';
// import OtherStatsTab from './OtherStatsTab';
// import Box from './Box';
// import Groups from './Groups';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import TabButton from './TabButton';
// type SummaryData = {
//     totalRequests: string;
//     failedRequests: string;
//     breachedThresholds: string;
//     failedChecks: string;
//   };

// function Header() {
//     const currentTime = new Date();
//   return (
//     <header className="App-header">
//       <h2 id='header-name'><span className="icon"><FontAwesomeIcon icon={faMountain}/></span> K6 Load Test: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</h2>
//     </header>
//   );
// }


// function ReportPage() {
//     //const [visibility, setVisibility] = useState(false);
//     const [activeTab, setActiveTab] = useState<string>("");
//     const [data, setData] = useState<SummaryData | null>(null);
  
//     const handleTabClick = (tab: string) => {
//       setActiveTab(tab);
//     };
  
//     useEffect(() => {
//       // You need to type-cast summaryData to SummaryData.
//       setData(summaryData as SummaryData);
//     }, []);
  
//     if (!data) {
//       return <div>Loading...</div>;
//     }
//   return (
//     <div className="App">
//       <Header />
//       <div className="content">
//         <div className="boxes">
//           <Box title="Total Requests" icon={faGlobe} value={data.totalRequests}/>
//           <Box title="Failed Requests" icon={faTimes} value={data.failedRequests} />
//           <Box title="Breached Thresholds" icon={faChartBar} value={data.breachedThresholds} />
//           <Box title="Failed Checks" icon={faEye}  value={data.failedChecks}/>
//         </div>
//         <div className="tabs">
//         <TabButton isActive={activeTab === 'requestMetrics'} icon={faClock} label="Request Metrics" onClick={() => handleTabClick('requestMetrics')}/>
//         <TabButton isActive={activeTab === 'otherStats'} icon={faChartLine} label="Other Stats" onClick={() => handleTabClick('otherStats')}/>
//         <TabButton isActive={activeTab === 'checksGroups'} icon={faCheckSquare} label="Checks & Groups" onClick={() => handleTabClick('checksGroups')}/>
//         </div>
//         {activeTab === 'requestMetrics' && <ReqMetrics />}
//         {activeTab === 'otherStats' && <OtherStatsTab />}
//         {activeTab === 'checksGroups' && <Groups />}
//       </div>
//     </div>
//   );
// }

// export default ReportPage;

import React, { useEffect, useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGlobe, faEye, faChartBar, faTimes, faClock, faChartLine, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import summaryData from './summaryData.json';
import ReqMetrics from './ReqMetric';
import OtherStatsTab from './OtherStatsTab';
import Box from './Box';
import Groups from './Groups';
import TabButton from './TabButton';

type SummaryData = {
  totalRequests: string;
  failedRequests: string;
  breachedThresholds: string;
  failedChecks: string;
  boxes: { title: string; icon: string; valueKey: string }[];
  tabs: { key: string; icon: string; label: string }[];
};

const iconMapping = {
  faGlobe: faGlobe,
  faEye: faEye,
  faChartBar: faChartBar,
  faTimes: faTimes,
  faClock: faClock,
  faChartLine: faChartLine,
  faCheckSquare: faCheckSquare
};
const Header: React.FC = () => {
  const currentTime = new Date();
  return (
    <header className="App-header">
      <h2 id='header-name'>
        <span><FontAwesomeIcon icon={faMountain} /></span> 
        K6 Load Test: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
      </h2>
    </header>
  );
};

const ReportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const [data, setData] = useState<SummaryData | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setData(summaryData as SummaryData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const boxes = [];
  for (let i = 0; i < data.boxes.length; i++) {
    const box = data.boxes[i];
    boxes.push(
      <Box
        key={box.title}
        title={box.title}
        icon={iconMapping[box.icon as keyof typeof iconMapping]}
        value={data[box.valueKey as keyof SummaryData]as string}
      />
    );
  }

  const tabs = [];
  for (let i = 0; i < data.tabs.length; i++) {
    const tab = data.tabs[i];
    tabs.push(
      <TabButton
        key={tab.key}
        isActive={activeTab === tab.key}
        icon={iconMapping[tab.icon as keyof typeof iconMapping]}
        label={tab.label}
        onClick={() => handleTabClick(tab.key)}
      />
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="boxes">
          {boxes}
        </div>
        <div className="tabs">
          {tabs}
        </div>
        {activeTab === 'requestMetrics' && <ReqMetrics />}
        {activeTab === 'otherStats' && <OtherStatsTab />}
        {activeTab === 'checksGroups' && <Groups />}
      </div>
    </div>
  );
};

export default ReportPage;



