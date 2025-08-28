import { useCallback, useEffect, useState } from 'react';
import { Heading, Card, Text, Box, Flex, Badge, IconButton } from '@radix-ui/themes';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { projects as projectData } from '../constants/projects';
import type { Project } from '../constants/projects';
import useEmblaCarousel from 'embla-carousel-react';
import { styled } from '@stitches/react';

const StyledCard = styled(Card, {
  height: '100%',
  minHeight: '400px',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  border: 'none',
  borderWidth: 0,
  '@media (max-width: 600px)': {
   flexDirection: 'column',
   minHeight: '700px',
  },
});

const StyledImgContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: 'min-content',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  '@media (max-width: 600px)': {
    img: {
      height: '500px',
    }
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    maxHeight: '400px',
    borderRadius: '10px',
  },
});

const StyledContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}); 

function CarouselCard({ project }: { project: Project }) {
  return (
    <Box
      style={{
        minWidth: '100%',
      }}
    >
      <StyledCard>
        <StyledImgContainer>
          <img
            src={project.imageUrl}
            alt={project.title}
          />
        </StyledImgContainer>

        <StyledContentContainer>
          <Heading
            as="h3"
            size="5"
          >
            {project.title}
          </Heading>
          <Text
            as="p"
            color="gray"
          >
            {project.description}
          </Text>
          <Flex
            mt="3"
            gap="2"
          >
            {project.tech.map((tag: string) => (
              <Badge
                key={tag}
                color="jade"
              >
                {tag}
              </Badge>
            ))}
          </Flex>
        </StyledContentContainer>
      </StyledCard>
    </Box>
  );
}

const StyledContainer = styled('div', {
  height: '100%',
  width: '80%',
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    width: '100%',
  },
});

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return () => {};

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <StyledContainer>
      <Heading
        as="h2"
        size="7"
        mb="4"
      >
        Work
      </Heading>

      {/* Carousel Container */}
      <Box
        style={{
          overflow: 'hidden',
          borderRadius: 'var(--radius-3)',
        }}
        ref={emblaRef}
      >
        <Flex style={{ backfaceVisibility: 'hidden', padding: 0 }}>
          {projectData.map((project, index) => (
            <CarouselCard
              key={index}
              project={project}
            />
          ))}
        </Flex>
      </Box>

      {/* Navigation Buttons and Dots */}
      <Flex
        align="center"
        justify="between"
        mt="4"
      >
        <IconButton
          onClick={scrollPrev}
          size="3"
          variant="soft"
          color="lime"
        >
          <ArrowLeftIcon
            width="18"
            height="18"
          />
        </IconButton>

        <Flex
          align="center"
          gap="2"
        >
          {projectData.map((_, index) => (
            <Box
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === selectedIndex ? 'var(--jade-9)' : 'var(--gray-5)',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            />
          ))}
        </Flex>

        <IconButton
          onClick={scrollNext}
          size="3"
          variant="soft"
          color="lime"
        >
          <ArrowRightIcon
            width="18"
            height="18"
          />
        </IconButton>
      </Flex>
    </StyledContainer>
  );
}
