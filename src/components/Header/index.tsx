import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){

    return(
        <Flex
          as="header"
          w="100%"
          maxWidth={1280}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
          
          >
            <Logo />

            <SearchBox />

            <Flex
                align="center"
                ml="auto"
            >               
                <NotificationsNav />

                <Profile
                  name="Warlike Richard"
                  email="warlikerichard@hotmail.com"
                  avatar="https://github.com/warlikerichard.png" 
                  />               
            </Flex>
        </Flex>
    )
}