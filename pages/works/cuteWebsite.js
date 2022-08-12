import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cute Website">
    <Container>
      <Title>
       Cute Website <Badge>2022</Badge>
      </Title>
      <P>
       Personal portfolio website 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Git</Meta>
          <Link href="https://github.com/Prince-Gizard/my-homepage">
            https://github.com/Prince-Gizard/my-homepage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Chakra UI, Framer Motion, Three.js</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/cuteWebsite.png" alt="cuteWebsite" />
    </Container>
  </Layout>
)

export default Work
