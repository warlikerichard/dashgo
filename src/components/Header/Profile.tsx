import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps{
    name: string;
    email: string;
    avatar: string;
}

export function Profile(){
    return(
        <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>
                            Warlike Richard
                        </Text>

                        <Text color="gray.300" fontSize="sm">
                            warlikerichard@hotmail.com
                        </Text>
                    </Box>

                    <Avatar
                      size="md"
                      name="Warlike Richard"
                      src="https://github.com/warlikerichard.png" 
                      bgColor="transparent"
                      />
                </Flex>
    );
}