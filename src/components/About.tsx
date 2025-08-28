import React from 'react';
import { styled } from '../styles/theme';
import { useInView } from 'react-intersection-observer';
import { aboutBlurbs } from '../constants/blurbs';
import { slideInFromLeft } from '../styles/animations';

// --- Styled Components ---
const Container = styled('div', {
  height: '100%',
  padding: '$8',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const AboutContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$5',
  alignItems: 'center',
  paddingLeft: '$8',
  '@media (min-width: 768px)': {
    gridTemplateColumns: '2fr 1fr',
  },
});

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
});

const ImageContainer = styled('div', {
  width: '20rem',
  height: '20rem',
  margin: '0 auto',
  borderRadius: '100%',
  overflow: 'hidden',
  boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
});

const ProfileImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const Blurb = styled('div', {
  opacity: 0,
  transition: 'opacity 0.5s ease, transform 0.5s ease',
  variants: {
    inView: {
      true: {
        animation: `${slideInFromLeft} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
      },
    },
  },
});

const Title = styled('h2', {
  fontSize: '$7',
  fontWeight: '$4',
  color: '$textPrimary',
  marginBottom: '$4',
});

// --- New component for the blurb titles ---
const BlurbTitle = styled('h3', {
  fontSize: '$4',
  fontWeight: '$3',
  color: '$textPrimary',
  marginBottom: '$2',
});

const Paragraph = styled('p', {
  fontSize: '$3',
  lineHeight: 1.7,
  color: '$textSecondary',
});

// --- Animated Blurb Component ---
const AnimatedBlurb = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Blurb
      ref={ref}
      inView={inView}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Blurb>
  );
};

export default function About() {
  return (
    <Container>
      <Title>About Me</Title>
      <AboutContainer>
        <TextContainer>
          {aboutBlurbs.map((blurb, index) => (
            <AnimatedBlurb
              key={index}
              delay={index * 0.2}
            >
              <BlurbTitle>{blurb.title}</BlurbTitle>
              <Paragraph>{blurb.content}</Paragraph>
            </AnimatedBlurb>
          ))}
        </TextContainer>
        <ImageContainer>
          <ProfileImage
            src="/public/headshot.jpeg"
            alt="Sarah Preston"
          />
        </ImageContainer>
      </AboutContainer>
    </Container>
  );
}
