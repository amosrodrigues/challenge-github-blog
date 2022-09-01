import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font: 400 1rem  'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 0.375rem;
    height: 0.375rem;
    /* margin-right: 10px; */
  }

  ::-webkit-scrollbar-corner {
    height: 0;
    border: none;
    background: none;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.yellow};
    border-radius: 3px;
    cursor: move;
  }
`
