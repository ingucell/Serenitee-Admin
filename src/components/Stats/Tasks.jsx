import React, {useEffect} from 'react'
import { Box } from '@mui/material'
import Calendar from '../Calendar'
import TimeLine from '../timeline'

function Tasks() {

  useEffect(() => {
    const scrollbarStyle = `
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background-color: #e5e6ec   ;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #84cc6a ;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #84cc6a ;
    }
    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
    `;
    const scrollbarStyleElement = document.createElement('style');
    scrollbarStyleElement.innerHTML = scrollbarStyle;
    document.head.appendChild(scrollbarStyleElement);
  }, []);

  return (
    <>
      <Box backgroundColor='white' maxHeight='100vh' height='80vh' width='27rem' padding='1rem' boxShadow='1px 1px 10px #e5e6ec' borderRadius='0.3rem' overflow='scroll'>
         <Calendar />
         <TimeLine />
      </Box>
    </>
  )
}

export default Tasks