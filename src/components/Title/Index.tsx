//Título genérico para o títulos e nomes das páginas e dados
import * as React from 'react'
import Typography from '@mui/material/Typography'

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography
    component="h1"
    variant="h6"
    noWrap
    sx={{ flexGrow: 1, color: '#58A6FF', fontSize: '22px' }}
>
      {props.children}
    </Typography>
  );
}