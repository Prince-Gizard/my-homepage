import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Site for photographer">
    <Container>
      <Title>
       Website for chelldrens photographer <Badge>2022</Badge>
      </Title>
      <P>
       Gmm..my mom is a photographer and she needs a websit..dude, 
you are a programmer.. in general, make her a websit.. <br/>
    © my dude Andrew  
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
            coming soon <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Desctop/Mobile</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span> 
            Next.js,
            MUI,
            Strapi,
            Vercel & Heroku
           </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/pigLorem.png" alt="Lorem Ipsum" />
    </Container>
  </Layout>
)

export default Work
