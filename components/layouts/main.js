import Head from 'next/head'
import Navbar from '../navbar.js'
import {Box, Container} from '@chakra-ui/react'
import VoxelMain from '../voxel-main.js'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Vasilii Buraev - Homepage </title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <VoxelMain />
        {children}
      </Container>

    </Box>
  )
}

export default Main
