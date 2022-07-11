import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Crypto Test">
    <Container>
      <Title>
        Website whith crypto transaction <Badge>2022</Badge>
      </Title>
      <P>
        React Blockchain Web 3.0 Website through that you can send ethereum to anyone using metamask account.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://the-great-prince-gizard-site.netlify.app/">
            Web 3.0 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React.js, Solidity, Hardhat, Alchemy, Hardhat waffle </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/cryptoTest.png" alt="cryptoTest" />
    </Container>
  </Layout>
)

export default Work
