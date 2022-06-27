import { Box, styled } from '@mui/material';
import AnimatedTriangle from '../components/AnimatedTriangle';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: theme.palette.secondary.main,
}));

const StyledTitle = styled('h1')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '60px',
}));

const StyledSubTitle = styled('h3')(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '30px',
}));

function Home() {
  const animatedTriangles = [
    { top: { min: 10, max: 40 }, left: 0 },
    { top: { min: 50, max: 90 }, left: 5 },
    { top: { min: 10, max: 30 }, left: 15 },
    { top: { min: 50, max: 80 }, left: 20 },
    { top: { min: 10, max: 35 }, left: 30 },
    { top: { min: 65, max: 80 }, left: 40 },
    { top: { min: 10, max: 35 }, left: 55 },
    { top: { min: 65, max: 80 }, left: 60 },
    { top: { min: 10, max: 90 }, left: 65 },
    { top: { min: 10, max: 45 }, left: 70 },
    { top: { min: 60, max: 80 }, left: 75 },
    { top: { min: 10, max: 80 }, left: 85 },
  ];

  return (
    <StyledBox>
      <StyledTitle>Antonin LYAËT</StyledTitle>
      <StyledSubTitle>Coming Soon...</StyledSubTitle>
      {animatedTriangles.map(({ top, left }, index) => (
        <AnimatedTriangle
          key={`AnimatedTriangle-${index}`}
          top={Math.random() * (top.max - top.min) + top.min + '%'}
          left={left + Math.random() * 5 + '%'}
        />
      ))}
    </StyledBox>
  );
}

export default Home;
