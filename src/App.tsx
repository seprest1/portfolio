import '@radix-ui/themes/styles.css';
import { styled } from './styles/theme';
import { globalStyles } from './styles/global';
import { Section, Theme } from '@radix-ui/themes';
import Nav from './components/Nav';
import { sections } from './constants/sections';

const MainContentContainer = styled('main', {
  marginLeft: '240px',
  width: 'calc(100% - 240px)',

  '@bp1': {
    marginLeft: '0',
    width: '100%',
  },
});

const StyledSection = styled(Section, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: 0,
});

export default function App() {
  globalStyles();

  return (
    <Theme
      accentColor="grass"
      grayColor="olive"
      panelBackground="solid"
      radius="full"
    >
      <div style={{ overflow: 'hidden' }}>
        <Nav />

        <MainContentContainer>
          {sections.map((section) => (
            <StyledSection
              id={section.id}
              key={section.id}
            >
              {section.component}
            </StyledSection>
          ))}
        </MainContentContainer>
      </div>
    </Theme>
  );
}
