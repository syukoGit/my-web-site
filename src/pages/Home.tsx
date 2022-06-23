import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: theme.palette.secondary.dark,
}));

const StyledTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: '60px',
}));

const StyledSubTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '30px',
}));

function Home() {
  return (
    <StyledBox>
      <StyledTitle>Antonin LYAËT</StyledTitle>
      <StyledSubTitle>Coming Soon...</StyledSubTitle>
    </StyledBox>
  );
}

export default Home;