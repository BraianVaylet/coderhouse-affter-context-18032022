import { Flex, Text, useColorMode, Button } from '@chakra-ui/react'

const Title = ({ children }) => (
  <Text
    fontSize={'2xl'}
    fontWeight={300}
    letterSpacing={1}
  >
    {children}
  </Text>
)

const IconTheme = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      variant={'ghost'}
      onClick={toggleColorMode}
      {...props}
    >
      <Title>
        {
          colorMode === 'dark'
            ? '🌞'
            : '🌛'
        }
      </Title>
    </Button>

  )
}

const Cart = ({ counter = 0 }) => (
  <Title>
    🛒 ({counter})
  </Title>
)

const Navbar = () => {
  return (
    <Flex
      w={'100%'}
      p={2}
      mb={10}
      align={'center'}
      justify={'space-between'}
    >
      <Title>
        🐤 DUCK STORE
      </Title>
      <Flex
        align={'center'}
        justify={'flex-end'}
      >
        <IconTheme mr={5} />
        <Cart />
      </Flex>
    </Flex>
  )
}

export default Navbar
