import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Projects from '../components/Projects';
import {
  HomeIcon,
  PersonIcon,
  RocketIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons';

type AppSection = {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

export const sections: AppSection[] = [
  { href: '#home', name: 'HOME', id: 'home', icon: <HomeIcon />, component: <Home /> },
  { href: '#about', name: 'ABOUT', id: 'about', icon: <PersonIcon />, component: <About /> },
  { href: '#projects', name: 'WORK', id: 'projects', icon: <RocketIcon />, component: <Projects /> },
  { href: '#contact', name: 'CONTACT', id: 'contact', icon: <EnvelopeClosedIcon />, component: <Contact /> },
];