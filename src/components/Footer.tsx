import { AlternateEmail, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Button, styled } from '@mui/material';
import package_json from '../../package.json';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  backgroundColor: theme.palette.secondary.light,
  position: 'fixed',
  left: 0,
  bottom: 0,
  right: 0,
}));

const StyledLeftDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0.5rem',
  width: '100%',
}));

const StyledCenterDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  width: '100%',
}));

const StyledRightDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '0.5rem',
  width: '100%',
  textColor: theme.palette.secondary.main,
}));

const StyledButton = styled(Button)(() => ({
  margin: '0 0.5rem',
}));

const StyledText = styled('text')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 'bold',
}));

function Footer() {
  return (
    <StyledBox>
      <StyledLeftDiv />
      <StyledCenterDiv>
        <StyledButton
          variant="outlined"
          color="secondary"
          startIcon={<LinkedIn fontSize="large" />}
          href="https://www.linkedin.com/in/antonin-lya%C3%ABt-997651182/">
          LinkedIn
        </StyledButton>
        <StyledButton
          variant="outlined"
          color="secondary"
          startIcon={<GitHub fontSize="large" />}
          href="https://github.com/syukoGit">
          GitHub
        </StyledButton>
        <StyledButton
          variant="outlined"
          color="secondary"
          startIcon={<AlternateEmail fontSize="large" />}
          href="mailto:contact@antonin.lyaet.com">
          Email
        </StyledButton>
      </StyledCenterDiv>
      <StyledRightDiv>
        <StyledText>{package_json.version}</StyledText>
      </StyledRightDiv>
    </StyledBox>
  );
}

export default Footer;
