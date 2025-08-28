import '@radix-ui/themes/styles.css';
import { styled } from './styles/theme';
import { globalStyles } from './styles/global';
import { Flex, Section, Theme } from '@radix-ui/themes';
import Nav from './components/Nav';
import { sections } from './constants/sections';

const StyledContainer = styled('main', {
  paddingLeft: '240px',
  '@bp1': {
    paddingLeft: '0',
  },
});

const StyledSection = styled(Section, {
  scrollSnapAlign: 'start',
  height: '100vh',
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
      <Flex>
        <Nav />

        <StyledContainer>
          {sections.map((section) => (
            <StyledSection
              id={section.id}
              key={section.id}
              style={{ height: '100vh' }}
            >
              {section.component}
            </StyledSection>
          ))}
        </StyledContainer>
      </Flex>
    </Theme>
  );
}