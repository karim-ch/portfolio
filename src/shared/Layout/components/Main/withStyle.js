import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  padding: 0 20%;

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    padding: 0 8%;
  }
`
