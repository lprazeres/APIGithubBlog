import { Router } from './Router';
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { PostsProvider } from './contexts/PostsContext';





function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </PostsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
