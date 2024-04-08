import { useForm } from 'react-hook-form'

import { FormCheckbox } from '@/components/ui/form-checkbox/FormCheckbox'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type FormFields = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormFields) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', margin: '12px' }}
    >
      <DevTool control={control} />
      <input {...register('email', { minLength: 8 })} style={{ margin: '12px 0' }} />
      <input {...register('password')} style={{ margin: '12px 0' }} type={'password'} />

      <FormCheckbox checked control={control} label={'Remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Sign in</Button>
    </form>
  )
}
