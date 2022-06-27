import { styled } from '@mui/material';

const StyledContainer = styled('svg')(
  ({ top, left }: { top: number; left: number }) => ({
    position: 'absolute',
    top: top,
    left: left,
    zIndex: 0,
    animationName: 'triangleAnimation',
    animationDuration: 5 + Math.random() * (10 - 5) + 's',
    animationIterationCount: 'infinite',
    '@keyframes triangleAnimation': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  })
);

const StyledTriangle = styled('polygon')(({ theme }) => ({
  fill: 'transparent',
  stroke: theme.palette.primary.dark,
  strokeWidth: '2',
  fillRule: 'nonzero',
}));

const StyledCircle = styled('circle')(({ theme }) => ({
  fill: theme.palette.primary.dark,
  stroke: theme.palette.secondary.dark,
  strokeWidth: '2',
  fillRule: 'nonzero',
}));

interface AnimatedTriangleProps {
  x: number;
  y: number;
}

function AnimatedTriangle({ x, y }: AnimatedTriangleProps) {
  const points = [
    { x: 75, y: 50 },
    { x: 53.35, y: 87.5 },
    { x: 96.65, y: 87.5 },
  ];

  return (
    <StyledContainer width="150" height="150" top={x} left={y}>
      <StyledTriangle points={points.map((p) => `${p.x},${p.y}`).join(' ')} />
      <StyledCircle cx={points[0].x} cy={points[0].y} r="5" />
      <StyledCircle cx={points[1].x} cy={points[1].y} r="5" />
      <StyledCircle cx={points[2].x} cy={points[2].y} r="5" />
    </StyledContainer>
  );
}

export default AnimatedTriangle;
