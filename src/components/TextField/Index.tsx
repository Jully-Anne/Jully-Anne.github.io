import React from 'react';
import TextField from '@mui/material/TextField';

interface TextFieldProps {
    children?: React.ReactNode;
  }
  
  export default function TextFieldBuscar(props: TextFieldProps) {
    return (

<TextField
label="Buscar"
size="small"
sx={{
  input: {
    width: '10vw', 
    height: '1.8vh',
    backgroundColor: '#161B22',
    border: 'solid #C9D1D9 0.1px',
    borderRadius: '5px',
    fontSize: '14px',
    margin: '0',
    paddingInline: '0.5rem',
    paddingTop: '0.8rem',
    
    
    color: '#C9D1D9',
    "&:hover": {
        border: "solid 1.5px #C9D1D9",
    },
    "&:focus": {
        border: 'none',
        height: '0.8rem', 
       
    },

  },
  label: {
    color: '#C9D1D9',
    textAlign: 'center',
    fontSize: '14px',
    paddingInline: '0rem'
  },
  right: '0.8rem',

}}
/>
    );
}