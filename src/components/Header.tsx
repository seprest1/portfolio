import { styled } from '../styles/theme';

const HeaderContainer = styled('header', {
  padding: '16px',
  backgroundColor: '$background',
  color: '$textPrimary',
});

const Button = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$primaryMain',
  cursor: 'pointer',
  fontSize: '16px',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export default function Header({
  isDarkTheme,
  toggleTheme,
}: {
  isDarkTheme: boolean; 
  toggleTheme: () => void;
}) {
  return (
    <HeaderContainer>
      <Button onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'light' : 'dark'} theme
      </Button>
    </HeaderContainer>
  );
}