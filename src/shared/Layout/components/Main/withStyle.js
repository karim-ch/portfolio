import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  padding: 0 15%;
  background-color: ${themeGet("colors.white")};
`
