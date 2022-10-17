import { createTheme, ThemeProvider } from "@mui/material";
import NavigationBar from "./NavigationBar";
import NavigationBarMobile from "./NavigationBarMobile";
import Footer from "./Footer";

const theme = createTheme({
    typography: {
        fontFamily: [ 
            'Roboto',
            '-apple-system', 
            'BlinkMacSystemFont',
            'Oxygen', 
            'Ubuntu', 
            'Cantarell', 
            '"Fira Sans"', 
            '"Droid Sans"', 
            '"Helvetica Neue"', 
            'sans-serif'
        ].join(',')
    },
})

export const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {/* if layout is small Navigation Bar Mobile displays, rules in Component */}
            <NavigationBarMobile />
            <NavigationBar/>
                { children }
            <Footer />
        </ThemeProvider>
    )
}