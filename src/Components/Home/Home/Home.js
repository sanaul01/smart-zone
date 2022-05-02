import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Cart from '../../Cart/Cart';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <Box sx={{mt:4}}>
            <Grid container spacing={3} >
                <Grid item xs={9} sx={{border: '1px solid black'}}>
                    <Typography>this is home page</Typography>
                    <Typography>this is home page</Typography>
                    <Typography>this is home page</Typography>
                    <Typography>this is home page</Typography>
                    <Typography>this is home page</Typography>
                </Grid>
                <Grid item xs={3} sx={{border: '1px solid black'}}>
                    <Cart/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;