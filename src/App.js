import './App.css';
import 'fontsource-roboto';
import AppDashboard from "./components/AppDashboard";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-multi-carousel/lib/styles.css';

export const SERVER = 'https://dry-journey-46591.herokuapp.com/api'
//export const SERVER = 'http://localhost:8080/api'

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#ff8f00"
        },
        secondary: {
            main: "#fff"
        },
        type: 'dark',
    },
    props: {
        MuiButtonBase: {
            disableRipple: true
        },
    },
    typography: {
        button: {
            textTransform: "none"
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <AppDashboard/>
        </ThemeProvider>
    );
}

export default App;
