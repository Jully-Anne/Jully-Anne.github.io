//Tela com tabela de definições sobre os equipamentos utilzados no laboratório de VSW.
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { CssBaseline, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'
import Title from '../../components/Title/Index'
import PhonesTable from '../../components/PhonesTable/Index'
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

function Ramais() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}  >
            <Box sx={{ minHeight: '31.5rem' }}>
                <CssBaseline />

                <Box>
                    <Title>
                        Ramais
                    </Title>
                    <DividerTitle />

                    <Grid container sx={{ background: '161B22' }}>
                        {/* Tabela Ramais */}
                        <Grid item xs={10} sm={12} md={14} lg={16}>
                            <Grid>
                                <PhonesTable />
                            </Grid>

                        </Grid>
                    </Grid>

                </Box>
            </Box>

        </ThemeProvider>
    );
}

export default function Index() {
    return <Ramais />;
}