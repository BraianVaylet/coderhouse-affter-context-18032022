import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { CartContext } from 'context/CartContext'
import { useContext } from 'react'
import ItemCount from './ItemCount'

const Item = (product) => {
  const { addItem, cart, removeItem } = useContext(CartContext)
  const getCount = count => {
    addItem(product, count)
  }

  console.log('cart🛒', cart)

  return (
    <Flex
      key={product.id}
      direction={'column'}
      align={'center'}
      justify={'flex-start'}
      borderRadius={10}
      borderWidth={1}
      borderColor={'yellow.400'}
      mb={10}
    >
      <Image
        src={product.img}
        alt={product.title}
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
        >{product.title}</Text>
        <Text>💲{product.price}</Text>
        <Text>STOCK: {product.stock}</Text>
      </Flex>
      <ItemCount stock={product.stock} onAdd={getCount}/>
      <Button onClick={() => removeItem(product)}>Eliminar del 🛒</Button>
    </Flex>
  )
}

export default Item
