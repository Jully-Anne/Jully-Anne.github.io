//Tela inicial do sistema com informações gerais de cada setor e status das máquinas por setor
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Title from '../../components/Title/Index'
import TextDashboard from '../../components/TextDashboard/Index'
import CardsVSW from '../../components/CardsVSW/Index'
import { Box } from '@mui/system';
import DividerTitle from '../../components/DividerTitle/Index';
import { Grid } from '@material-ui/core'
import { CssBaseline } from '@mui/material'


const mdTheme = createTheme();

function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
      
        <ThemeProvider theme={mdTheme}>
           

                    <Box
                        sx={{
                            minHeight: '31.5rem'
                        }}>
                             
                             <CssBaseline />
                        <Title>
                            VSW - Verificação de Software
                        </Title>
                        <DividerTitle />
             
                            {/* Tabela Programação */}
              
                                <Grid item xs={10} sm={12}>
                        <TextDashboard>
                            Bem-vindo(a) ao <b>melhor laboratório de Verificação de Software da história do Labelo</b>! Este documento
                            colaborativo foi elaborado para ser o teu melhor amigo no início de
                            jornada conosco.
                        </TextDashboard>
                        <TextDashboard>
                        
                            Aqui tu encontra os principais termos utilizados na rotina do
                            laboratório de VSW. Então, pra não te perder, mantém o
                            guia por perto e consulta sempre que precisar!
                        </TextDashboard>
                        
                    
                        </Grid>
                        
                        <CardsVSW />
       
                 
      
                    </Box>
          

        </ThemeProvider>
        
    );
}

export default function Index() {
    return <Dashboard />;
}




