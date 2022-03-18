import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
      my={10}
      p={2}
      borderRadius={10}
      borderWidth={1}
      borderColor={'yellow.400'}
    >
      <Text
        fontWeight={900}
        fontSize={'2xl'}
      >
        🛒 Carrito
      </Text>
      <Flex
        direction={'column'}
        align={'flex-start'}
        justify={'flex-start'}
        w={'100%'}
        my={10}
      ></Flex>
    </Flex>
  )
}

export default Cart
