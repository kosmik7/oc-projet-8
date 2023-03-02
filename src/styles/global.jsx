import styled, { css, createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
      box-sizing: border-box;
    }
    * {
      margin: 0;
    }
    html, body {
      height: 100%;
    }
    img, picture, video, canvas, svg {
      display: block;
      max-width: 100%;
    }
    input, button, textarea, select {
      font: inherit;
    }
    body {
        font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",sans-serif;
        font-weight: 500;
    }
    a {
        text-decoration: inherit;
        color: inherit;
    }
`

// Variables
export const colors = {
    primary: '#FF6060',
    background: '#F6F6F6',
}

export const breakpoints = {
    small: '540px',
    medium: '980px',
    large: '1280px',
}

export const device = {
    small: `screen and (min-width: ${breakpoints.small})`,
    medium: `screen and (min-width: ${breakpoints.medium})`,
    large: `screen and (min-width: ${breakpoints.large})`,
}

// Mixins
export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

// Composants
export const BaseContainer = styled.div`
    ${({ mediumWidth }) =>
        mediumWidth &&
        css`
            margin: 0 20px;
            @media ${device.small} {
                margin: 0 40px;
            }
            @media ${device.medium} {
                max-width: 840px;
                margin: auto;
            }
            @media ${device.large} {
                max-width: 1024px;
            }
        `}
    ${({ largeWidth }) =>
        largeWidth &&
        css`
            margin: 0 20px;
            @media ${device.small} {
                margin: 0 40px;
            }
            @media ${device.medium} {
                max-width: 960px;
                margin: auto;
            }
            @media ${device.large} {
                max-width: 1240px;
            }
        `}
    ${({ fullWidth }) =>
        fullWidth &&
        css`
            max-width: 100%;
        `}
`
