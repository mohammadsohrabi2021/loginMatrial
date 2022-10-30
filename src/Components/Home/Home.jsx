import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';
import circle from '../../assets/img/circle.png'
function Home() {
    return (
        <Grid>
            <Grid container position={'relative'} xs={12} md={5} margin={'auto'} height={{ xs: 'auto' }} bgcolor={'#EEE'} mt={3}  >
                <Grid xs={5} position={'absolute'} item height={100} sx={{ zIndex: '10' }}>
                    <img width={'100%'} src={circle} />
                </Grid>
                <Outlet />
            </Grid>
        </Grid>
    );
}

export default Home;