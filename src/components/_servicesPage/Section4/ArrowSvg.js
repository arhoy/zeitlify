import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`

  width: 3rem;
  height:3rem;
   z-index:1;
  fill: ${props => props.theme.colors.secondary};
  font-weight:700;
  transform:rotate(-45deg);
  }
`;

const ArrowSVG = () => (
  <SVG
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width="490"
    height="468.7"
    viewBox="0 0 490 468.7"
  >
    <path
      d="M324.89,261H16a16,16,0,0,1,0-32H324.89a16,16,0,1,1,0,32Z"
      transform="translate(0 -10.65)"
    />
    <path
      d="M239.67,346.19a16,16,0,0,1-11.29-27.29L302.31,245l-73.93-73.93A16,16,0,0,1,251,148.45l85.21,85.22a16,16,0,0,1,0,22.6L251,341.49A15.89,15.89,0,0,1,239.67,346.19Z"
      transform="translate(0 -10.65)"
    />
    <path
      d="M255.65,479.35c-97,0-182.55-58.33-218.11-148.62a16,16,0,1,1,29.74-11.67C98,397,171.93,447.39,255.65,447.39,367.24,447.39,458,356.59,458,245S367.24,42.61,255.65,42.61C171.93,42.61,98,93,67.28,170.94a16,16,0,1,1-29.74-11.67C73.1,69,158.69,10.65,255.65,10.65,384.86,10.65,490,115.79,490,245S384.86,479.35,255.65,479.35Z"
      transform="translate(0 -10.65)"
    />
  </SVG>
);

export default ArrowSVG;
