import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";
import profile from '../assets/img/profile.png'
import clock from '../assets/img/clock.png'
import ItemTodo from '../Components/ItemTodo';
import { useDispatch } from 'react-redux';
import { Logout } from '../redux/Slice/Slice';
function Todo() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(Logout())
        navigate("/Login")
    }

    return (
        <>

            <Box height={280} width={'100%'} bgcolor={'primary.main'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} sx={{ flexDirection: 'column' }}>
                <Box onClick={handleLogout} >
                    <Typography color="white" sx={{ cursor: 'pointer' }} display={'flex'} justifyContent={'start'} width='90vw'>
                        <Button variant='contained' sx={{ color: '#fff', bgcolor: 'blue' }}>
                            Back
                        </Button>
                    </Typography>
                </Box>
                <Box width={'fit-content'}>
                    <img src={profile} alte={'userProfile'} />
                </Box>
                <Box>
                    <Typography variant={'h6'} color={'white'}>
                        Welcome Oliva Grace
                    </Typography>
                </Box>
            </Box>
            <Grid display={'flex'} sx={{ flexDirection: "column", alignItems: 'center' }} xs={12} p={3}>
                <Grid alignSelf={'flex-end'} >
                    <Typography variant={'h6'} mb={2}>
                        Good Afternoon
                    </Typography>
                </Grid>
                <Grid>
                    <img src={clock} alte={'imageClock'} />
                </Grid>
                <Grid alignSelf={'flex-start'}>
                    <Typography variant={'h6'}>
                        Task Lists
                    </Typography>
                </Grid>
                <Grid width={'100%'} bgcolor={'white'} height={250} p={3} mt={1}sx={{borderRadius:2}}>
                    <Grid display={'flex'} justifyContent={'space-between'} sx={{ px: 0, marginBottom: 1 }}>
                        <Typography variant={'h6'}>
                            Daily Tasks
                        </Typography>
                        <AddCircleIcon color='primary' sx={{ cursor: 'pointer' }} />
                    </Grid>
                    <ItemTodo/>
                </Grid>
            </Grid>
        </>

    );
}

export default Todo;