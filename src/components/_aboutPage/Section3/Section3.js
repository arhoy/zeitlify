import React from 'react';
import styled from '@emotion/styled';
import { Section, Container1000 } from '../../reusableStyles/sections/Sections';

import { Card } from './Card';
import { Blob } from './Blob';

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  align-items: center;
  grid-column-gap: 4rem;
  grid-row-gap: 1rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer2 = styled.div``;

export const Section3 = () => {
  return (
    <Section>
      <Container1000>
        <Container>
          <SubContainer2>
            <Card />
          </SubContainer2>
          <SubContainer1>
            <Blob />
          </SubContainer1>
        </Container>
      </Container1000>
    </Section>
  );
};
