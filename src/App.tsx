import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"
import { BrowserRouter } from "react-router-dom"
import { Home } from "./page/Home"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
