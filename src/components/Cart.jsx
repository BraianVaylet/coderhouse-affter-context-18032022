import { Button, Flex, Text, Avatar, Badge } from '@chakra-ui/react'
import { CartContext } from 'context/CartContext'
import React, { useContext } from 'react'

const CartItem = ({ product, handleRemove, count }) => {
  return (
    <Flex
      align={'center'}
      justifyContent={'space-between'}
      p={2}
      mb={5}
      w={'100%'}
    >
      <Flex
        align={'center'}
        justifyContent={'flex-start'}
      >
        <Avatar name={product.title} src={product.img} />
        <Badge colorScheme={'yellow'} mx={5}>x{count}</Badge>
        <Text mr={5}>{product.title}</Text>
        <Text mr={5}>💲{product.price}</Text>
      </Flex>

      <Button onClick={() => handleRemove(product)}>🗑</Button>
    </Flex>
  )
}

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
        <Button onClick={clear}>Limpiar Carrito</Button>
      </Flex>
      <Flex
        direction={'column'}
        align={'flex-start'}
        justify={'flex-start'}
        w={'100%'}
        my={10}
      >
        {cart && cart.map(product => (
          <CartItem key={product.id} handleRemove={removeItem} {...product} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Cart
