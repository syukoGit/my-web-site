import { createTheme } from "@mui/material";

const dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#99362e",
            main: "#650006",
            dark: "#3b0000"
        },
        secondary: {
            light: "#6b6b6d",
            main: "#404042",
            dark: "#1a1a1b"
        }
    }
});

export default dark;