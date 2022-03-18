import { useContext, useEffect } from 'react'
import { Button, Flex, Image, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from 'context/CartContext'

const Item = (prop) => {
  const { addItem, cart, removeItem } = useContext(CartContext)

  const getCount = count => {
    addItem(prop, count)
  }

  useEffect(() => {
    console.log('cart', cart)
  }, [cart])

  return (
    <Flex
      key={prop.id}
      direction={'column'}
      align={'center'}
      justify={'flex-start'}
      borderRadius={10}
      borderWidth={1}
      borderColor={'yellow.400'}
      mb={10}
    >
      <Image
        src={prop.img}
        alt={prop.title}
        w={200}
        borderRadius={10}
      />
      <Flex
        direction={'column'}
        align={'center'}
        justify={'flex-start'}
      >
        <Text
          fontWeight={900}
          fontSize={'xl'}
        >{prop.title}</Text>
        <Text>💲{prop.price}</Text>
        <Text>STOCK: {prop.stock}</Text>
      </Flex>
      <ItemCount stock={prop.stock} onAdd={getCount}/>
      <Button onClick={() => removeItem(prop)}>Quitar del 🛒</Button>
    </Flex>
  )
}

export default Item
