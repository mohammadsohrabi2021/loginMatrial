
import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#EEE',
                    '.margin': {
                        margin: 50
                    },
                    'a': {

                    },
                    '#myId': {

                    }
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'mainButton'},
                    style: {
                        color: '#fff',
                        backgroundColor: '#50C2C9',
                        borderRadius: '20px',
                        textAlign: 'center',
                        height: 60,
                        width:'100%',
                        '&:hover': {
                            backgroundColor: '#50C2C9',
                        }
                    }
                },
                {
                    props: {variant: 'secondaryButton'},
                    style: {

                    }
                }
            ]
        }
    },
    palette: {
        primary: {
            main: '#50C2C9',
            light: '#94F6FC',
            dark:'#138B93'
        },
        background: '#EEE'
    },
    shadows:{
        0:' 0px 4px 10px rgba(0, 0, 0, 0.25)',
        1:'box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      title1:{
        fontSize: 13,
        fontWeight: 400,
        lineHeight: '20px',
        color:'rgba(0, 0, 0, 0.79)'
      },
      title2:{
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '18px',
      },
      button:{
        fontSize: 18,
        fontWeight: 600,
        lineHeight: '27px',
        color:'#fff',
        textAlign:'center'
      },
    
    typography: {
        fontFamily: 'Poppins',
        h1: {
            fontSize: 18,
            fontWeight: 700,
            lineHeight: '27px'
        },
    },
    MuiCssBaseline: {
        styleOverrides:{
          body: {
          '@media only screen and (max-width:900px)':{
              background: '#EEE'
            },
           boxSizing:'border-box',
            'a': {
               textDecoration:'none'
            },
            
        }
  
        }
  
      },


})