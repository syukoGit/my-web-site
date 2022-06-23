import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(() => ({
  height: '100vh',
}));

function Home() {
  return (
    <StyledBox>
      <h1 id="title">Page d'acceuil</h1>
    </StyledBox>
  );
}

export default Home;