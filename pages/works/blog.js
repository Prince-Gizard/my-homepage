import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My Blog">
    <Container>
      <Title>
       My Blog <Badge>2022</Badge>
      </Title>
      <P>
        My personal blog. Forked from Gatsby blog starter.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://buraev-blog.netlify.app/">
            buraev-blog.netlify.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desctop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Gatsby, Netlify CMS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/blog.png" alt="blog" />
    </Container>
  </Layout>
)

export default Work
