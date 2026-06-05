import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

import pranav from './images/pranav-dulepet-nature-pfp-optimized.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background: #f8f8f4;
  }

  body {
    margin: 0;
    background: #f8f8f4;
    color: #171714;
    font-family: "Times New Roman", Times, serif;
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: #d7eadb;
  }
`;

const Page = styled.main`
  width: min(100%, 560px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 72px 22px 44px;

  @media (max-width: 560px) {
    padding-top: 44px;
  }
`;

const Header = styled.header`
  margin-bottom: 28px;
`;

const signalTrace = keyframes`
  0% {
    transform: translateX(-112%);
    opacity: 0;
  }

  16% {
    opacity: 0.86;
  }

  78% {
    opacity: 0.74;
  }

  100% {
    transform: translateX(112%);
    opacity: 0;
  }
`;

const signalDot = keyframes`
  0% {
    left: -10px;
    opacity: 0;
    transform: translateY(50%) scale(0.7);
  }

  18% {
    opacity: 1;
  }

  82% {
    opacity: 0.92;
  }

  100% {
    left: calc(100% + 10px);
    opacity: 0;
    transform: translateY(50%) scale(1);
  }
`;

const Photo = styled.img`
  width: 112px;
  height: 112px;
  margin: 0 0 22px;
  border-radius: 3px;
  object-fit: cover;
  display: block;
  filter: saturate(0.9);
`;

const Name = styled.h1`
  margin: 0 0 18px;
  font-size: clamp(28px, 7vw, 34px);
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: 0;
`;

const Paragraph = styled.p`
  margin: 0 0 18px;
`;

const InlineLink = styled.a`
  text-decoration-thickness: 1px;
  text-decoration-color: #9ca99d;
  text-underline-offset: 3px;

  &:hover {
    color: #0b6544;
    text-decoration-color: currentColor;
  }
`;

const Section = styled.section`
  margin-top: 34px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 11px;
  color: #5d625a;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: lowercase;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid #dcded6;
`;

const LinkItem = styled.li`
  border-bottom: 1px solid #dcded6;
`;

const LinkRow = styled.a`
  display: block;
  padding: 10px 0 11px;
  position: relative;
  overflow: hidden;
  background: transparent;
  text-decoration: none;
  transition: background 180ms ease;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #0b6544 20%, #0b6544 80%, transparent 100%);
    opacity: 0;
    transform: translateX(-112%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: -10px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: #0b6544;
    box-shadow: 0 0 0 2px rgba(11, 101, 68, 0.12);
    opacity: 0;
  }

  &:hover .row-title {
    color: #0b6544;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  &:hover,
  &:focus-visible {
    background: linear-gradient(90deg, rgba(11, 101, 68, 0.055), transparent 72%);
  }

  &:hover::before,
  &:focus-visible::before {
    animation: ${signalTrace} 880ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  &:hover::after,
  &:focus-visible::after {
    animation: ${signalDot} 880ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover::before,
    &:focus-visible::before,
    &:hover::after,
    &:focus-visible::after {
      animation: none;
    }
  }
`;

const StaticRow = styled.div`
  display: block;
  padding: 10px 0 11px;
  position: relative;
  overflow: hidden;
  background: transparent;
  transition: background 180ms ease;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, #0b6544 20%, #0b6544 80%, transparent 100%);
    opacity: 0;
    transform: translateX(-112%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: -10px;
    width: 5px;
    height: 5px;
    border-radius: 999px;
    background: #0b6544;
    box-shadow: 0 0 0 2px rgba(11, 101, 68, 0.12);
    opacity: 0;
  }

  &:hover::before {
    animation: ${signalTrace} 880ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  &:hover::after {
    animation: ${signalDot} 880ms cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  &:hover {
    background: linear-gradient(90deg, rgba(11, 101, 68, 0.055), transparent 72%);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover::before,
    &:hover::after {
      animation: none;
    }
  }
`;

const RowTitle = styled.span`
  display: inline;
  color: #171714;
`;

const RowNote = styled.span`
  color: #696e65;

  &::before {
    content: ' - ';
    color: #9b9f96;
  }
`;

const Footer = styled.footer`
  margin-top: 34px;
  color: #777b72;
  font-size: 14px;
`;

const writingLinks = [
  {
    label: 'LLM forecasting for agentic tasks',
    note: 'coming soon',
  },
  {
    label: 'FAST',
    note: 'factorizable attention for speeding up transformers',
    href: 'https://arxiv.org/abs/2402.07901',
  },
  {
    label: 'The Prompt Report',
    note: 'a survey of prompting techniques',
    href: 'https://arxiv.org/abs/2406.06608/',
  },
  {
    label: 'Capital One Tech',
    note: 'similarity search over graph embeddings',
    href: 'https://www.capitalone.com/tech/machine-learning/similarity-search-graph-embeddings/',
  },
  {
    label: 'Medium',
    note: 'AI safety, alignment, engineering, and policy notes + industry work',
    href: 'https://medium.com/@pdulepet',
  },
];

const buildLinks = [
  {
    label: 'Synopsis AI',
    note: 'literature review assistant',
    href: 'https://github.com/pranavdulepet/research-assistant',
  },
  {
    label: 'agora.',
    note: 'AI meal planning',
    href: 'https://www.agoraai.app/',
  },
  {
    label: 'LegalAI',
    note: 'legal-document NLP and search',
    href: 'https://github.com/pranavdulepet/legalai',
  },
  {
    label: 'CollegeRO',
    note: 'research opportunity iOS app',
    href: 'https://apps.apple.com/us/app/college-ro/id1577113429',
  },
];

const connectLinks = [
  {
    label: 'github',
    note: 'code and prototypes',
    href: 'https://github.com/pranavdulepet',
  },
  {
    label: 'linkedin',
    note: 'work history',
    href: 'https://www.linkedin.com/in/pranavdulepet',
  },
  {
    label: 'twitter / X',
    note: '@pdulepet',
    href: 'https://x.com/pdulepet',
  },
  {
    label: 'email',
    note: 'ps.dulepet@gmail.com',
    href: 'mailto:ps.dulepet@gmail.com',
  },
];

const LinkSection = ({ title, links }) => (
  <Section>
    <SectionTitle>{title}</SectionTitle>
    <LinkList>
      {links.map((link) => (
        <LinkItem key={`${link.label}-${link.note}`}>
          {link.href ? (
            <LinkRow
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              <RowTitle className="row-title">{link.label}</RowTitle>
              <RowNote>{link.note}</RowNote>
            </LinkRow>
          ) : (
            <StaticRow>
              <RowTitle>{link.label}</RowTitle>
              <RowNote>{link.note}</RowNote>
            </StaticRow>
          )}
        </LinkItem>
      ))}
    </LinkList>
  </Section>
);

const Home = () => (
  <>
    <GlobalStyle />
    <Page>
      <Header>
        <Photo src={pranav} alt="Pranav Dulepet" />
        <Name>Pranav Dulepet</Name>
        <Paragraph>
          I work on applied AI at{' '}
          <InlineLink href="https://www.greenboard.com/" target="_blank" rel="noopener noreferrer">
            Greenboard
          </InlineLink>{' '}
          in New York City.
        </Paragraph>
        <Paragraph>
          Before that, I finished an M.S. in Computer Science at{' '}
          <InlineLink href="https://www.clsp.jhu.edu/" target="_blank" rel="noopener noreferrer">
            Johns Hopkins CLSP
          </InlineLink>, studied CS at{' '}
          <InlineLink href="https://www.cs.umd.edu/" target="_blank" rel="noopener noreferrer">
            Maryland
          </InlineLink>, and worked on AI and research engineering projects at{' '}
          <InlineLink href="https://www.datatecnica.com/" target="_blank" rel="noopener noreferrer">
            DataTecnica
          </InlineLink>, Apple, and Amazon Alexa.
        </Paragraph>
        <Paragraph>
          I care the most about building useful and reliable AI systems, agent decision making, and
          evaluation/explainability.
        </Paragraph>
        <Paragraph>
          Always down to chat and connect. Feel free to reach out through{' '}
          <InlineLink href="https://x.com/pdulepet" target="_blank" rel="noopener noreferrer">
            Twitter/X
          </InlineLink>,{' '}
          <InlineLink href="https://www.linkedin.com/in/pranavdulepet" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </InlineLink>, or{' '}
          <InlineLink href="mailto:ps.dulepet@gmail.com">
            email
          </InlineLink>.
        </Paragraph>
      </Header>

      <LinkSection title="research and writing" links={writingLinks} />
      <LinkSection title="selected builds" links={buildLinks} />
      <LinkSection title="connect" links={connectLinks} />

      <Footer>Updated June 2026.</Footer>
    </Page>
  </>
);

export default Home;
