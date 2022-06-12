import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps{
    name: string;
    email: string;
    avatar: string;
    showProfileData?: boolean;
}

export function Profile({name, email, avatar, showProfileData = true}: ProfileProps){
    return(
        <Flex align="center">
                    {
                        showProfileData &&
                        (<Box mr="4" textAlign="right">
                            <Text>
                                {name}
                            </Text>

                            <Text color="gray.300" fontSize="sm">
                                {email}
                            </Text>
                        </Box>)
                    }

                    <Avatar
                      size="md"
                      name={name}
                      src={avatar}
                      bgColor="transparent"
                      />
                </Flex>
    );
}