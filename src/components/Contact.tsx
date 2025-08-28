import { Heading, Text, Box, Link, Flex, Badge } from '@radix-ui/themes';
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { styled } from '../styles/theme';

const Container = styled('div', {
  height: '100vh',
  padding: '0 25%',
  backgroundImage: 'url(https://images.pexels.com/photos/7233124/pexels-photo-7233124.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Banner = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$whiteA12',
  textAlign: 'center',
  padding: '2rem',
});

export default function Contact() {
  return (
    <Container>
      <Banner>
        <Box>
          <Heading
            as="h2"
            size="6"
            mb="4"
          >
            Let's Connect!
          </Heading>
          <Text size="3">
            I'm always open to discussing new opportunities, collaborations, or just to say hello.
            Feel free to reach out through any of the platforms below.
          </Text>
          <Flex
            justify="center"
            gap="4"
            style={{ marginTop: '1.5rem' }}
          >
            <Link
              href="https://www.linkedin.com/in/sarah-elizabeth/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Badge 
                color="indigo"
                size="3"
                variant="solid"
              >
                <LinkedInLogoIcon />
                LinkedIn
              </Badge>
            </Link>
            <Link
              href="https://github.com/seprest1"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Badge 
                color="indigo"
                size="3"
                variant="solid"
               >
                <GitHubLogoIcon />
                GitHub
              </Badge>
            </Link>
            <Link
              href="mailto:seprest@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Badge 
                color="indigo"
                size="3"
                variant="solid"
               >
                <EnvelopeClosedIcon />
                Email
              </Badge>
            </Link>
          </Flex>
        </Box>
      </Banner>
    </Container>
  );
}
