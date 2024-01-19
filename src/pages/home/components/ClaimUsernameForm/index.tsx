import { Button, TextInput, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormAnnotations } from './styles'
import { useRouter } from 'next/router'

const claimUserNameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário deve conter no mínimo 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUserNameFormData = z.infer<typeof claimUserNameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUserNameFormData>({
    resolver: zodResolver(claimUserNameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUserNameFormData) {
    const { username } = data
    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu usuário"
          crossOrigin=""
          {...register('username')}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Reservar usuário
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotations>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário.'}
        </Text>
      </FormAnnotations>
    </>
  )
}
