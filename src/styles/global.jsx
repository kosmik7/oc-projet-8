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

        &:hover {
        text-decoration: underline;
        }
    }
    // css-grid sur #root afin de garder le footer en bas de page en toute circonstances (header -> main:1fr -> footer)
    #root {
        min-height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: 100%;
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
    large: '1320px',
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
    // Conteneur par défaut avec 3 largeurs disponibles: medium - default - full
    ${(props) => {
        switch (props.width) {
            case 'full':
                return css`
                    max-width: 100%;
                `
            case 'medium':
                return css`
                    padding: 0 20px;
                    margin: auto;
                    @media ${device.small} {
                        padding: 0 40px;
                    }
                    @media ${device.medium} {
                        max-width: 840px;
                        padding: 0;
                    }
                    @media ${device.large} {
                        max-width: 1024px;
                    }
                `
            default:
                return css`
                    padding: 0 20px;
                    margin: auto;
                    @media ${device.small} {
                        padding: 0 40px;
                    }
                    @media ${device.medium} {
                        max-width: 900px;
                        padding: 0;
                    }
                    @media ${device.large} {
                        max-width: 1240px;
                    }
                `
        }
    }}
`
