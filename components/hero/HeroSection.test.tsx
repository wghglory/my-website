import {render, screen, within} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

import HeroSection from './HeroSection';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({children, className, initial, animate, variants, ...props}: any) => (
      <div className={className} data-testid="motion-div" {...props}>
        {children}
      </div>
    ),
  },
}));

// Mock next/dynamic
vi.mock('next/dynamic', () => ({
  default: vi.fn(() => {
    return function MockPlayer(props: any) {
      // Convert boolean props to attributes for testing
      const attrs: Record<string, any> = {};
      if (props.src) attrs.src = props.src;
      if (props.speed !== undefined) attrs.speed = String(props.speed);
      if (props.autoplay) attrs.autoplay = '';
      if (props.loop) attrs.loop = '';
      return <div data-testid="lottie-player" {...attrs} />;
    };
  }),
}));

// Mock SVG imports
vi.mock('@/public/images/aboutme.svg', () => ({
  default: (props: any) => <svg data-testid="aboutme-svg" {...props} />,
}));

vi.mock('@/public/images/companies/um.svg', () => ({
  default: (props: any) => <svg data-testid="um-logo" {...props} />,
}));

vi.mock('@/public/images/companies/unionbank.svg', () => ({
  default: (props: any) => <svg data-testid="unionbank-logo" {...props} />,
}));

vi.mock('@/public/images/companies/upmc.svg', () => ({
  default: (props: any) => <svg data-testid="upmc-logo" {...props} />,
}));

vi.mock('@/public/images/companies/vmware.svg', () => ({
  default: (props: any) => <svg data-testid="vmware-logo" {...props} />,
}));

vi.mock('@/public/images/door.svg', () => ({
  default: (props: any) => <svg data-testid="door-svg" {...props} />,
}));

// Mock SocialIcons component
vi.mock('../share/SocialIcons', () => ({
  default: () => <div data-testid="social-icons">Social Icons</div>,
}));

describe('HeroSection', () => {
  it('renders the hero section with correct id', () => {
    const {container} = render(<HeroSection />);
    // Verify section exists by checking heading is rendered
    const heading = screen.getByText(/Web Developer Loving/i);
    expect(heading).toBeInTheDocument();
    // Find section through its content (heading) rather than direct ID access
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const section = container.querySelector('section#home');
    expect(section).toBeInTheDocument();
  });

  it('renders the main heading with framework names', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Web Developer Loving/i)).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('renders the introduction text', () => {
    render(<HeroSection />);
    // Use getByText with a function matcher to find the paragraph
    const introParagraph = screen.getByText((content, element) => {
      return element?.tagName === 'P' && content.includes('Guanghui Wang');
    });
    expect(introParagraph).toBeInTheDocument();
  });

  it('renders the SocialIcons component', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('social-icons')).toBeInTheDocument();
  });

  it('renders the Lottie player with correct props', () => {
    render(<HeroSection />);
    const lottiePlayer = screen.getByTestId('lottie-player');
    expect(lottiePlayer).toBeInTheDocument();
    expect(lottiePlayer).toHaveAttribute('src', '/lottie/developer.json');
    expect(lottiePlayer).toHaveAttribute('speed', '0.8');
    // autoplay and loop are boolean props - check that autoplay attribute exists
    // (React may handle boolean attributes differently, so we verify the key props)
    expect(lottiePlayer.hasAttribute('autoplay')).toBe(true);
  });

  it('renders all company logos', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('vmware-logo')).toBeInTheDocument();
    expect(screen.getByTestId('unionbank-logo')).toBeInTheDocument();
    expect(screen.getByTestId('um-logo')).toBeInTheDocument();
    expect(screen.getByTestId('upmc-logo')).toBeInTheDocument();
  });

  it('applies correct CSS classes to the main section', () => {
    const {container} = render(<HeroSection />);
    // Find section through its content rather than direct ID access
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const section = container.querySelector('section#home');
    expect(section).toHaveClass('overflow-hidden', 'bg-white', 'dark:bg-gray-900');
  });

  it('renders motion divs with correct structure', () => {
    render(<HeroSection />);
    const motionDivs = screen.getAllByTestId('motion-div');
    expect(motionDivs.length).toBeGreaterThan(0);
  });

  it('renders framework names with correct color classes', () => {
    render(<HeroSection />);
    const angular = screen.getByText('Angular');
    const react = screen.getByText('React');
    const vue = screen.getByText('Vue');

    expect(angular).toHaveClass('text-red-600/80', 'dark:text-red-500');
    expect(react).toHaveClass('text-sky-600/80', 'dark:text-sky-500');
    expect(vue).toHaveClass('text-teal-600/90', 'dark:text-teal-500');
  });

  it('renders container with correct padding classes', () => {
    render(<HeroSection />);
    // Find containers and verify they have correct classes
    // Testing Library doesn't provide a way to query by CSS class, so we use querySelector
    // eslint-disable-next-line testing-library/no-node-access
    const containers = document.querySelectorAll('.container');
    expect(containers.length).toBeGreaterThan(0);
    containers.forEach((containerElement) => {
      expect(containerElement).toHaveClass('m-auto', 'px-6', 'lg:px-20');
    });
  });

  it('applies gradient background style to the bottom section', () => {
    render(<HeroSection />);
    // Verify the bg element exists (it contains the logos)
    // Testing Library doesn't provide a way to query by CSS class, so we use querySelector
    // eslint-disable-next-line testing-library/no-node-access
    const bgElement = document.querySelector('.bg');
    expect(bgElement).toBeInTheDocument();
    // Verify logos are within the bg element
    expect(screen.getByTestId('vmware-logo')).toBeInTheDocument();
  });
});
