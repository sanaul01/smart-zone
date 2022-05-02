import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{mt:4}}>
        <Grid container spacing={3} sx={{height: '200px'}}>
            <Grid item xs={9} sx={{border: '1px solid black'}}>
                <Typography>This is footer</Typography>
            </Grid>
            <Grid item xs={3} sx={{border: '1px solid black'}}>

            </Grid>
        </Grid>
    </Box>
    );
};

export default Footer;