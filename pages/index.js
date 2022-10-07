import {
  Link,
  Image,
  Container,
  Heading,
  Box,
  Button,
  List,
  SimpleGrid,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoGithub,
} from 'react-icons/io5'
import { GridItem } from '../components/grid-item'
import wuShi from '../public/images/wuShi.png'
import freeCode from '../public/images/freeCode.png'

const Page = () => {
  return (
    <Layout>
    <Container>
      <Box 
        id="my-text" 
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        mb={6} 
        p={3} 
        align="center"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m frontend developer based in Moscow
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
           Vasilii Buraev
          </Heading>
          <p>Digital Ninja</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="#ff6b81"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <Image
              src="/images/profile-img.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>

      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
    I&apos;m self-taught programmer from Russia. <br/>
    One day I decided to switch career from being bartender. <br/>
    What I didnt know back then is that in the process of learning to code I would soon discover a true passion.<br/>
    I have a one years of experience developing web applications,
    building websites and contributing to Open Source projects.<br/>
    <NextLink href="https://reactjs.org/" scroll={false} passHref>
            <Link>React</Link>
          </NextLink>
    {' '} - thats the technology I know best and work daily with.
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="whiteAlpha" color="#ff6b81">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Balakovo, Russia.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Graduated from the Physics and Mathematics Lyceum in {' '}
           <NextLink href="https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D1%91%D0%BD%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)" scroll={false} passHref>
            <Link>Semenov</Link>
          </NextLink>
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
        Started working as a bartender
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
        Works as a Frontend developer
        </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My interests
          </Heading>
          <Paragraph>Art, Bartending, Industrial Design,{' '}
          <NextLink href="https://en.wikipedia.org/wiki/Web3" scroll={false} passHref>
            <Link>Web3</Link>
          </NextLink>
          , Neurobiology, Machine Learning </Paragraph>

        </Section>


        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Prince-Gizard" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoGithub />}
                >
                  @Prince-Gizard
                </Button>
              </Link>
            </ListItem>
            <ListItem >
              <Link href="https://twitter.com/buraev_v" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoTwitter />}
                >
                  @buraev_v
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCvtSD7ND6kSzlyrBJ_QBMbQ"
            title="Wu-Shi podcast"
            thumbnail={wuShi}
          >
            My YouTube channel
          </GridItem>

           <GridItem
            href="https://www.freecodecamp.org/"
            title="freeCodeCamp"
            thumbnail={freeCode}
          >
            Best learn to code — for free.
          </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false} passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
              Popular posts
            </Button>
          </NextLink>
          </Box>
          <Box id="my-text" mb={1} p={6} align="center">
          © 2022 Vasilii Buraev. All design inspired {' '} <NextLink href="https://www.craftz.dog/" scroll={true} passHref>
            <Link>TM</Link>
          </NextLink>
          </Box>

        </Section>
      </Container>
    </Layout>
  )
};


export default Page
