//Título genérico para o títulos e nomes das páginas e dados
import * as React from 'react'
import Typography from '@mui/material/Typography'

interface TextProps {
  children?: React.ReactNode;
}

export default function Text(props: TextProps) {
  return (
    <Typography component="h5" variant="h6" 
      sx={{
        color: '#FFFFFF',
        alignItems: 'center',
        fontSize: '16px',
        padding: '5px'
      }}>
      {props.children}
    </Typography>
  );
}