import { Flex, Text, useColorMode, Button } from '@chakra-ui/react'
import { TestContext } from 'context/TestContext'
import { useContext } from 'react'

const Title = ({ children, ...props }) => (
  <Text
    fontSize={'2xl'}
    fontWeight={300}
    letterSpacing={1}
    {...props}
  >
    {children}
  </Text>
)

const ThemeIcon = ({ ...props }) => {
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

const CartIcon = () => {
  const { showMessage } = useContext(TestContext)
  return (
    <Button
      variant={'ghost'}
      onClick={showMessage}
    >
      <Title>
        🛒
      </Title>
    </Button>
  )
}

const Navbar = () => {
  return (
    <Flex
      w={'100%'}
      p={2}
      mb={10}
      align={'center'}
      justify={'space-between'}
    >
      <Title fontWeight={'bold'}>
        🐤 DUCK STORE
      </Title>
      <Flex
        align={'center'}
        justify={'flex-end'}
      >
        <ThemeIcon mr={5} />
        <CartIcon />
      </Flex>
    </Flex>
  )
}

export default Navbar
