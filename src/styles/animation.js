import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

const slideInKeyframes = keyframes`
  from {
    transform: translateY(-100px) scale(.8)
  }

  to {
    transform: translateY(0) scale(.5)
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `

export const slideIn = ({ time = '.3s', type = 'ease' } = {}) => css`
  animation: ${time} ${slideInKeyframes} ${type};
`
