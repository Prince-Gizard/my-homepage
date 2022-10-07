import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import cuteWebsite from '../public/images/works/cuteWebsite.png'
import cryptoTest from '../public/images/works/cryptoTest.png'
import dioBrando from '../public/images/works/dioBrando.png'
import blog from '../public/images/works/blog.png'
import whatUses from '../public/images/wuShi.png'
const Works = () => {
  return (
    <Layout>
    <Container>

      <Heading as='h3' fountSize={20} mb={4}>
       Works
      </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.1}>
        <WorkGridItem id="cuteWebsite" title="Cute Website" thumbnail={cuteWebsite}>
          My personal website inspired by TM
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="blog" title="My personal blog" thumbnail={blog}>
          My personal blog whis admin panel
        </WorkGridItem>
      </Section>
    </SimpleGrid>
      
    <Section delay={0.2}>
      <Divider my={6} />
      
      <Heading as='h3' fontSize={20} mb={4}>
        Project
      </Heading>
    </Section>

    <SimpleGrid columns={[1,1,2]} gap={6}>
       <Section delay={0.1}>
        <WorkGridItem id="cryptoTest" title="Crypto transaction" thumbnail={cryptoTest}>
          Project whith blockchain technology
        </WorkGridItem>
      </Section>

      <Section delay={0.1}>
        <WorkGridItem id="dioBrando" title="Dio terminal" thumbnail={dioBrando}>
          Linux terminal website
        </WorkGridItem>
      </Section>
    
      <Section delay={0.1}>
        <WorkGridItem id="whatUses" title="What I Use" thumbnail={whatUses}>
          List of tech i use
        </WorkGridItem>
      </Section>

    </SimpleGrid>

    </Container>
    </Layout>
  )
}


export default Works
