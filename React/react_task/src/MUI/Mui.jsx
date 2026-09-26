/*

MUI

Move faster with intuitive React UI tools

MUI offers a comprehensive suite of free UI tools to help you ship new features faster

Start with Material UI, our fully-loaded component library, or bring your own 
design system to our production-ready components.

=> npm install @mui/material @emotion/react @emotion/styled

*/


import React from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Mui() {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>

            <hr />

            <Button variant="outlined" size="small">
                Small
            </Button>
            <Button variant="contained" size="medium">
                Medium
            </Button>
            <Button variant="contained" size="large">
                Large
            </Button>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress aria-label="Loading…" />
            </Box>
        </div>
    )
}

export default Mui