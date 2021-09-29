import './App.css';
import 'fontsource-roboto';
import AppDashboard from "./components/AppDashboard";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from "@material-ui/core";
import 'react-perfect-scrollbar/dist/css/styles.css';

export const SERVER = 'https://fast-brook-30426.herokuapp.com/api'
//export const SERVER = 'http://localhost:8080/api'

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff8f00"
        },
        secondary: {
            main: "#fff"
        },
        type: 'dark',
    },
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
