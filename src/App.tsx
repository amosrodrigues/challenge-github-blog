import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PostProvider } from './contexts/Post'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostProvider>
          <Router />
        </PostProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
