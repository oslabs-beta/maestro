import React from 'react'
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

interface StatusBubbleProps {
  name?: any,
  status?: any,
}


const statusBubble = ({ name, status}: StatusBubbleProps): JSX.Element => {
  return (
    <div className='boxes'>
      <Tooltip title={name}>
        <Box className='status-box'/>
     </Tooltip>
    </div>
  )
    
}

export default statusBubble