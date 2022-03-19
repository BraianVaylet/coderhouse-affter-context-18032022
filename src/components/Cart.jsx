import { Avatar, Badge, Button, Flex, Text } from '@chakra-ui/react'
import { CartContext } from 'context/CartContext'
import React, { useContext } from 'react'

const Cart = () => {
  const { clear, cart, removeItem } = useContext(CartContext)
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
      <Flex
        align={'center'}
        justify={'space-between'}
        w={'100%'}
      >
        <Text
          fontWeight={900}
          fontSize={'2xl'}
        >
          🛒 Carrito
        </Text>
        <Button onClick={clear}>Limpiar el 🛒</Button>
      </Flex>
      <Flex
        direction={'column'}
        align={'flex-start'}
        justify={'flex-start'}
        w={'100%'}
        my={10}
      >
        {cart.map(item => {
          console.log('item', item)
          return (
          <Flex
            key={item.product.id}
            align={'center'}
            justify={'space-between'}
            p={2}
            mb={5}
            w={'100%'}
          >
            <Flex
              align={'center'}
              justify={'flex-start'}
            >
              <Avatar name={item.product.title} src={item.product.img} />
              <Badge mx={2} colorScheme={'yellow'}>x{item.count}</Badge>
              <Text mr={2}>{item.product.title}</Text>
              <Text>${item.product.price}</Text>
            </Flex>
            <Button onClick={() => removeItem(item.product)}>❌</Button>
          </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Cart
