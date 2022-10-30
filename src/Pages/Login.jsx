import { Button, Grid, Typography, TextField } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import login from '../assets/img/login.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authAsyncThunk } from '../redux/Slice/Slice';
import Stack from '@mui/material/Stack';

// import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


function Login() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({ username: '', password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authAsyncThunk(form))
        // switch (auth.isLogin) {
        //     case true:
        //         navigate('/Todo')
        //         break;
        //     case false:
        //         alert('You entered the wrong username or password')
        //         setForm({ username: '', password: "" })
        //         break;
        //     default:
        //         break;
        // }
        if (auth.isLogin) {
            navigate('/Todo')
            alert('Welcome to our website')
        }
        if (!auth.isLogin) {
            alert('You entered the wrong username or password')
            setForm({ username: '', password: "" })
        }
    }


    const handleShow = () => {
        alert('Hello, dear user, to enter the site, please enter the username  sohrabi and the password 6333667.')
    }


    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', mx: 'auto', minHeight: "600px" }} spacing={4} height={'80%'} marginTop={5}>
            <Grid size="small" item sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} width={'80%'}  >
                <Grid item mb={2} ><Typography variant={'h1'}>Welcome Back!</Typography></Grid>
                <Grid item ><img src={login} /></Grid>
            </Grid>
            <Grid item width={'80%'} >
                <TextField id="outlined-search" label="Enter your full name" value={form.username} name={'username'} type="text" margin="dense" fullWidth size="small" onChange={handleChange} />
                <TextField id="outlined-search" label="Confirm password" type="password" value={form.password} name={'password'} margin="dense" fullWidth size="small" onChange={handleChange} />
            </Grid>
            <Grid item >
                <Typography variant={'title1'} color={'primary.dark'} sx={{ cursor: 'pointer' }} onClick={handleShow}>
                    Forget Password
                </Typography>
            </Grid>
            <Grid item width={'80%'} >
                <Grid >
                    <Button className='opacity' variant={'mainButton'} onClick={handleSubmit} >
                         {auth.loading ?  'login user ...' : "log in" }
                    </Button>
                </Grid>
                <Grid item sx={{ mx: 'auto' }} textAlign={'center'} p={2} >
                    <Typography variant={'title2'} sx={{ display: 'inline' }}>
                        Don’t have an account?
                        <Link to={'/Register'}>
                            <Typography sx={{ display: 'inline' }} variant={'title2'} color={'primary.main'}>
                                Sign Up
                            </Typography>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>

           
        </Grid>
    );
}

export default Login;