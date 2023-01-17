import React from 'react';
import {
  Box, CssBaseline, Toolbar, IconButton, Typography, Drawer, Divider, CSSObject,
  styled, Theme, useTheme, AppBarProps, AppBar, ListItemIcon, ListItemText, ListItemButton, Paper, List
} from '@mui/material'
import { ChevronLeft, ChevronRight, DashboardOutlined, Menu, Person } from '@mui/icons-material'
import SettingsIcon from '@mui/icons-material/Settings'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ScienceIcon from '@mui/icons-material/Science';
import { useAuth } from 'react-oidc-context'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AcordeonMenu from '../../components/AcordeonMenu/Index'
import Dashboard from '../Dashboard'
import PhonesLABELO from '../PhonesLABELO/Index'
import TestsVSW from '../TestsVSW/Index'
import EquipmentsVSW from '../EquipmentsVSW/Index'
import DevelopmentVSW from '../DevelopmentVSW/Index'
import NormsVSW from '../NormsVSW/Index'
import FlowchartVSW from '../FlowchartVSW/Index'
import SectorsVSW from '../SectorsVSW/Index'
import JsonDataDisplay from '../teste/index'
import { Link } from 'react-router-dom'
import TextFieldBuscar from '../../components/TextField/Index';



const drawerWidth = 200

const stringToColor = (string: string) => {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}

const openedMixin = (theme: Theme): CSSObject => ({
  background: '#161B22',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = (theme: Theme): CSSObject => ({
  background: '#161B22',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}))

interface EosAppBarProps extends AppBarProps {
  open?: boolean;
}

const EosAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<EosAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const EosDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({

    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),

    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),

  }

  ))

const AppProtected = () => {

  const theme = useTheme()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)



  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  interface AppMenuItemProps {
    to: string;
    label: string;
    icon: React.ReactNode;

  }

  const AppMenuItem = (props: AppMenuItemProps) => {
    return (
      <ListItemButton onClick={() => navigate(props.to)}>
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
        <ListItemText primary={props.label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    )
  }

  const AppMenu = () => {
    return (
      <Paper sx={{
        width: '13rem',
        maxWidth: '100%',
        background: '#161B22',
        color: '#C9D1D9',
        borderTop: '1px solid #C9D1D9',
        borderBottom: '1px solid #C9D1D9',

      }}>
        <List>

          <AppMenuItem to="/dashboard" label="Dashboard" icon={<DashboardOutlined sx={{ color: '#58A6FF' }} />} />
          <Divider sx={{ background: '#C9D1D9' }} />
          <AppMenuItem to="/dashboard" label="Laboratório" icon={<ScienceIcon sx={{ color: '#58A6FF' }} />} />
          <Divider sx={{ background: '#C9D1D9' }} />
          <AppMenuItem to="/phoneslabelo" label="Ramais" icon={<LocalPhoneIcon sx={{ color: '#58A6FF' }} />} />
          <Divider sx={{ background: '#C9D1D9' }} />
          <AppMenuItem to="/teste" label="Configurações" icon={<SettingsIcon sx={{ color: '#58A6FF' }} />} />
          <Divider sx={{ background: '#C9D1D9' }} />
          <AppMenuItem to="/dashboard" label="Login" icon={<Person sx={{ color: '#58A6FF' }} />} />

        </List>
      </Paper>
    )
  }

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        background: '#0D1117',
      }}>

        <EosAppBar position="fixed" open={open} >
          <Toolbar sx={{
            background: '#161B22',
            width: '100vw',
          }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                margin: '0',
                color: '#C9D1D9',
                padding: '0',
                paddingRight: '2.2rem',
                right: '0.5rem'
                ,
                ...(open && { display: 'none' })
              }}>
              <Menu />

            </IconButton>
            <Link style={{ textDecoration: 'none' }} to="/Dashboard" >
              <img src='/src/assets/LogoLABELOBranco.png' width='90vw' />
            </Link>
            <Typography variant="h6" component="div" sx={{
              flexGrow: 1,
              textAlign: 'center',
              fontSize: '4vh',
              color: '#C9D1D9'
            }}
            >
              Guia Rápido LABELO
            </Typography>
            <TextFieldBuscar />
          </Toolbar>

        </EosAppBar>

        <EosDrawer variant="permanent" open={open} >
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose}
              sx={{
                color: '#C9D1D9',

              }}>
              {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </DrawerHeader>

          <AppMenu />

        </EosDrawer>


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>

            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/phoneslabelo" element={<PhonesLABELO />} />
            <Route path='/testsVSW' element={<TestsVSW />} />
            <Route path='/equipmentsVSW' element={<EquipmentsVSW />} />
            <Route path='/developmentVSW' element={<DevelopmentVSW />} />
            <Route path='/normsVSW' element={<NormsVSW />} />
            <Route path='/flowchartVSW' element={<FlowchartVSW />} />
            <Route path='/sectorsVSW' element={<SectorsVSW />} />
            <Route path='/teste' element={<JsonDataDisplay />} />
          </Routes>
        </Box>
      </Box>

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <EosAppBar position="relative" open={open}>
          <Toolbar sx={{ background: '#161B22' }}>
            <div style={{

              textAlign: 'center',
              margin: '0',
              padding: '0',
              width: '100%',
              marginTop: '10px',
              fontSize: '10px',
              color: '#C9D1D9',
              position: 'relative',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <img src='/src/assets/PUCRSTodoBranco.png' height='32vh' />
              <a style={{ textDecoration: 'none', color: '#C9D1D9' }} target="_blank" rel="noopener noreferrer" href='https://www.google.com.br/maps/place/Av.+Ipiranga,+6681+-+Partenon,+Porto+Alegre+-+RS,+90619-900/@-30.0595832,-51.173326,17z/data=!3m1!4b1!4m5!3m4!1s0x951977fd7a7c6539:0x9cc8aa6c0226292a!8m2!3d-30.0595832!4d-51.1711373' >
                <Typography variant="h6" component="div" sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                  fontSize: '3vh',
                  color: '#C9D1D9'
                }}
                >
                  Av. Ipiranga, 6681 - Partenon, Porto Alegre - RS, 90619-900
                </Typography>


              </a>
              <img src='/src/assets/Flamingo.gif' height='82vh' />
            </div>
          </Toolbar>
        </EosAppBar>
      </Box>
    </Box>

  )
}

export default AppProtected
