import { Flex, Image, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({
  id,
  img,
  title,
  price,
  stock
}) => {
  const getCount = count => {
    console.log('count', count)
  }

  return (
    <Flex
      key={id}
      direction={'column'}
      align={'center'}
      justify={'flex-start'}
      borderRadius={10}
      borderWidth={1}
      borderColor={'yellow.400'}
      mb={10}
    >
      <Image
        src={img}
        alt={title}
        w={200}
        borderRadius={10}
      />
      <Flex
        direction={'column'}
        align={'center'}
        justify={'flex-start'}
      >
        <Text fontWeight={900}>{title}</Text>
        <Text>${price}</Text>
        <Text>STOCK: {stock}</Text>
      </Flex>
      <ItemCount stock={stock} onAdd={getCount}/>
    </Flex>
  )
}

export default Item
