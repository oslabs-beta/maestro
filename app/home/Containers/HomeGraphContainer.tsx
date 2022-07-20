import React, { useState } from 'react';
import HomeGraphCard from '../Components/HomeGraphCard';
import Select from 'react-select';
import { customSelectTheme } from '../Components/utils/customSelectTheme';

function HomeGraphContainer() {
  const dataOptions: any = [
    {value:'Memory', label:'Memory'}, 
    {value:'CPU', label: 'CPU'},
    {value:'Bytes', label: 'Bytes'}
  ]; 

  const sourceOptions: any = [
    {value:'Namespace', label:'Namespace'}, 
    {value:'Nodes', label: 'Nodes'},
    {value:'Pods', label: 'Pods'}
  ];

  //state for chosen data type
  const [dataChoice, setDataChoice] = useState('Memory');
  //state for chosen source 
  const [sourceChoice, setSourceChoice] = useState('Pods');
  
const handleDataSelect = (e: any) =>{
  setDataChoice(e.value);
};

const handleSourceSelect = (e: any) =>{
  setSourceChoice(e.value);
};
  
  return (
    <div>
      <div className='graph-dropdown-container'>
        <Select className='data-type-dropdown'
        options={dataOptions}
        defaultValue={dataChoice}
        onChange={handleDataSelect}
        placeholder='Memory'
        theme={customSelectTheme}
        />
        <Select className='data-source-dropdown'
        options={sourceOptions}
        defaultValue={sourceChoice}
        onChange={handleSourceSelect}
        placeholder='Pods'
        theme={customSelectTheme}
        />
      </div>
      <div className='graph-display-container'>
        <HomeGraphCard type={dataChoice} source={sourceChoice} />
      </div>
    </div>
  );
};

export default HomeGraphContainer;