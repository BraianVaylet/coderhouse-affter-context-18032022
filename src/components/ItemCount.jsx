import { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({
  stock = 0,
  init = 0,
  onAdd = () => {}
}) => {
  const [count, setCount] = useState(init)

  return (
    <Flex
      direction={'column'}
      align={'center'}
      justify={'center'}
      w={'100%'}
    >
      <Flex
        align={'center'}
        justify={'space-between'}
        w={'100%'}
        mb={2}
      >
        <Button
          disabled={stock === 0 || count <= 0}
          onClick={() => setCount(count - 1)}
        >
          ➖
        </Button>
        <Text>{count}</Text>
        <Button
          disabled={stock === 0 || count >= stock }
          onClick={() => setCount(count + 1)}
        >
          ➕
        </Button>
      </Flex>
      <Button
        w={'100%'}
        colorScheme={'yellow'}
        disabled={stock === 0 || count <= 0 || count > stock}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </Flex>
  )
}

export default ItemCount
