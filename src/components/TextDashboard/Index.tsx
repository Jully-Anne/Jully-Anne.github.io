//TEstilo para os textos utilizados nas páginas de dashboard de cada setor
import * as React from 'react'
import Typography from '@mui/material/Typography'

interface TextDashboardProps {
  children?: React.ReactNode;
}

export default function TextDashboard(props: TextDashboardProps) {
  return (
    <Typography
    component="h1"
    variant="h6"
    padding="1rem"
    sx={{
        flexGrow: 1,
        paddingInline: '2rem',
        color: '#C9D1D9',
        fontSize: '20px'
    }}
>
      {props.children}
    </Typography>
  );
}