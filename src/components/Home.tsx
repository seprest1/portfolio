import { Flex, Badge, Box, Text } from '@radix-ui/themes';
import { styled  } from '@stitches/react';
import { fadeIn, backgroundZoom } from '../styles/animations';

const HeroContainer = styled(Flex, {
  minWidth: '100%',
  height: '100vh',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  color: '$primaryLight',
});

const BackgroundImage = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/chamomile.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  animation: `${backgroundZoom} 15s ease-in-out infinite alternate`,
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '$primaryDark',
    opacity: 0.3,
  },
});

const Content = styled(Box, {
  position: 'relative',
  zIndex: 1,
  animation: `${fadeIn} 1s ease-out`,
});

const Title = styled('h1', {
  fontSize: '$9',
  fontWeight: '$4',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  '@media (min-width: 280px)': {
    fontSize: '$7',
  },
});

const Subtitle = styled('p', {
  fontSize: '$5',
  color: 'rgba(255, 255, 255, 0.9)',
  marginTop: '$1',
  '@media (min-width: 280px)': {
    fontSize: '$3',
  },
});

const WIPBadge = styled('div', {
  position: 'absolute',
  bottom: '$4',
  right: '$4',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  padding: '$1 $3',
  borderRadius: '$pill',
  fontSize: '$2',
  color: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(4px)',
});

const languages = ['React', 'TypeScript', 'Node.js'];

export default function Home() {
  return (
    <HeroContainer
      direction="column"
      align="center"
      justify="center"
      gap="5"
    >
      <BackgroundImage />
      <Content>
        <Title>Sarah Preston</Title>

        <Subtitle>S O F T W A R E &nbsp; E N G I N E E R</Subtitle>
      </Content>
      <Flex
        gap="2"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {languages.map((lang, index) => (
          <Badge
            key={lang}
            size="3"
            color="indigo"
            variant="solid"
            style={{
              animation: `${fadeIn} 1s ease-in-out ${0.5 + index * 0.2}s`,
            }}
          >
            {lang}
          </Badge>
        ))}
      </Flex>

      <WIPBadge>
        <span>🌱</span>
        <Text size="2">Pardon the weeds, this website is still sprouting.</Text>
      </WIPBadge>
    </HeroContainer>
  );
}
