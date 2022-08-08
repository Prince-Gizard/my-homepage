import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Dio Brando">
    <Container>
      <Title>
       Linux Terminal Website <Badge>2022</Badge>
      </Title>
      <P>
        Your first wasn’t JoJo! It was me, Dio!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://diobrandoterminal.vercel.app/">
            Dio Brando <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>PC/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Axios, Hasky</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/dioBrando.png" alt="dioBrando" />
    </Container>
  </Layout>
)

export default Work
