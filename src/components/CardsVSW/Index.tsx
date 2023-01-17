//Card com as informações gerais de cada setor na tela de dashboard
import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'
import TitleCards from '../TitleCards/Index'
import Text from '../Text/Index'
import { Grid } from '@mui/material'

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function CardsVSW() {
    return (


        <Grid item xs={10} sm={12} md={14} lg={16} >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    gap: '10px',
                    margin: '16px',
                    
                

                    '& > :not(style)': {
                 
                        maxHeight: '10rem',
                        minHeight: '20vh',
                        minWidth: '18rem',
                        maxWidth: '21rem',
                        m: 1,
                        border: "solid 0.15rem",
                        borderColor: "#C9D1D9",
                        borderRadius: '20px',
                        backgroundColor: "#161B22",
                        textAlign: "center",
                        


                    },
                }}
            >

                <React.Fragment>
                    <Link style={{ textDecoration: 'none' }} to="/testsVSW" >
                        <TitleCards>Ensaios</TitleCards>
                        <Text>
                            Descrição de termos e palavras relacionadas aos principais
                            ensaios do laboratório
                        </Text>
                    </Link>
                </React.Fragment>

                <React.Fragment>

                    <Link style={{ textDecoration: 'none' }} to="/equipmentsVSW" >
                        <TitleCards>Equipamentos</TitleCards>

                        <Text>
                            Descrição de termos e palavras relacionadas aos principais
                            equipamentos usados no laboratório.
                        </Text>
                    </Link>

                </React.Fragment>


                <React.Fragment>

                    <Link style={{ textDecoration: 'none' }} to="/developmentVSW" >
                        <TitleCards>Programação</TitleCards>

                        <Text>
                            Descrição de termos e palavras relacionadas a linguagem de programação
                            e softwares usados no laboratório.
                        </Text>
                    </Link>

                </React.Fragment>

                <React.Fragment>

                    <Link style={{ textDecoration: 'none' }} to="/normsVSW" >
                        <TitleCards>Normas</TitleCards>
                        <Text>
                            Resumo das principais normas que regem o laboratório.
                        </Text>
                    </Link>

                </React.Fragment>

                <React.Fragment>

                    <Link style={{ textDecoration: 'none' }} to="/flowchartVSW" >
                        <TitleCards>Fluxogramas</TitleCards>
                        <Text>
                            Fluxogramas que ilustram os processos do laboratório.
                        </Text>
                    </Link>

                </React.Fragment>

                <React.Fragment>

                    <Link style={{ textDecoration: 'none' }} to="/sectorsVSW" >
                        <TitleCards>Setores</TitleCards>
                        <Text>
                            Descrição de termos e palavras relacionadas aos principais
                            laboratórios relacionados ao nosso.
                        </Text>
                    </Link>

                </React.Fragment>
            </Box >
        </Grid>


    )
}


