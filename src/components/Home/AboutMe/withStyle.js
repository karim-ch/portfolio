import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  background-color: ${themeGet("colors.white")};

  h1 {
    font-family: var(--font-mono);
  }
`
