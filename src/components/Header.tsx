import { Box, styled, IconButton, Tooltip } from '@mui/material';
import ThemeSwitch from './ThemeSwitch';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  padding: '0.5rem',
  backgroundColor: theme.palette.primary.main,
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
}));

function Header() {
  return (
    <StyledBox>
      <ThemeSwitch />
      <Tooltip title="GitHub Repository" arrow>
        <IconButton
          children={<GitHubIcon fontSize="inherit" />}
          href="https://github.com/syukoGit/my-web-site"
          color="secondary"
          size="large"
        />
      </Tooltip>
    </StyledBox>
  );
}

export default Header;
