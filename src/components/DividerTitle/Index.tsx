//Linha de divisória entre componentes
import * as React from 'react'
import Divider from '@mui/material/Divider'



interface DividerProps {
  children?: React.ReactNode;
}

export default function DividerTitle(props: DividerProps) {
  return (
    <Divider sx={{
      position: 'relative',
      top: '0.5rem',
      left: '0.02rem',
      background: '#C9D1D9',
    }} />
  );
}
