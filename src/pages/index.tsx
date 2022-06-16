import { Flex, Button, Stack, FormControl } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('e-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm(
   { resolver: yupResolver(signInFormSchema)}
  );
  const {errors} = formState;

  const handleSignin : SubmitHandler<SignInFormData> = async (data)=>{
    await new Promise(resolve => setTimeout(resolve, 2*1000))
    console.log(data)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >

      <Flex as="form"
        w="100%" maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing={4}>
          <FormControl>
            <Input 
              name="email" 
              label="E-mail" 
              type="email" 
              error={errors.email}
              {...register('email')}/>
          </FormControl>

          <FormControl>
              <Input 
                name="password" 
                label="Senha" 
                type="password" 
                error={errors.password}
                {...register('password')}/>
          </FormControl>
        </Stack>

        <Button
          type='submit'
          mt={6}
          colorScheme='pink'
          size='lg'
          isLoading={formState.isSubmitting}
          >

          Entrar
        </Button>
      </Flex>

    </Flex>
  )
}

//Nota: A função handleSubmit recebe uma função, que nesse caso é a handleSignin, e executa 
//handleSignin passando para ela os parâmetros retornados pelo formulário.