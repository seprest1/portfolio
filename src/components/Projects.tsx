import { useCallback, useEffect, useState } from 'react';
import { Heading, Grid, Card, Text, Box, Flex, Badge, IconButton } from '@radix-ui/themes';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { projects as projectData, type Project } from '../constants/projects';
import useEmblaCarousel from 'embla-carousel-react';

function CarouselCard({ project }: { project: Project }) {
  return (
    <Box
      style={{
        minWidth: '100%',
      }}
    >
      <Card
        style={{
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          borderWidth: 0,
        }}
      >
        <Grid
          columns={{ initial: '2fr 1fr', sm: '1fr', md: '2fr 1fr' }}
          gap="4"
          align="center"
        >
          {/* Left Column: Image */}
          <Box
            style={{
              width: '100%',
              position: 'relative',
              borderRadius: 'var(--radius-2)',
              overflow: 'hidden',
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: '100%',
                objectFit: 'cover',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </Box>

          {/* Right Column: Text Description */}
          <Flex
            direction="column"
            gap="3"
          >
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
              {project.tech.map((tag) => (
                <Badge
                  key={tag}
                  color="jade"
                >
                  {tag}
                </Badge>
              ))}
            </Flex>
          </Flex>
        </Grid>
      </Card>
    </Box>
  );
}
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
    <Box
      style={{ 
        height: '100%',
        width: '80%',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
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
    </Box>
  );
}
