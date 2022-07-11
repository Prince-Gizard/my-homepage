import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import dioPost from '../public/images/posts/dioPost.jpg'
import wuShiAudio from '../public/images/posts/wuShiAudio.jpg'
import post2 from '../public/images/posts/post2.jpg'
import post3 from '../public/images/posts/post3.jpg'
import post4 from '../public/images/posts/post4.jpg'
import post5 from '../public/images/posts/post5.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

        <GridItem
            title="First post in my blog"
            thumbnail={dioPost}
            href="https://buraev-blog.netlify.app/cach-you/"/>

        <GridItem
            title="Wu-Shi special audio"
            thumbnail={wuShiAudio}
            href="https://podcasts.apple.com/ru/podcast/wu-shi-podcast/id1544248956?i=1000504010371"/>

          <GridItem
            title="Wu-Shi #2"
            thumbnail={post2}
            href="https://youtu.be/WoSHXIyzTK4"/>

          <GridItem
            title="Wu-Shi #3"
            thumbnail={post3}
            href="https://youtu.be/EKa7EAo84a8"/>

           <GridItem
            title="Wu-Shi #4"
            thumbnail={post4}
            href="https://youtu.be/QV05VcdnoL0"/>

            <GridItem
            title="Wu-Shi #5"
            thumbnail={post5}
            href="https://youtu.be/3qYjI9J44_s"/>
 
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts
