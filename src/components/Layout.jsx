import { Flex } from '@chakra-ui/react'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <Flex
      px={'20%'}
      direction={'column'}
      align={'flex-start'}
      justify={'center'}
    >
      {children}
    </Flex>
  )
}

export default Layout
