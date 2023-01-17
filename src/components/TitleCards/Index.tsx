//Título genérico para o títulos e nomes das páginas e dados
import * as React from 'react'
import Typography from '@mui/material/Typography'

interface TitleProps {
  children?: React.ReactNode;
}

export default function TitleCards(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" gutterBottom
      sx={{
        background: '#5A2DC0',
        color: '#FFFFFF',
        width: '100%',
        height: '2rem',
        alignItems: 'center',
        fontSize: '18px',
        borderRadius: '16px 16px 0px 0px'
      }}>
      {props.children}
    </Typography>
  );
}