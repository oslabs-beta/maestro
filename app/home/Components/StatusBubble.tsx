import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

interface StatusBubbleProps {
  name?: any,
  status?: any,
  type?: any,
}


const statusBubble = ({ name, status, type}: StatusBubbleProps): JSX.Element => {
  const [statusColor, setStatusColor] = useState('#3371e3')
if(type == 'nodes'){
  //add node status handling 
  console.log(status.length,"its nodes")
}

if(type == 'pods'){
  if(status !== 'Running'){
    const color = '#e3d733';
    console.log(status, "Not running")
    setStatusColor(color)
  }
  
  
}

  return (
    <div className='boxes'>
      <Tooltip title={name}>
        <Box className='status-box' style={{background: statusColor}} />
     </Tooltip>
    </div>
  )
    
}

export default statusBubble