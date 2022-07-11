import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import cuteWebsite from '../public/images/works/cuteWebsite.png'
import cryptoTest from '../public/images/works/cryptoTest.png'
import dioBrando from '../public/images/works/dioBrando.png'

const Works = () => {
  return (
    <Layout>
    <Container>
      <Heading as="h3" fountSize={20} mb={4}>
        Works
      </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.1}>
        <WorkGridItem id="cuteWebsite" title="Cute Website" thumbnail={cuteWebsite}>
          My first website inspired by Takuya Matsuyama
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="cryptoTest" title="Crypto transaction" thumbnail={cryptoTest}>
          First project whith blockchain technology
        </WorkGridItem>
      </Section>

      <Section delay={0.1}>
        <WorkGridItem id="dioBrando" title="Dio terminal" thumbnail={dioBrando}>
          Linux terminal website
        </WorkGridItem>
      </Section>

    </SimpleGrid>

    </Container>
    </Layout>
  )
}


export default Works
