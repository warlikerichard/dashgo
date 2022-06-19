import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../../components/Form/Input";
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
const CreateUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa de no mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais')
  })

export default function CreateUser(){
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    });

    const {errors} = formState;

    const handleCreateUser : SubmitHandler<CreateUserFormData> = async (data)=>{
        await new Promise(resolve => setTimeout(resolve, 2*1000))
        console.log(data)
      }
    

    return(
        <Box>
            <Header/>

            <Flex
              w="100%"
              my="6"
              maxW={1280}
              mx="auto"
              px="6"
              >
                <Sidebar/>

                <Box
                  as="form"
                  flex="1"
                  borderRadius={8}
                  bg="gray.800"
                  p={["6","8"]}
                  onSubmit={handleSubmit(handleCreateUser)}
                  >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing={["6","8"]}>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">

                            <Input
                              name="name"
                              label="Nome completo"
                              {...register('name')}
                              error={errors.name} />

                            <Input
                              name="email"
                              label="E-mail"
                              {...register('email')}
                              error={errors.email} />
                              
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">

                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              {...register('password')}
                              error={errors.password} />

                            <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação da senha"
                              {...register('password_confirmation')}
                              error={errors.password_confirmation} />

                        </SimpleGrid>

                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' isLoading={formState.isSubmitting} colorScheme="pink">
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}