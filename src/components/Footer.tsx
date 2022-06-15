import { AlternateEmail, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",
    backgroundColor: theme.palette.secondary.dark,
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: "0 0.5rem",
}));

function Footer() {
    return (
        <StyledBox>
            <StyledButton
                variant="outlined"
                color="secondary"
                startIcon={<LinkedIn fontSize='large'/>}
                href="https://www.linkedin.com/in/antonin-lya%C3%ABt-997651182/">
                LinkedIn
            </StyledButton>
            <StyledButton
                variant="outlined"
                color="secondary"
                startIcon={<GitHub fontSize='large'/>}
                href="https://github.com/syukoGit">
                GitHub
            </StyledButton>
            <StyledButton
                variant="outlined"
                color="secondary"
                startIcon={<AlternateEmail fontSize='large'/>}
                href="mailto:contact@antonin.lyaet.com">
                Email
            </StyledButton>
        </StyledBox>
    );
}

export default Footer;