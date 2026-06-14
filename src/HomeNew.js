import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

import pranav from './images/pranav-dulepet-nature-pfp-optimized.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --page-bg: #fbfaf4;
    --ink: #181611;
    --muted: #696257;
    --soft: #81786a;
    --line: rgba(72, 58, 39, 0.18);
    --accent: #7d392f;
    --accent-soft: rgba(125, 57, 47, 0.07);
    --font-serif: "Source Serif 4", Georgia, "Times New Roman", serif;
  }

  html {
    background:
      radial-gradient(circle at 26% 8%, rgba(150, 112, 63, 0.08), rgba(251, 250, 244, 0) 32%),
      radial-gradient(circle at 84% 14%, rgba(125, 57, 47, 0.06), rgba(251, 250, 244, 0) 30%),
      var(--page-bg);
  }

  body {
    margin: 0;
    background:
      radial-gradient(circle at 26% 8%, rgba(150, 112, 63, 0.08), rgba(251, 250, 244, 0) 32%),
      radial-gradient(circle at 84% 14%, rgba(125, 57, 47, 0.06), rgba(251, 250, 244, 0) 30%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(251, 250, 244, 0) 42%),
      var(--page-bg);
    color: var(--ink);
    font-family: var(--font-serif);
    font-size: 16px;
    line-height: 1.62;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: #ead9ce;
  }
`;

const Page = styled.main`
  width: min(calc(100% - 44px), 780px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 76px 0 52px;

  @media (max-width: 560px) {
    width: min(calc(100% - 34px), 780px);
    padding-top: 46px;
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
  border-radius: 2px;
  object-fit: cover;
  display: block;
  filter: saturate(0.72) contrast(1.03);
`;

const Name = styled.h1`
  margin: 0 0 18px;
  font-size: clamp(34px, 6vw, 50px);
  line-height: 1.1;
  font-weight: 500;
  letter-spacing: 0;
`;

const Paragraph = styled.p`
  margin: 0 0 18px;
  max-width: 680px;
`;

const InlineLink = styled.a`
  text-decoration-thickness: 1px;
  text-decoration-color: rgba(125, 57, 47, 0.34);
  text-underline-offset: 3px;

  &:hover {
    color: var(--accent);
    text-decoration-color: currentColor;
  }
`;

const Section = styled.section`
  margin-top: 38px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
  margin: 0 0 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(72, 58, 39, 0.28);
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: var(--muted);
  font-family: inherit;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0;
  text-transform: lowercase;
`;

const SectionCount = styled.span`
  color: var(--soft);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  border-bottom: 1px solid var(--line);
`;

const EntryBase = styled.a`
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) auto;
  gap: 18px;
  align-items: start;
  min-height: 62px;
  padding: 14px 0 15px;
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
    background: linear-gradient(90deg, transparent 0%, var(--accent) 20%, var(--accent) 80%, transparent 100%);
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
    background: var(--accent);
    box-shadow: 0 0 0 2px rgba(125, 57, 47, 0.12);
    opacity: 0;
  }

  &:hover .row-title {
    color: var(--accent);
  }

  &:hover .entry-action {
    color: var(--accent);
  }

  &:hover,
  &:focus-visible {
    background: linear-gradient(90deg, var(--accent-soft), transparent 72%);
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

  @media (max-width: 640px) {
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 12px;
    min-height: 0;
  }
`;

const LinkRow = styled(EntryBase)``;

const StaticRow = styled(EntryBase).attrs({ as: 'div' })`
  cursor: default;
`;

const EntryNumber = styled.span`
  color: var(--soft);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
  line-height: 1.55;
`;

const EntryText = styled.span`
  display: block;
`;

const RowTitle = styled.span`
  display: block;
  color: var(--ink);
  font-size: 17px;
  font-weight: 650;
  line-height: 1.25;
`;

const RowNote = styled.span`
  display: block;
  margin-top: 3px;
  color: var(--soft);
  line-height: 1.4;

  @media (max-width: 640px) {
    margin-top: 2px;
  }
`;

const EntryAction = styled.span`
  color: var(--soft);
  font-size: 13px;
  line-height: 1.55;
  white-space: nowrap;
  transition: color 180ms ease;

  @media (max-width: 640px) {
    grid-column: 2;
    margin-top: 5px;
  }
`;

const Footer = styled.footer`
  margin-top: 34px;
  color: var(--soft);
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

const LinkSection = ({ title, links, actionLabel = 'view' }) => (
  <Section>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      <SectionCount>{links.length} entries</SectionCount>
    </SectionHeader>
    <LinkList>
      {links.map((link, index) => (
        <LinkItem key={`${link.label}-${link.note}`}>
          {link.href ? (
            <LinkRow
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            >
              <EntryNumber>{String(index + 1).padStart(2, '0')}</EntryNumber>
              <EntryText>
                <RowTitle className="row-title">{link.label}</RowTitle>
                <RowNote>{link.note}</RowNote>
              </EntryText>
              <EntryAction className="entry-action">
                {link.href.startsWith('mailto:') ? 'write' : actionLabel}
              </EntryAction>
            </LinkRow>
          ) : (
            <StaticRow>
              <EntryNumber>{String(index + 1).padStart(2, '0')}</EntryNumber>
              <EntryText>
                <RowTitle>{link.label}</RowTitle>
                <RowNote>{link.note}</RowNote>
              </EntryText>
              <EntryAction>coming soon</EntryAction>
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

      <LinkSection title="research and writing" links={writingLinks} actionLabel="read" />
      <LinkSection title="selected builds" links={buildLinks} actionLabel="view" />
      <LinkSection title="connect" links={connectLinks} actionLabel="visit" />

      <Footer>Updated June 2026.</Footer>
    </Page>
  </>
);

export default Home;
