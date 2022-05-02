
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Cart = () => {
    return (
        <div>
            <Box>
                <Grid sx={{display: 'flex'}}>
                    <Grid item xs={6}>
                        <Typography>item</Typography>
                        <Typography>Price</Typography>
                        <Typography>Vat</Typography>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>1</Typography>
                        <Typography>1</Typography>
                        <Typography>1</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Cart;