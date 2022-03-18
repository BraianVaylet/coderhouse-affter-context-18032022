import { Flex } from '@chakra-ui/react'
import { products } from 'mocks'
import Item from './Item'

const ItemList = () => {
  return (
    <Flex
      py={10}
      w={'100%'}
      align={'center'}
      justify={'space-between'}
      wrap={'wrap'}
    >
      {products.map(item => (
        <Item key={item.id} {...item}/>
      ))}
    </Flex>
  )
}

export default ItemList
