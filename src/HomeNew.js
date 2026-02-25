import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Education from './EducationComponent';
import { ThemeContext } from './ThemeContext';

import collegero from './images/collegero-logo.jpg';
import aura from './images/aura-logo.png';
import aerial from './images/aerial-image.png';
import legalai from './images/legalai-image.png';
import musicrec from './images/music-image.png';
import signstoleads from './images/signstoleads-logo.png';
import thingsnearme from './images/thingsnearme-logo.jpg';
import umdnext from './images/umdnext-logo.png';
import resume from './images/pranav_dulepet_resume.pdf';
import capitalone from './images/capitalone-logo.png';
import fidelity from './images/fidelity-logo.png';
import evozyne from './images/evozyne-logo.png';
import agora from './images/agora-logo.png';
import h4i from './images/h4i-logo.png';
import amazon from './images/amazon.png';
import apple from './images/apple-logo.png';
import datatecnica from './images/datatecnica-logo.png';
import salzburg from './images/salzburg-view.HEIC';

import { Mail, Linkedin, Github, FileText, GraduationCap, Sun, Moon, ArrowUpRight, Sparkles } from 'lucide-react';

import pranav from './images/pranav-dulepet-nature-pfp.heic';
import cv from './images/pranav_dulepet_cv.pdf';

// Premium minimalist theme design - Anthropic-inspired
const lightTheme = {
  // Core colors - clean, refined neutrals
  background: '#ffffff',
  containerBg: '#fafbfc',
  text: '#1a1a1a',
  subtitleText: '#6b7280',
  footerText: '#9ca3af',

  // Cards and surfaces - subtle, clean
  cardBg: '#ffffff',
  cardBorder: '#e5e7eb',
  aboutSectionBg: '#ffffff',

  // Navigation and tabs
  tabListBg: '#f9fafb',
  tabBg: 'transparent',
  tabText: '#9ca3af',
  tabSelectedText: '#1a1a1a',
  tabSelectedBg: '#ffffff',

  // Interactive elements
  contactInfoBg: '#f9fafb',
  resumeButtonBg: '#1a1a1a',
  resumeButtonText: '#ffffff',
  linkBg: '#f3f4f6',
  linkHoverBg: '#e5e7eb',

  // Shadows and borders - subtle, refined
  cardBoxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
  cardHoverBoxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
  borderColor: '#e5e7eb',

  // Accent - subtle, professional
  accent: '#6366f1',
  accentHover: '#4f46e5',
  goldAccent: '#6366f1',
};

const darkTheme = {
  // Core colors - refined dark tones
  background: '#0b1220',
  containerBg: '#0f172a',
  text: '#f1f5f9',
  subtitleText: '#94a3b8',
  footerText: '#64748b',

  // Cards and surfaces - subtle dark
  cardBg: '#111c33',
  cardBorder: '#23314d',
  aboutSectionBg: '#111c33',

  // Navigation and tabs
  tabListBg: 'transparent',
  tabBg: 'transparent',
  tabText: '#94a3b8',
  tabSelectedText: '#f1f5f9',
  tabSelectedBg: '#111c33',

  // Interactive elements
  contactInfoBg: '#111c33',
  resumeButtonBg: '#111c33',
  resumeButtonText: '#f1f5f9',
  linkBg: '#0f172a',
  linkHoverBg: '#16233d',

  // Shadows and borders - subtle, refined
  cardBoxShadow: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
  cardHoverBoxShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
  borderColor: '#23314d',

  // Accent - subtle, professional
  accent: '#818cf8',
  accentHover: '#a5b4fc',
  goldAccent: '#818cf8',
};

// Minimal clean background - Anthropic-inspired
const CleanBackground = ({ isDarkMode }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -10,
      background: isDarkMode ? '#0f172a' : '#ffffff',
    }} />
  );
};

// Premium global styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    font-size: 17px;
    line-height: 1.47;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${props => props.theme.accent};
    color: ${props => props.theme.background};
  }

  #root {
    min-height: 100vh;
    background: ${props => props.theme.containerBg};
    padding: 0;
  }

  /* Theme-friendly scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.borderColor};
    border-radius: 999px;
    border: 3px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.footerText};
    border: 3px solid transparent;
    background-clip: content-box;
  }

  .aboutme {
    text-decoration: none;
    color: ${props => props.theme.accent};
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }

  .aboutme:hover {
    border-bottom-color: ${props => props.theme.accentHover};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', 'Crimson Text', serif;
  }

  .react-tabs__tab-list {
    border-bottom: 1px solid ${props => props.theme.borderColor};
    margin: 0 0 32px 0;
    display: flex;
    gap: 0;
    padding: 0;
    background: transparent;
    border-radius: 0;
    position: relative;
  }


  .react-tabs__tab {
    padding: 16px 24px;
    border-radius: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.tabText};
    font-weight: 400;
    font-size: 17px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    letter-spacing: 0.01em;
    position: relative;
  }

  .react-tabs__tab--selected {
    background: transparent;
    color: ${props => props.theme.tabSelectedText};
    border-bottom-color: ${props => props.theme.accent};
    font-weight: 500;
  }

  .react-tabs__tab:hover:not(.react-tabs__tab--selected) {
    color: ${props => props.theme.text};
    background: ${props => props.theme.linkBg};
  }

  .react-tabs {
    position: relative;
  }

  .react-tabs__tab-panel {
    background: transparent;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    min-height: 400px;
    width: 100%;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    will-change: opacity, transform;
  }

  .react-tabs__tab-panel--selected {
    opacity: 1;
    transform: translateY(0);
    position: relative;
    pointer-events: auto;
  }

  .project, .experience {
    background: ${props => props.theme.cardBg};
    border: 1px solid ${props => props.theme.cardBorder};
    box-shadow: ${props => props.theme.cardBoxShadow};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }


  .project:hover, .experience:hover {
    box-shadow: ${props => props.theme.cardHoverBoxShadow};
    transform: translateY(-2px);
    border-color: ${props => props.theme.borderColor};
  }

  .project h3, .experience h3 {
    font-family: 'Playfair Display', 'Crimson Text', serif;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .project, .experience {
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .project img, .experience img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    margin-bottom: 6px;
    display: block;
  }

  .project p, .experience p {
    margin: 6px 0 0 0;
    line-height: 1.6;
  }

  .project a, .experience a {
    align-self: center;
  }

  .publications h4 {
    font-family: 'Playfair Display', 'Crimson Text', serif;
    font-weight: 600;
    letter-spacing: 0.01em;
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

// Premium styled components with refined spacing
const Container = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 48px 48px;
  
  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1.5px solid ${props => props.theme.borderColor};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06);
    transform: scale(1.01);
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', 'Crimson Text', serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0 0 12px 0;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.subtitleText};
  margin: 0 0 20px 0;
  letter-spacing: 0.01em;
  
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

const Content = styled.main`
  background: transparent;
  margin-bottom: 48px;
`;

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Footer = styled.footer`
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid ${props => props.theme.borderColor};
  font-size: 14px;
  color: ${props => props.theme.footerText};
  text-align: center;
`;

// About section with clean design - Anthropic-inspired minimalist
const AboutSection = styled.div`
  background: ${props => props.theme.aboutSectionBg};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 8px;
  padding: 32px;
  margin-bottom: 32px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  h4 {
    font-family: 'Playfair Display', 'Crimson Text', serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0 0 16px 0;
    color: ${props => props.theme.text};
    letter-spacing: 0.01em;
  }
  
  p {
    font-size: 17px;
    line-height: 1.6;
    color: ${props => props.theme.text};
    margin: 0 0 20px 0;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const PhotoFrame = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.borderColor};
`;

const PhotoCaption = styled.p`
  margin: 16px 0 0 0;
  font-size: 14px;
  color: ${props => props.theme.footerText};
  font-weight: 400;
`;

// Highlights section - quick, scannable summary cards (visible on the main page)
const HighlightsSection = styled.section`
  margin: 0;
  position: sticky;
  top: 24px;

  @media (max-width: 900px) {
    position: static;
  }
`;

const HighlightsHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin: 0 0 16px 0;
`;

const HighlightsTitle = styled.h3`
  margin: 0;
  font-family: 'Playfair Display', 'Crimson Text', serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: ${props => props.theme.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const HighlightsSubtitle = styled.p`
  margin: 4px 0 0 0;
  color: ${props => props.theme.subtitleText};
  font-size: 15px;
  line-height: 1.5;
`;

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const HighlightCard = styled.div`
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 12px;
  padding: 18px 18px 16px 18px;
  box-shadow: ${props => props.theme.cardBoxShadow};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.cardHoverBoxShadow};
    border-color: ${props => props.theme.cardBorder};
  }
`;

const HighlightKicker = styled.div`
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${props => props.theme.footerText};
  margin-bottom: 10px;
`;

const HighlightTitle = styled.h4`
  margin: 0 0 10px 0;
  font-family: 'Playfair Display', 'Crimson Text', serif;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.text};
  letter-spacing: 0.01em;
  line-height: 1.25;
`;

const HighlightBody = styled.p`
  margin: 0 0 12px 0;
  color: ${props => props.theme.text};
  font-size: 15px;
  line-height: 1.55;
  opacity: 0.95;
`;

const HighlightLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.theme.accent};
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    color: ${props => props.theme.accentHover};
    border-bottom-color: ${props => props.theme.accentHover};
  }
`;

const HighlightLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
`;

// Clean theme toggle button with refined styling
const ThemeToggle = styled.button`
  background: transparent;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  
  &:hover {
    background: ${props => props.theme.linkHoverBg};
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
  
  &:focus {
    outline: 2px solid ${props => props.theme.accent};
    outline-offset: 2px;
  }
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 12px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text};
    background: ${props => props.theme.linkBg};
    padding: 12px;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${props => props.theme.borderColor};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    
    &:hover {
      background: ${props => props.theme.linkHoverBg};
      color: ${props => props.theme.accent};
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

/* Helper Components with theme support and refined styling - Anthropic minimalist */
const ContactSection = styled.div`
  background: ${props => props.theme.contactInfoBg};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 8px;
  padding: 24px 32px;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  box-shadow: ${props => props.theme.cardBoxShadow};
  transition: all 0.3s ease;

  .contact-item {
    margin: 0;
  }

  .contact-item p {
    margin: 0;
    font-size: 17px;
    line-height: 1.6;
  }

  .social-links {
    display: flex;
    gap: 16px;
  }

  .social-links a {
    font-size: 17px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 24px;
  }
`;

const ResumeSection = styled.div`
  margin-top: 32px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  a {
    background: ${props => props.theme.resumeButtonBg};
    color: ${props => props.theme.resumeButtonText};
    padding: 14px 28px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    letter-spacing: 0.01em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid ${props => props.theme.resumeButtonBg};
    font-size: 17px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      opacity: 0.9;
    }
  }
`;

const Home = () => {
  // State for theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add or remove dark-mode class from body
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  // Set initial body class on component mount
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const highlights = [
    {
      kicker: 'Industry',
      title: 'AI Research Intern at DataTecnica',
      body: 'Building AI agents for biomedical research and creating a novel multi-turn benchmark for the biomedical domain.',
      href: 'https://www.datatecnica.com',
      linkLabel: 'Company',
    },
    {
      kicker: 'Project',
      title: 'Synopsis AI - Cursor for Literature Review',
      body: "AI-powered literature review tool for academic research.",
      href: 'https://github.com/pranavdulepet/research-assistant',
      linkLabel: 'Project',
    },
    {
      kicker: 'Writing',
      title: 'New Medium articles on AI safety + alignment',
      body: 'Two new posts about emergent misalignment + the limits of evaluation, and interpretability-driven alignment.',
      links: [
        {
          label: 'Hidden Failures: Emergent Misalignment...',
          href: 'https://medium.com/@pdulepet/hidden-failures-emergent-misalignment-and-the-limits-of-ai-evaluation-6e1715d7cced',
        },
        {
          label: 'Building Safer AI: Interpretability Drives...',
          href: 'https://medium.com/@pdulepet/building-safer-ai-interpretability-drives-and-alignment-8996fa36f71c',
        },
      ],
    },
    // {
    //   kicker: 'Research',
    //   title: 'MS CS at Johns Hopkins — Aug 2025',
    //   body: "Started my MS at Johns Hopkins (CLSP) in August 2025, focusing on ML/NLP and working on LLM uncertainty/confidence research.",
    //   href: 'https://www.clsp.jhu.edu',
    //   linkLabel: 'Program',
    // },


  ];

  /* Tab Content Components */
  const AboutContent = () => (
    <>
      {/* <h3>About</h3> */}
      <AboutLayout>
        <HighlightsSection aria-label="Highlights">
          <HighlightsHeader>
            <div>
              <HighlightsTitle>
                <Sparkles size={18} />
                Highlights
              </HighlightsTitle>

            </div>
          </HighlightsHeader>
          <HighlightsList>
            {highlights.map((h) => (
              <HighlightCard key={`${h.kicker}-${h.title}`}>
                <HighlightKicker>{h.kicker}</HighlightKicker>
                <HighlightTitle>{h.title}</HighlightTitle>
                <HighlightBody>{h.body}</HighlightBody>
                {Array.isArray(h.links) && h.links.length > 0 ? (
                  <HighlightLinks>
                    {h.links.map((link) => (
                      <HighlightLink key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label} <ArrowUpRight size={16} />
                      </HighlightLink>
                    ))}
                  </HighlightLinks>
                ) : (
                  h.href && (
                    <HighlightLink href={h.href} target="_blank" rel="noopener noreferrer">
                      {h.linkLabel || 'Learn more'} <ArrowUpRight size={16} />
                    </HighlightLink>
                  )
                )}
              </HighlightCard>
            ))}
          </HighlightsList>
        </HighlightsSection>

        <AboutSection>
          <p>
            I'm a recent grad from the <a
              className="aboutme"
              href="https://www.cs.umd.edu/"
              target="_blank"
              rel="noopener noreferrer"
            ><GraduationCap size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />University of Maryland</a> and am currently pursuing a master's at <a
              className="aboutme"
              href="https://www.clsp.jhu.edu"
              target="_blank"
              rel="noopener noreferrer"
            ><GraduationCap size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />Johns Hopkins University</a>.
          </p>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'inherit' }}>Let's Connect!</h4>
          <p style={{ margin: '0 0 20px 0' }}>
            I'll be splitting time between the <strong>Bay Area, CA</strong> and <strong>Baltimore, MD</strong> over the next year and a half.
            Always excited to chat about building apps, AI research, tech policy, and a whole lot more. Let's chat or grab a coffee if you're in the area!
          </p>

          {/* Image Section */}
          <div style={{
            marginTop: '24px',
            textAlign: 'center',
            padding: '16px 0'
          }}>
            <PhotoFrame>
              <img
                src={salzburg}
                alt="Cool mountain in Salzburg"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </PhotoFrame>
            <PhotoCaption>Cool mountain in Salzburg</PhotoCaption>
          </div>

        </AboutSection>
      </AboutLayout>
    </>
  );

  const ProjectsContent = () => (
    <div>
      <ProjectGrid>
        <div className="project">
          <a href="http://www.agoraai.app/" target="_blank" rel="noopener noreferrer">
            <img src={agora} alt="Project 1" />
          </a>
          <h3>agora.</h3>
          <a
            className="aboutme"
            href="https://www.agoraai.app/media"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Ft. by University of Maryland)
          </a>
          <p>
            <strong>Skills: </strong>Python, Large Language Models, React, Express, Swift, MongoDB
          </p>
        </div>
        <div className="project">
          <a href="https://apps.apple.com/us/app/college-ro/id1577113429" target="_blank" rel="noopener noreferrer">
            <img src={collegero} alt="Project 1" />
          </a>
          <h3>CollegeRO</h3>
          <a
            className="aboutme"
            href="https://dbknews.com/2022/03/06/umd-student-creates-app-to-help-students-find-research-opportunities/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Ft. in The Diamondback, UMD's newspaper)
          </a>
          <p>
            <strong>Skills: </strong>Full-Stack iOS Development, Rest APIs, MongoDB, AWS, GitHub, Google/Firebase Analytics
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/aerial-object-detection" target="_blank" rel="noopener noreferrer">
            <img src={aerial} alt="Project 1" />
          </a>
          <h3>Aerial Object Detection</h3>
          <a className="aboutme" href="https://www.marksz.org/hackweek/" target="_blank" rel="noopener noreferrer">
            (1st Place in the Northrop Grumman Innovation Challenge)
          </a>
          <p>
            <strong>Skills: </strong>Python, YOLOv5, PyTorch, Google Colab, Matplotlib
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/legalai" target="_blank" rel="noopener noreferrer">
            <img src={legalai} alt="Project 4" />
          </a>
          <h3>LegalAI</h3>
          <p>
            <strong>Skills: </strong>scikit-learn, spaCy, Elasticsearch, Textacy, Blackstone, pytextrank
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/umd-next/blob/main/umd-amzn-design-challenge.pdf" target="_blank" rel="noopener noreferrer">
            <img src={umdnext} alt="Project 3" />
          </a>
          <h3>UMDNext</h3>
          <a
            className="aboutme"
            href="https://sites.google.com/umd.edu/amazondesignchallenge/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            (2nd Place in the Amazon-UMD Product Design Challenge)
          </a>
          <p>
            <strong>Skills: </strong>Product Design, Customer and Market Research, Figma, Microsoft PowerPoint, UI/UX
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/umd-fire-coml/2022-t1-convolutional" target="_blank" rel="noopener noreferrer">
            <img src={musicrec} alt="Project 2" />
          </a>
          <h3>Music Recommender</h3>
          <p>
            <strong>Skills: </strong>TensorFlow, Keras, K-Nearest Neighbors, Triplet Loss, Python, Google Colab, GitHub
          </p>
        </div>
        <div className="project">
          <a href="https://apps.apple.com/us/app/things-near-me/id1506053357?ls=1" target="_blank" rel="noopener noreferrer">
            <img src={thingsnearme} alt="Project 5" />
          </a>
          <h3>Things Near Me</h3>
          <p>
            <strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase
          </p>
        </div>
        <div className="project">
          <a href="https://github.com/pranavdulepet/open_house_sign.git" target="_blank" rel="noopener noreferrer">
            <img src={signstoleads} alt="Project 6" />
          </a>
          <h3>Signs To Leads</h3>
          <p>
            <strong>Skills: </strong>Full-Stack iOS Development, Swift, UIKit, Firebase
          </p>
        </div>
        <div className="project">
          <a href="https://devpost.com/software/aura-obgpw7" target="_blank" rel="noopener noreferrer">
            <img src={aura} alt="Project 7" />
          </a>
          <h3>Aura</h3>
          <p>
            <strong>Skills: </strong>Full-Stack iOS Development, NLP Libraries, Google Cloud, GitHub
          </p>
        </div>
      </ProjectGrid>
    </div>
  );

  const IndustryContent = () => (
    <ExperienceGrid>
      <div className="experience">
        <h3>AI Research Intern</h3>
        <a href="https://www.datatecnica.com/" target="_blank" rel="noopener noreferrer">
          <img src={datatecnica} alt="DataTecnica" />
        </a>
        <h3>DataTecnica</h3>
        <p>02/26 - Present</p>
        <p>
          Building AI agents for biomedical research and creating a novel multi-turn benchmark for the biomedical domain.
          Distilling "aggregation with thinking" into an open model that generalizes to new tools.
        </p>
        <p><strong>Skills:</strong> Python, AI Agents, LLMs, Biomedical NLP, Benchmarking</p>
      </div>
      <div className="experience">
        <h3>Graduate SWE Intern (AI/ML)</h3>
        <a href="https://www.apple.com/apple-intelligence/" target="_blank" rel="noopener noreferrer">
          <img src={apple} alt="Apple" />
        </a>
        <h3>Apple</h3>
        <p>05/25 - 08/25</p>
        <p>Apple Intelligence - building agentic frameworks</p>
        <p><strong>Skills:</strong> Swift, SwiftUI, LLM inference, LLM evaluation</p>
      </div>
      <div className="experience">
        <h3>SDE Intern (ML)</h3>
        <a href="https://www.alexa.com" target="_blank" rel="noopener noreferrer">
          <img src={amazon} alt="Amazon" />
        </a>
        <h3>Amazon</h3>
        <p>06/24 - 08/24</p>
        <p>Developed an end-to-end agentic LLM pipeline for generating personalized <a
          className="aboutme"
          href="https://www.amazon.com/alexa-routines/b?ie=UTF8&node=21442922011"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexa Routine
        </a> recommendations. Article outlining tools and experiments coming soon!</p>
        <p><strong>Skills:</strong> Python, Spark, AWS Bedrock, AWS SageMaker, Closed & Open Source LLMs</p>
      </div>
      <div className="experience">
        <h3>SWE Intern</h3>
        <a href="https://www.fidelity.com/" target="_blank" rel="noopener noreferrer">
          <img src={fidelity} alt="Fidelity" />
        </a>
        <h3>Fidelity Investments</h3>
        <p>06/23 - 08/23</p>
        <p>
          I built a LinkedIn-like MyNetwork recommendation engine for internal Fidelity employees. I used a graph neural
          network approach to create a hybrid recommendation model with reinforcement learning. Here is an article I wrote
          with more information:{' '}
          <a
            className="aboutme"
            href="https://medium.com/@pdulepet/enterprise-mynetwork-platform-c138f7e98537"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, PyTorch, DGL, Graph Neural Networks, Swift, NetworkX, Neo4j
        </p>
      </div>
      <div className="experience">
        <h3>ML Intern</h3>
        <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">
          <img src={capitalone} alt="Capital One" />
        </a>
        <h3>Capital One</h3>
        <p>01/23 - 05/23</p>
        <p>
          I implemented a similarity search framework to use on financial graph embeddings as part of the Enterprise Graph
          Services team. I compared and benchmarked NMSLIB and ANNOY on samples of up to 5 million in size with
          high-dimensionality. Here is an article I wrote with more information:{' '}
          <a
            className="aboutme"
            href="https://www.capitalone.com/tech/machine-learning/similarity-search-graph-embeddings/"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, NMSLIB, ANNOY, scikit-learn, GloVe, Graph Machine Learning
        </p>
      </div>
      <div className="experience">
        <h3>SWE Intern</h3>
        <a href="https://www.evozyne.com/" target="_blank" rel="noopener noreferrer">
          <img src={evozyne} alt="Evozyne" />
        </a>
        <h3>Evozyne</h3>
        <p>06/22 - 08/22</p>
        <p>
          I researched and applied SMT solvers to model the gene cloning process. I used Pandas, Matplotlib, and Seaborn to
          analyze and visualize ways to improve the model by comparing the performance of different algorithms. Here is an
          article I wrote with more information:{' '}
          <a
            className="aboutme"
            href="https://medium.com/@pdulepet/smt-in-computational-biology-dccf006eb397"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, Z3, Satisfiability Modulo Theories, Matplotlib, Seaborn, Pandas
        </p>
      </div>
      <div className="experience">
        <h3>SWE/Tech Lead</h3>
        <a href="https://hack4impact.org/" target="_blank" rel="noopener noreferrer">
          <img src={h4i} alt="Hack4Impact" />
        </a>
        <h3>Hack4Impact</h3>
        <p>09/21 - 05/23</p>
        <p>
          As a Tech Lead for two semesters, I was a liaison between the software engineers and the project managers. I
          assigned and completed tasks according to client requirements and wrote documentation before handing off code to
          the client. Our team worked with the California-based online tutoring non-profit, Step Up Tutoring during my first
          semester and the Virginia-based immigrant youth and family resource service, Edufuturo during my second semester.
        </p>
        <p>
          <strong>Skills: </strong>React.js, React Native, Node.js, Firebase
        </p>
      </div>
    </ExperienceGrid>
  );

  const ResearchContent = () => (
    <ExperienceGrid>
      <div className="experience">
        <h3>Research Assistant</h3>
        <h3>Johns Hopkins (CLSP)</h3>
        <p>08/25 - present</p>
        <p>
          LLM cost and confidence calibration for high-stakes domains
        </p>
        <p>
          <strong>Skills: </strong>Python, PyTorch, NLP, Large Language Models, Reinforcement Learning
        </p>
      </div>
      <div className="experience">
        <h3>Technology Policy Fellow</h3>
        <h3>Paragon Policy Fellowship</h3>
        <p>09/24 - 05/25</p>
        <p>
          I helped design a streamlined AI model approval process for the Santa Clara County Government, reducing redundant labor by
          consolidating three separate interviews into a centralized questionnaire. To support this process,
          I worked with two other fellows to implement an AI Usage Guidelines document that assists clients
          in accurately and comprehensively submitting GenAI applications.

          My team and I are currently working on creating a comprehensive AI dictionary and guidelines for Santa Clara County
          that we can use as a knowledge base for future downstream tasks such as a chatbot.

          <a className="aboutme" href="https://www.paragonfellowship.org" target="_blank" rel="noopener noreferrer">
            Paragon Policy Fellowship Website.
          </a>
        </p>
        <p>
          <strong>Skills: </strong>Literature Review, Policy Analysis
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (GAMMA)</h3>
        <p>01/24 - 12/24</p>
        <p>
          Researched consistent view video and image generation.{' '}
          Developed a pipeline for camera-controlled view synthesis using Stable Diffusion and Zero123++,
          extending the Hawkl framework for text-controlled aerial view synthesis.
          <a className="aboutme" href="https://gamma.umd.edu" target="_blank" rel="noopener noreferrer">
            Geometric Algorithms for Modeling, Motion and Animation Lab
          </a>
          .
        </p>
        <p>
          <strong>Skills: </strong>Python, TensorFlow, Stable Diffusion
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (PIRL)</h3>
        <p>02/23 - present</p>
        <p>
          Contributing to a new method called FAST (Factorizable Attention for Speeding up Transformers) that improves
          transformer efficiency by reducing computational and memory complexity from quadratic to linear.
          <p> </p>
          Developed iOS app using LiDAR scanner to create 3D representations of rooms and extract features. Used to capture
          Room Impulse Responses to then use differentiable acoustics to learn acoustic coefficients. Working on building
          upon NeRF with the scanner and modifying deep learning models.{' '}
          <a className="aboutme" href="http://www.umiacs.umd.edu/labs/pirl/" target="_blank" rel="noopener noreferrer">
            Perceptual Interfaces and Reality Lab
          </a>{' '}
          in{' '}
          <a className="aboutme" href="https://cfar.umd.edu/" target="_blank" rel="noopener noreferrer">
            the CfAR
          </a>
          .
        </p>
        <p>
          <strong>Paper(s):</strong>
          <a className="aboutme" href="https://arxiv.org/abs/2402.07901" target="_blank" rel="noopener noreferrer">
            FAST: Factorizable Attention for Speeding up Transformers
          </a>
        </p>
        <p>
          <strong>Skills: </strong>Swift, ARKit 6, Python, PyTorch
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (CLIP)</h3>
        <p>08/23 - 05/24</p>
        <p>
          Contributed to prompt survey paper. Focused on multimodal, evaluation, and Chain-of-Thought prompting techniques{' '}
          <a className="aboutme" href="http://www.umiacs.umd.edu/labs/clip/" target="_blank" rel="noopener noreferrer">
            Computational Linguistics and Information Processing Lab
          </a>{' '}
          in{' '}
          <a className="aboutme" href="https://cfar.umd.edu/" target="_blank" rel="noopener noreferrer">
            the CfAR
          </a>
          .
        </p>
        <p>
          <strong>Paper(s):</strong>
          <a className="aboutme" href="https://arxiv.org/abs/2406.06608/" target="_blank" rel="noopener noreferrer">
            The Prompt Report: A Systematic Survey of Prompting Techniques
          </a>
        </p>
        <p>
          <strong>Skills: </strong>Python
        </p>
      </div>
      <div className="experience">
        <h3>Undergraduate Researcher</h3>
        <h3>University of Maryland - College Park (iSchool)</h3>
        <p>07/21 - 08/22</p>
        <p>
          I was a part of the web privacy research group under Professor Ido Sivan-Sevilla. I worked with Python, OpenWPM,
          and AWS EC2 to collect, parse, and analyze web privacy data to identify trends and correlations in how third-party
          web trackers follow users' movements and collect personal data. We compiled our work to present at the 3rd annual
          Applications of Contextual Integrity Symposium at the University of Chicago.
        </p>
        <p>
          <strong>Skills: </strong>Python, Amazon Web Services (AWS), SQL
        </p>
      </div>
      <div className="experience">
        <h3>Student Researcher</h3>
        <h3>University of Maryland - College Park (FIRE Program)</h3>
        <p>08/21 - 12/22</p>
        <p>
          We focused on learning the skills necessary to conduct research in our desired field as well as applying them. I
          was a part of the machine learning track where I further developed my knowledge of python, TensorFlow, Keras, and
          other common machine learning techniques and tools. The third semester was when it culminated in a cumulative
          research project, where we developed a music recommendation system based on user listening history. We implemented
          triplet loss and k-nearest neighbors to accomplish this task by aggregating song features and outputting
          recommended songs. We also had the opportunity to present this project at the FIRE symposium which had an audience
          of interested students and faculty.
        </p>
        <p>
          <strong>Skills: </strong>Python, TensorFlow, Keras
        </p>
      </div>
    </ExperienceGrid>
  );

  const PublicationsContent = () => (
    <div className="publications">
      <div className="publication">
        <h4>Research Papers</h4>
        <ul>
          <li>
            <a className="aboutme" href="https://arxiv.org/abs/2402.07901" target="_blank" rel="noopener noreferrer">
              FAST: Factorizable Attention for Speeding up Transformers
            </a>
            <p className="publication-details">
            </p>
          </li>
          <li>
            <a className="aboutme" href="https://arxiv.org/abs/2406.06608/" target="_blank" rel="noopener noreferrer">
              The Prompt Report: A Systematic Survey of Prompt Engineering Techniques
            </a>
            <p className="publication-details">
              Under Review for Nature Springer, Morgan & Claypool
            </p>
          </li>
        </ul>
      </div>

      <div className="publication">
        <h4>Technical Writing</h4>
        <ul>
          <li>
            <a className="aboutme" href="https://medium.com/@pdulepet" target="_blank" rel="noopener noreferrer">
              Medium Blog
            </a>
            <p className="publication-details">
              Articles on ML, Software Engineering, and Technology
            </p>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <CleanBackground isDarkMode={isDarkMode} />
        <Container>
          <Header className="header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ProfileImage src={pranav} alt="Profile" />
              <ProfileDetails>
                <Title>Pranav Dulepet</Title>
                <Subtitle>ML/NLP @ Johns Hopkins | AI Research</Subtitle>

                <ContactIcons>
                  <a href="mailto:ps.dulepet@gmail.com" title="Email" aria-label="Email">
                    <Mail size={22} />
                  </a>
                  <a href="https://www.linkedin.com/in/pranavdulepet" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                    <Linkedin size={22} />
                  </a>
                  <a href="https://github.com/pranavdulepet" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                    <Github size={22} />
                  </a>
                  {/* <a href="tel:9259970461" title="Phone" aria-label="Phone">
                    <Phone size={22} />
                  </a> */}
                  <a href={resume} target="_blank" rel="noopener noreferrer" title="Resume" aria-label="Resume">
                    <FileText size={22} />
                  </a>
                </ContactIcons>

              </ProfileDetails>
            </div>
            <ThemeToggle isDark={isDarkMode} onClick={toggleTheme}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </ThemeToggle>
          </Header>

          <Content>
            <Tabs>
              <TabList>
                <Tab>About</Tab>
                <Tab>Projects</Tab>
                <Tab>Experience</Tab>
                <Tab>Writing</Tab>
                <Tab>Education</Tab>
              </TabList>

              <TabPanel><AboutContent /></TabPanel>
              <TabPanel><ProjectsContent /></TabPanel>
              <TabPanel>
                <Tabs>
                  <TabList>
                    <Tab>Industry</Tab>
                    <Tab>Research</Tab>
                  </TabList>
                  <TabPanel><IndustryContent /></TabPanel>
                  <TabPanel><ResearchContent /></TabPanel>
                </Tabs>
              </TabPanel>
              <TabPanel><PublicationsContent /></TabPanel>
              <TabPanel><Education /></TabPanel>
            </Tabs>
          </Content>

          <ContactSection>
            <div className="contact-item">
              <p>
                <a className="aboutme" href="mailto:ps.dulepet@gmail.com" target="_blank" rel="noopener noreferrer">
                  ps.dulepet@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>925-997-0461</p>
            </div>
            <div className="social-links">
              <a className="aboutme" href="https://www.linkedin.com/in/pranavdulepet" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="aboutme" href="https://github.com/pranavdulepet" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </ContactSection>
          <ResumeSection>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
          </ResumeSection>
          <Footer>Last updated 09.16.2025</Footer>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Home;