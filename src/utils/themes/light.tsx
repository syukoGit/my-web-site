import { createTheme } from "@mui/material";

const light = createTheme({
    palette: {
        mode: "light",
        primary: {
            light: "#d1483a",
            main: "#990d12",
            dark: "#640000"
        },
        secondary: {
            light: "#cacacc",
            main: "#99999b",
            dark: "#6b6b6d"
        }
    }
})

export default light;