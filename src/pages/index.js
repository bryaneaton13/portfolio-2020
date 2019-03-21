import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

// Elements
import Inner from '../elements/Inner';
import { Title, BigTitle, Subtitle } from '../elements/Titles';

// Views
import Hero from '../views/Hero';
import Projects from '../views/Projects';
import About from '../views/About';
import Contact from '../views/Contact';

import avatar from '../images/avatar.jpg';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const projects = [
  {
    title: 'Stitched Story',
    url: 'https://learn.stitchedstory.com',
    bg: 'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
    description: 'The easiest way to capture video content from your users.',
  },
  {
    title: 'Church Echo',
    url: 'https://www.churchecho.com',
    bg: 'linear-gradient(to right, #D4145A 0%, #ED1E79 100%)',
    description: `We make connecting with your church easier, even if they can't make it in person that week.`,
  },
  {
    title: 'ZÜM Media',
    url: 'https://www.zummedia.com',
    bg: 'linear-gradient(to right, #3454DA 0%, #3a3b33 100%)',
    description: `A development and production company specializing in premium content for television, film, and digital platforms worldwide.`,
  },
  {
    title: 'HRVids',
    url: 'https://www.hrvids.com',
    bg: 'linear-gradient(to right, #662D8C 0%, #FBB03B 100%)',
    description:
      'Capture videos from your applicants to pre-screen them faster',
  },
];

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Bryan Eaton.
        </BigTitle>
        <Subtitle>
          A software engineer who creates technical solutions to solve problems.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          {projects.map(p => (
            <ProjectCard key={p.title} title={p.title} link={p.url} bg={p.bg}>
              {p.description}
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Bryan Eaton" />
          <AboutSub>
            Senior software engineer focused on building solutions.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I am a co-founder for multiple technology solutions startups. My
          responsibilities have included development,
          architecture/infrastructure, maintenance, customer support, and sales.
          I mostly focus on Javascript applications all the way through backend,
          frontend, and mobile. I also support clients in their need for
          high-quality applications that need to be built out quickly. With over
          10 years of experience doing web development, I can bring my expertise
          to you.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>
            Get in touch with me or check out{' '}
            <a target="_blank" href="https://github.com/bryaneaton13">
              Github
            </a>
            {' / '}
            <a target="_blank" href="/Resume.pdf">
              Resume
            </a>
          </Title>
          <div className="text-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfs7Lku1-xi8W9e5ap1QiGAxoexPxQxIBHZjjK5oekex-bouw/viewform?embedded=true"
              width="640"
              height="790"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading...
            </iframe>
          </div>
        </Inner>
        {/* <Footer>
          &copy; {new Date().getFullYear()} by Gatsby Starter Portfolio.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer> */}
        <Footer>&copy; {new Date().getFullYear()} by Bryan Eaton</Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
