//Tela com tabela de definições sobre os ensaios do laboratório de VSW.
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { CssBaseline, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import Title from '../../components/Title/Index'
import TestsTable from '../../components/TestsTable/Index'
import DividerTitle from '../../components/DividerTitle/Index'


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function Ensaios() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ minHeight:'32.5rem' }}>
                <CssBaseline />

                <Box>
                    <Title>
                            Ensaios
                    </Title>
                    <DividerTitle />
                    
                    <Grid container sx={{  background:'161B22'}}>
                            {/* Tabela Ensaios */}
                            <Grid item xs={12} sm={14} md={16} lg={18} >
                                <Grid>
                                    <TestsTable />
                                </Grid>

                            </Grid>
                        </Grid>
                
                </Box>
            </Box>

        </ThemeProvider>
    );
}

export default function Index() {
    return <Ensaios />;
}