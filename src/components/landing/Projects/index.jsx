import React from 'react';
import { Container, Card } from 'Common';
import starIcon from 'Static/icons/star.svg';
import forkIcon from 'Static/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import config from '../../../../data/config';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Companies</h2>
    <Grid>
      {config.companies.map(c => (
        <Item
          key={c.title}
          as="a"
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <Content>
              <h4>{c.title}</h4>
              <p>{c.description}</p>
            </Content>
            <Stats>
              <div>
                <img src={starIcon} alt="stars" />
                <span>50</span>
              </div>
              <div>
                <img src={forkIcon} alt="forks" />
                <span>{c.forkCount}</span>
              </div>
            </Stats>
          </Card>
        </Item>
      ))}
    </Grid>
    <br />
    <br />
    <h2>Freelance Jobs</h2>
    <Grid>
      {config.projects.map(c => (
        <Item
          key={c.title}
          as="a"
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <Content>
              <h4>{c.title}</h4>
              <p>{c.description}</p>
            </Content>
            <Stats>
              <div>
                <span>{c.company}</span>
              </div>
            </Stats>
          </Card>
        </Item>
      ))}
    </Grid>
  </Wrapper>
);
