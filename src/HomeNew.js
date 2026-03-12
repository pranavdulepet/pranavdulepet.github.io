import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes, css } from 'styled-components';
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
import salzburg from './images/salzburg-view-optimized.jpg';

import { Mail, Linkedin, Github, FileText, GraduationCap, Sun, Moon, ArrowUpRight, Sparkles, Search, X } from 'lucide-react';

import pranav from './images/pranav-dulepet-nature-pfp-optimized.jpg';
import cv from './images/pranav_dulepet_cv.pdf';

// Premium minimalist theme design - Anthropic-inspired
const lightTheme = {
  mode: 'light',
  // Core colors - warm paper tones
  background: '#f6f2ea',
  containerBg: '#fbf8f2',
  text: '#24211d',
  subtitleText: '#6f675d',
  footerText: '#9a9187',

  // Cards and surfaces - quiet layered paper
  cardBg: 'rgba(251, 247, 240, 0.92)',
  cardBorder: '#e5ddd0',
  aboutSectionBg: 'rgba(252, 248, 241, 0.94)',

  // Navigation
  tabListBg: '#f4efe7',
  tabBg: 'transparent',
  tabText: '#847a70',
  tabSelectedText: '#24211d',
  tabSelectedBg: '#ffffff',

  // Interactive elements
  contactInfoBg: 'rgba(248, 243, 235, 0.92)',
  resumeButtonBg: '#24211d',
  resumeButtonText: '#ffffff',
  linkBg: 'rgba(241, 235, 226, 0.94)',
  linkHoverBg: '#ebe2d6',

  // Shadows and borders - quiet, low contrast
  cardBoxShadow: '0 4px 14px rgba(36, 33, 29, 0.035), 0 1px 3px rgba(36, 33, 29, 0.025)',
  cardHoverBoxShadow: '0 10px 26px rgba(36, 33, 29, 0.06), 0 3px 8px rgba(36, 33, 29, 0.04)',
  borderColor: '#e4dbcf',

  // Accent - muted clay
  accent: '#8f6d4f',
  accentHover: '#775a40',
  goldAccent: '#8f6d4f',
};

const darkTheme = {
  mode: 'dark',
  // Core colors - warm charcoal tones
  background: '#161311',
  containerBg: '#1b1715',
  text: '#efe8de',
  subtitleText: '#a79c90',
  footerText: '#7d7369',

  // Cards and surfaces - softened dark paper
  cardBg: 'rgba(30, 26, 23, 0.92)',
  cardBorder: '#37302a',
  aboutSectionBg: 'rgba(31, 27, 24, 0.94)',

  // Navigation
  tabListBg: 'transparent',
  tabBg: 'transparent',
  tabText: '#968b80',
  tabSelectedText: '#efe8de',
  tabSelectedBg: '#1b1715',

  // Interactive elements
  contactInfoBg: 'rgba(29, 25, 22, 0.94)',
  resumeButtonBg: '#ede4d8',
  resumeButtonText: '#1a1613',
  linkBg: 'rgba(39, 34, 30, 0.94)',
  linkHoverBg: '#463d36',

  // Shadows and borders - subtle, refined
  cardBoxShadow: '0 8px 22px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0, 0, 0, 0.16)',
  cardHoverBoxShadow: '0 14px 30px rgba(0, 0, 0, 0.28), 0 4px 10px rgba(0, 0, 0, 0.18)',
  borderColor: '#3a322b',

  // Accent - muted sand
  accent: '#c09a71',
  accentHover: '#d1af8d',
  goldAccent: '#c09a71',
};

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const highlightToneMap = {
  industry: {
    light: {
      tint: 'rgba(196, 179, 154, 0.10)',
      border: 'rgba(177, 155, 126, 0.18)',
      hover: 'rgba(159, 132, 96, 0.26)',
      glow: 'rgba(196, 179, 154, 0.10)',
    },
    dark: {
      tint: 'rgba(113, 91, 69, 0.18)',
      border: 'rgba(157, 129, 97, 0.24)',
      hover: 'rgba(192, 154, 113, 0.32)',
      glow: 'rgba(113, 91, 69, 0.14)',
    },
  },
  project: {
    light: {
      tint: 'rgba(214, 203, 188, 0.12)',
      border: 'rgba(183, 169, 149, 0.18)',
      hover: 'rgba(154, 135, 111, 0.26)',
      glow: 'rgba(214, 203, 188, 0.10)',
    },
    dark: {
      tint: 'rgba(90, 77, 64, 0.18)',
      border: 'rgba(127, 108, 88, 0.22)',
      hover: 'rgba(169, 145, 118, 0.3)',
      glow: 'rgba(90, 77, 64, 0.12)',
    },
  },
  writing: {
    light: {
      tint: 'rgba(227, 213, 181, 0.14)',
      border: 'rgba(189, 168, 127, 0.18)',
      hover: 'rgba(171, 142, 92, 0.26)',
      glow: 'rgba(227, 213, 181, 0.10)',
    },
    dark: {
      tint: 'rgba(104, 84, 55, 0.18)',
      border: 'rgba(149, 121, 82, 0.24)',
      hover: 'rgba(191, 157, 108, 0.32)',
      glow: 'rgba(104, 84, 55, 0.12)',
    },
  },
};

const getHighlightTone = (theme, variant = 'project') => {
  const palette = highlightToneMap[variant] || highlightToneMap.project;
  return theme.mode === 'dark' ? palette.dark : palette.light;
};

// Minimal clean background - Anthropic-inspired
const CleanBackground = ({ isDarkMode }) => {
  const baseBackground = isDarkMode
    ? 'radial-gradient(circle at 16% 12%, rgba(85, 65, 46, 0.22), transparent 24%), radial-gradient(circle at 84% 10%, rgba(60, 52, 46, 0.18), transparent 26%), linear-gradient(180deg, #151210 0%, #1b1715 58%, #1e1916 100%)'
    : 'radial-gradient(circle at 16% 12%, rgba(226, 214, 194, 0.75), transparent 24%), radial-gradient(circle at 84% 10%, rgba(242, 233, 219, 0.92), transparent 22%), linear-gradient(180deg, #fbf8f2 0%, #f5f0e7 58%, #f4eee5 100%)';

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -10,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: baseBackground,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isDarkMode
          ? 'linear-gradient(180deg, rgba(255,255,255,0.015) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.08) 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.32) 0%, transparent 20%, transparent 78%, rgba(214,203,188,0.10) 100%)',
      }} />
    </div>
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

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background: ${props => props.theme.accent};
    color: ${props => props.theme.background};
  }

  #root {
    min-height: 100vh;
    background: transparent;
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
    transform: translateY(-4px) scale(1.01);
    border-color: ${props => props.theme.accent};
  }

  .project h3, .experience h3 {
    font-family: 'Playfair Display', 'Crimson Text', serif;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .project, .experience {
    border-radius: 12px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .project img, .experience img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    margin-bottom: 6px;
    display: block;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .project:hover img, .experience:hover img {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
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
  padding: 64px 64px;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeUp} 0.68s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 28px;
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 28px;
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
  border-radius: 24px;
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
  font-size: 56px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 44px;
  }
`;

const Subtitle = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.subtitleText};
  margin: 0 0 16px 0;
  letter-spacing: 0.005em;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CredentialBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CredentialBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.linkBg};
  color: ${props => props.theme.subtitleText};
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: none;
  transition: all 0.25s ease;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: ${props => props.theme.accent};
    opacity: 0.9;
  }

  &:hover {
    color: ${props => props.theme.text};
    border-color: ${props => props.theme.accent};
    transform: translateY(-1px);
  }
`;

const Content = styled.main`
  background: transparent;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 88px;
`;

const SectionNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  animation: ${fadeUp} 0.72s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: 120ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const SectionNavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.linkBg};
  color: ${props => props.theme.subtitleText};
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  transition: all 0.25s ease;

  &:hover {
    color: ${props => props.theme.text};
    border-color: ${props => props.theme.accent};
    transform: translateY(-1px);
  }
`;

const Section = styled.section`
  scroll-margin-top: 28px;
  opacity: 0;
  animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${props => props.$delay || 0}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

const SectionHeaderBlock = styled.div`
  max-width: 760px;
  margin-bottom: 28px;
  padding-left: 22px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    bottom: 4px;
    width: 2px;
    border-radius: 999px;
    background: linear-gradient(180deg, ${props => props.theme.accent} 0%, transparent 100%);
  }
`;

const SectionEyebrow = styled.p`
  margin: 0 0 10px 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${props => props.theme.footerText};
`;

const SectionHeading = styled.h2`
  margin: 0 0 12px 0;
  font-size: 36px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const SectionIntro = styled.p`
  margin: 0;
  font-size: 17px;
  line-height: 1.65;
  color: ${props => props.theme.subtitleText};
`;

const SectionGroup = styled.div`
  & + & {
    margin-top: 56px;
  }
`;

const SectionGroupTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 24px;
  line-height: 1.2;
  color: ${props => props.theme.text};
`;

const SectionGroupIntro = styled.p`
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.subtitleText};
`;

const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
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
  border-radius: 16px;
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

const AboutCardLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) 208px;
  gap: 24px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const AboutPhotoCard = styled.aside`
  @media (min-width: 1101px) {
    margin-left: auto;
  }
`;

const PhotoFrame = styled.div`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.borderColor};
  box-shadow: ${props => props.theme.cardBoxShadow};
`;

const AboutPhoto = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
`;

const PhotoCaption = styled.p`
  margin: 12px 0 0 0;
  font-size: 13px;
  color: ${props => props.theme.footerText};
  font-weight: 400;
  text-align: center;
`;

// Highlights section - quick, scannable summary cards (visible on the main page)
const HighlightsSection = styled.section`
  margin: 0;
  position: sticky;
  top: 24px;
  padding: 16px;
  border-radius: 20px;
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.borderColor};
  box-shadow: ${props => props.theme.cardBoxShadow};

  @media (max-width: 900px) {
    position: static;
  }
`;

const HighlightsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 0 0 12px 0;
`;

const HighlightsTitle = styled.h3`
  margin: 0;
  font-family: 'Playfair Display', 'Crimson Text', serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: ${props => props.theme.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const HighlightsMeta = styled.p`
  margin: 0 0 14px 0;
  font-size: 13px;
  line-height: 1.5;
  color: ${props => props.theme.footerText};
`;

const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HighlightCard = styled.div`
  ${props => {
    const tone = getHighlightTone(props.theme, props.$variant);

    return css`
      --highlight-border: ${tone.border};
      --highlight-hover: ${tone.hover};
      --highlight-tint: ${tone.tint};
      --highlight-glow: ${tone.glow};
    `;
  }}
  background: linear-gradient(180deg, var(--highlight-tint) 0%, ${props => props.theme.cardBg} 86%);
  border: 1px solid var(--highlight-border);
  border-radius: 14px;
  padding: 14px 14px 13px 14px;
  box-shadow: none;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--highlight-hover) 0%, transparent 100%);
  }

  &:hover {
    transform: translateY(-1px);
    border-color: var(--highlight-hover);
  }
`;

const HighlightKicker = styled.div`
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${props => props.theme.footerText};
  margin-bottom: 8px;
`;

const HighlightHeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const HighlightTitle = styled.h4`
  margin: 0;
  font-family: 'Playfair Display', 'Crimson Text', serif;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.text};
  letter-spacing: 0.01em;
  line-height: 1.25;
  max-width: 180px;
`;

const HighlightBody = styled.p`
  margin: 10px 0 0 0;
  color: ${props => props.theme.text};
  font-size: 14px;
  line-height: 1.55;
  opacity: 0.95;
  ${props => props.$expanded ? css`
    display: block;
    overflow: visible;
  ` : css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `}
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
  gap: 10px 12px;
  margin-top: 12px;
`;

const HighlightToggle = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: ${props => props.theme.accent};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  padding: 2px 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.accentHover};
  }
`;

const HighlightPrimaryLink = styled(HighlightLink)`
  margin-top: 12px;
`;

const HighlightsPanelToggle = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.accent};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  padding: 2px 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.accentHover};
  }
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
  gap: 32px;
  margin-top: 32px;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 32px;
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

// Search Component Styles
const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 32px;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 48px 14px 48px;
  font-size: 16px;
  border: 1.5px solid ${props => props.theme.borderColor};
  border-radius: 12px;
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
    box-shadow: 0 0 0 3px ${props => props.theme.accent}22;
  }

  &::placeholder {
    color: ${props => props.theme.subtitleText};
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.subtitleText};
  pointer-events: none;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: ${props => props.theme.subtitleText};
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.linkHoverBg};
    color: ${props => props.theme.text};
  }
`;

const Home = () => {
  // State for theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // State for search
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [expandedHighlights, setExpandedHighlights] = useState({});

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

  const toggleHighlight = (title) => {
    setExpandedHighlights((previous) => ({
      ...previous,
      [title]: !previous[title],
    }));
  };

  const credentials = [
    { label: 'JHU CLSP', href: 'https://www.clsp.jhu.edu/' },
    { label: 'Apple AI/ML', href: 'https://www.apple.com/apple-intelligence/' },
    { label: 'Amazon Alexa', href: 'https://www.amazon.com/alexa-routines/b?ie=UTF8&node=21442922011' },
    { label: 'DataTecnica', href: 'https://www.datatecnica.com/' },
  ];

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
      body: 'Three recent posts on emergent misalignment, interpretability-driven alignment, and AI governance.',
      links: [
        {
          label: 'Hidden Failures: Emergent Misalignment...',
          href: 'https://medium.com/@pdulepet/hidden-failures-emergent-misalignment-and-the-limits-of-ai-evaluation-6e1715d7cced',
        },
        {
          label: 'Building Safer AI: Interpretability Drives...',
          href: 'https://medium.com/@pdulepet/building-safer-ai-interpretability-drives-and-alignment-8996fa36f71c',
        },
        {
          label: 'Governing Advanced AI: Institutions...',
          href: 'https://medium.com/@pdulepet/governing-advanced-ai-institutions-accountability-and-policy-frameworks-f3334256677a',
        },
      ],
    },
  ];

  const AboutContent = () => (
    <AboutLayout>
      <HighlightsSection aria-label="Highlights">
        <HighlightsHeader>
          <div>
            <HighlightsTitle>
              <Sparkles size={18} />
              Highlights
            </HighlightsTitle>
          </div>
          {highlights.length > 2 && (
            <HighlightsPanelToggle type="button" onClick={() => setShowAllHighlights((value) => !value)}>
              {showAllHighlights ? 'Show less' : 'See all'}
            </HighlightsPanelToggle>
          )}
        </HighlightsHeader>
        <HighlightsMeta>
          Selected updates. Expand a card for more context.
        </HighlightsMeta>
        <HighlightsList>
          {highlights.slice(0, showAllHighlights ? highlights.length : 2).map((h) => {
            const isExpanded = Boolean(expandedHighlights[h.title]);

            return (
              <HighlightCard key={`${h.kicker}-${h.title}`} $variant={h.kicker.toLowerCase()}>
                <HighlightKicker>{h.kicker}</HighlightKicker>
                <HighlightHeaderRow>
                  <HighlightTitle>{h.title}</HighlightTitle>
                  <HighlightToggle type="button" onClick={() => toggleHighlight(h.title)}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                  </HighlightToggle>
                </HighlightHeaderRow>
                <HighlightBody $expanded={isExpanded}>{h.body}</HighlightBody>
                {isExpanded && Array.isArray(h.links) && h.links.length > 0 ? (
                  <HighlightLinks>
                    {h.links.map((link) => (
                      <HighlightLink key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label} <ArrowUpRight size={16} />
                      </HighlightLink>
                    ))}
                  </HighlightLinks>
                ) : null}
                {isExpanded && !Array.isArray(h.links) && h.href ? (
                  <HighlightPrimaryLink href={h.href} target="_blank" rel="noopener noreferrer">
                    {h.linkLabel || 'Learn more'} <ArrowUpRight size={16} />
                  </HighlightPrimaryLink>
                ) : null}
              </HighlightCard>
            );
          })}
        </HighlightsList>
      </HighlightsSection>

      <AboutSection>
        <AboutCardLayout>
          <div>
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

            <p>
              My current focus is building reliable human-AI collaborative systems across research, evaluation, and user-facing tooling.
              I'm especially interested in how models, interfaces, and workflows can be designed to work well together in high-stakes settings.
            </p>

            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'inherit' }}>Let's Connect!</h4>
            <p style={{ margin: 0 }}>
              I'll be splitting time between the <strong>Bay Area, CA</strong> and <strong>Baltimore, MD</strong> over the next year and a half.
              Always excited to chat about AI research, human-computer interaction, startup ideas, and tech policy.
            </p>
          </div>

          {/* <AboutPhotoCard>
            <PhotoFrame>
              <AboutPhoto
                src={salzburg}
                alt="Mountain view in Salzburg"
              />
            </PhotoFrame>
            <PhotoCaption>Salzburg</PhotoCaption>
          </AboutPhotoCard> */}
        </AboutCardLayout>
      </AboutSection>
    </AboutLayout>
  );

  // Projects data
  const projects = [
    { name: 'agora.', track: 'ai', skills: 'Python, Large Language Models, React, Express, Swift, MongoDB', img: agora, link: 'http://www.agoraai.app/', featured: 'Ft. by University of Maryland', featuredLink: 'https://www.agoraai.app/media' },
    { name: 'Aerial Object Detection', track: 'ai', skills: 'Python, YOLOv5, PyTorch, Google Colab, Matplotlib', img: aerial, link: 'https://github.com/pranavdulepet/aerial-object-detection', featured: '1st Place in the Northrop Grumman Innovation Challenge', featuredLink: 'https://www.marksz.org/hackweek/' },
    { name: 'LegalAI', track: 'ai', skills: 'scikit-learn, spaCy, Elasticsearch, Textacy, Blackstone, pytextrank', img: legalai, link: 'https://github.com/pranavdulepet/legalai' },
    { name: 'Music Recommender', track: 'ai', skills: 'TensorFlow, Keras, K-Nearest Neighbors, Triplet Loss, Python, Google Colab, GitHub', img: musicrec, link: 'https://github.com/umd-fire-coml/2022-t1-convolutional' },
    { name: 'Aura', track: 'ai', skills: 'Full-Stack iOS Development, NLP Libraries, Google Cloud, GitHub', img: aura, link: 'https://devpost.com/software/aura-obgpw7' },
    { name: 'CollegeRO', track: 'product', skills: 'Full-Stack iOS Development, Rest APIs, MongoDB, AWS, GitHub, Google/Firebase Analytics', img: collegero, link: 'https://apps.apple.com/us/app/college-ro/id1577113429', featured: 'Ft. in The Diamondback, UMD\'s newspaper', featuredLink: 'https://dbknews.com/2022/03/06/umd-student-creates-app-to-help-students-find-research-opportunities/' },
    { name: 'UMDNext', track: 'product', skills: 'Product Design, Customer and Market Research, Figma, Microsoft PowerPoint, UI/UX', img: umdnext, link: 'https://github.com/pranavdulepet/umd-next/blob/main/umd-amzn-design-challenge.pdf', featured: '2nd Place in the Amazon-UMD Product Design Challenge', featuredLink: 'https://sites.google.com/umd.edu/amazondesignchallenge/home' },
    { name: 'Things Near Me', track: 'product', skills: 'Full-Stack iOS Development, Swift, UIKit, Firebase', img: thingsnearme, link: 'https://apps.apple.com/us/app/things-near-me/id1506053357?ls=1' },
    { name: 'Signs To Leads', track: 'product', skills: 'Full-Stack iOS Development, Swift, UIKit, Firebase', img: signstoleads, link: 'https://github.com/pranavdulepet/open_house_sign.git' },
  ];

  const projectGroups = [
    {
      key: 'ai',
      title: 'AI / ML',
      intro: 'Projects most aligned with research engineering, evaluation, retrieval, NLP, and applied ML.',
    },
    {
      key: 'product',
      title: 'Product / Design',
      intro: 'User-facing products, mobile apps, and product design work.',
    },
  ];

  const ProjectsContent = () => {
    const filteredProjects = projects.filter(project =>
      searchQuery === '' ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.skills.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div>
        <SearchContainer>
          <SearchIconWrapper>
            <Search size={20} />
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder="Search projects by name or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <ClearButton onClick={() => setSearchQuery('')}>
              <X size={18} />
            </ClearButton>
          )}
        </SearchContainer>
        {projectGroups.map((group) => {
          const groupProjects = filteredProjects.filter(project => project.track === group.key);

          if (groupProjects.length === 0) {
            return null;
          }

          return (
            <SectionGroup key={group.key}>
              <SectionGroupTitle>{group.title}</SectionGroupTitle>
              <SectionGroupIntro>{group.intro}</SectionGroupIntro>
              <ProjectGrid>
                {groupProjects.map((project) => (
                  <div key={project.name} className="project">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <img src={project.img} alt={project.name} />
                    </a>
                    <h3>{project.name}</h3>
                    {project.featured && (
                      <a
                        className="aboutme"
                        href={project.featuredLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ({project.featured})
                      </a>
                    )}
                    <p>
                      <strong>Skills: </strong>{project.skills}
                    </p>
                  </div>
                ))}
              </ProjectGrid>
            </SectionGroup>
          );
        })}
      </div>
    );
  };

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
        </p>
        <p>
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
                <Subtitle>Building reliable human-AI collaborative systems.</Subtitle>
                <CredentialBadges aria-label="Credibility badges">
                  {credentials.map((credential) => (
                    <CredentialBadge
                      key={credential.label}
                      href={credential.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {credential.label}
                    </CredentialBadge>
                  ))}
                </CredentialBadges>

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
            <SectionNav aria-label="Section navigation">
              <SectionNavLink href="#about">About</SectionNavLink>
              <SectionNavLink href="#industry">Industry</SectionNavLink>
              <SectionNavLink href="#research">Research</SectionNavLink>
              <SectionNavLink href="#projects">Projects</SectionNavLink>
              <SectionNavLink href="#writing">Writing</SectionNavLink>
              <SectionNavLink href="#education">Education</SectionNavLink>
            </SectionNav>

            <Section id="about" $delay={180}>
              <SectionHeaderBlock>
                <SectionEyebrow>Overview</SectionEyebrow>
                {/* <SectionHeading>About</SectionHeading>
                <SectionIntro>
                  A quick overview of the work, research, and writing that best capture how I think and build.
                </SectionIntro> */}
              </SectionHeaderBlock>
              <AboutContent />
            </Section>

            <Section id="industry" $delay={240}>
              <SectionHeaderBlock>
                <SectionEyebrow>Industry</SectionEyebrow>
                <SectionHeading>Industry Experience</SectionHeading>
                <SectionIntro>
                  Applied work building, evaluating, and shipping AI systems.
                </SectionIntro>
              </SectionHeaderBlock>
              <IndustryContent />
            </Section>

            <Section id="research" $delay={300}>
              <SectionHeaderBlock>
                <SectionEyebrow>Research</SectionEyebrow>
                <SectionHeading>Research Experience</SectionHeading>
                <SectionIntro>
                  LLM reliability, attention efficiency, multimodal generation, prompting, privacy, and AI policy.
                </SectionIntro>
              </SectionHeaderBlock>
              <ResearchContent />
            </Section>

            <Section id="projects" $delay={360}>
              <SectionHeaderBlock>
                <SectionEyebrow>Projects</SectionEyebrow>
                <SectionHeading>Selected Projects</SectionHeading>
                <SectionIntro>
                  Some of my favorite projects.
                </SectionIntro>
              </SectionHeaderBlock>
              <ProjectsContent />
            </Section>

            <Section id="writing" $delay={420}>
              <SectionHeaderBlock>
                <SectionEyebrow>Writing</SectionEyebrow>
                <SectionHeading>Papers and Technical Writing</SectionHeading>
                <SectionIntro>
                  Writing on LLM systems, alignment, governance, and the technical questions I keep coming back to.
                </SectionIntro>
              </SectionHeaderBlock>
              <PublicationsContent />
            </Section>

            <Section id="education" $delay={480}>
              <SectionHeaderBlock>
                <SectionEyebrow>Education</SectionEyebrow>
                <SectionHeading>Education and Coursework</SectionHeading>
                <SectionIntro>
                  Coursework across HLT, machine learning, systems, HCI, security, and product design.
                </SectionIntro>
              </SectionHeaderBlock>
              <Education />
            </Section>
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
          <Footer>Updated March 2026</Footer>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Home;
