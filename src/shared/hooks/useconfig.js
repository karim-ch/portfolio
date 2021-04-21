import { useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

const useAbout = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismicConfig {
        data {
          github {
            url
          }
          instagram {
            url
          }
          linkedin {
            url
          }
          mail {
            text
          }
          resume {
            url
          }
          twitter {
            url
          }
        }
      }
    }
  `)

  console.log(data)
  const { resume, twitter, mail, github, instagram, linkedin } = get(
    data,
    "prismicConfig.data",
    {}
  )

  return { resume, twitter, mail, github, instagram, linkedin }
}

export default useAbout
