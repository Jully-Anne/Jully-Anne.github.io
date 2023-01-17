//Caixa de texto para digitar e alterar novos dados
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function InputField() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: '0.5rem', width: '6rem' },

      }}
      noValidate
      autoComplete="off"

    >
      <div>
        <TextField
          id="outlined-size-small"
          size="small"
          sx={{ height: '1rem', }}
        />

      </div>
    </Box>
  );
}
