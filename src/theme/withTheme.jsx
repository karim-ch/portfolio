import React from "react"
import { ThemeProvider } from "styled-components"
import { getTheme } from "./ThemeProvider"

export default ({ defaultTheme }) => Component => props => (
  <ThemeProvider theme={getTheme(defaultTheme)}>
    <Component {...props} />
  </ThemeProvider>
)
