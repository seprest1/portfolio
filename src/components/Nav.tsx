import { useState, useEffect, useRef } from 'react';
import { styled } from '../styles/theme';
import { sections as navItems } from '../constants/sections';

const NavRoot = styled('nav', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '240px',
  backgroundColor: '$primaryMain',
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  transition: 'transform 0.3s ease',
  '@bp1': {
    transform: 'translateX(-100%)',
  },
});

const NavHeader = styled('div', {
  padding: '$3 0',
  marginBottom: '$4',
});

const NavTitle = styled('h1', {
  fontSize: '$5',
  fontWeight: 'bold',
  color: '$primaryLight',
  textAlign: 'center',
});

const NavList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

const NavLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  padding: '$2 $3',
  borderRadius: '$2',
  textDecoration: 'none',
  color: '$whiteA12',
  fontWeight: 600,
  letterSpacing: '5px',
  position: 'relative',
  transition: 'background-color 0.2s, color 0.2s',

  '&:hover': {
    backgroundColor: '$primaryLight',
    color: '$textAccent',
  },

  svg: {
    width: '20px',
    height: '20px',
  },

  variants: {
    active: {
      true: {
        color: '$textAccent',
        backgroundColor: '$secondaryLight',
      },
    },
  },
});

const ActiveIndicator = styled('div', {
  position: 'absolute',
  left: '-$4',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '4px',
  height: '0%',
  backgroundColor: '$textAccent',
  borderRadius: '$pill',
  transition: 'height 0.3s ease, opacity 0.3s ease',
  opacity: 0,

  variants: {
    active: {
      true: {
        height: '60%',
        opacity: 1,
      },
    },
  },
});

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = navItems.map((item) => document.getElementById(item.id));
    sections.forEach((section) => {
      if (section) observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.current?.unobserve(section);
      });
    };
  }, []);
  
  return (
    <NavRoot>
      <NavHeader>
        <NavTitle>Sarah Preston</NavTitle>
      </NavHeader>
      <NavList>
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink
              href={item.href}
              active={activeSection === item.id}
            >
              <ActiveIndicator active={activeSection === item.id} />
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </NavList>
    </NavRoot>
  );
}

