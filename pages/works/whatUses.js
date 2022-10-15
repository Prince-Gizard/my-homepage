import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="What I Use">
    <Container>
      <Title>
       What I Use <Badge>2022</Badge>
      </Title>
      <P>
        List of the tech i use by Takuya Matsuyama from Japan
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://uses-vasilii-buraev.vercel.app/">
            uses-vasilii-buraev.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desctop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro, Tailwind CSS, React, Headless UI</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/whatIuse.png" alt="Lorem Ipsum" />

    </Container>
  </Layout>
)

export default Work
