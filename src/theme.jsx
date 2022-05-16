import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    bar: {
      main: '#FF5722',
      focusC: '#de3400'
    },
    second:{
      main: '#393E46'
    },
    textColor:{
      main: '#FFF'
    },
    sideBar:{
      main:'#80808050'
    },
    dividerColor:{
      main:'#48484870'
    }
  },
});

export default theme;