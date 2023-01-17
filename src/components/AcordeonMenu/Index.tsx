//Menu expansível com opções de seleção 
import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ScienceIcon from '@mui/icons-material/Science';
import { Link } from 'react-router-dom'
import { Collapse } from '@mui/material'

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0.1rem solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={< ScienceIcon sx={{ fontSize: '1.5rem', color: '#58A6FF' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(0deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));


const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0.1rem solid #C9D1D9',
}));

export default function AcordeonMenu() {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');
    const [open, setOpen] = React.useState(false)
    const handleDrawerOpen = () => {
        setOpen(true)
    }


    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Accordion onChange={handleChange('panel1')} sx={{ width: '13rem', backgroundColor: '#161B22'}}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={{ backgroundColor: '#161B22' }} >

                <Typography sx={{
                    ml: '1.4rem',
                    fontSize: '1rem',
                    color: '#C9D1D9', 
                }}
                >Laboratórios</Typography>

            </AccordionSummary>
            <Collapse in={expanded === 'panel1'} timeout="auto" unmountOnExit>
                <AccordionDetails >

                    <Typography sx={{
                        mx: '1.5rem',
                        fontSize: '1rem',

                    }}>
                        <Link to='/dashboard' style={{ 'textDecoration': 'none', color: '#C9D1D9' }}>
                            VSW
                        </Link>
                    </Typography>

                </AccordionDetails>
                <AccordionDetails>
                    <Typography sx={{

                        mx: '1.5rem',
                        fontSize: '1rem',

                    }}>
                        <Link to='/dashboard' style={{ 'textDecoration': "none", 'color': '#C9D1D9' }}
                        >EMC
                        </Link>
                    </Typography>
                </AccordionDetails>
                <AccordionDetails>
                    <Typography sx={{
                        mx: '1.5rem',
                        fontSize: '1rem',
                    }}>
                        <Link to='/dashboard' style={{ 'textDecoration': 'none', color: '#C9D1D9' }}>
                            LML
                        </Link>
                    </Typography>
                </AccordionDetails>
            </Collapse>
        </Accordion>
    );
}



