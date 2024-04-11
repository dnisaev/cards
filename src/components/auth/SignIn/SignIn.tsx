import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/Card'
import { ControlledCheckbox } from '@/components/ui/ControlledCheckbox/ControlledCheckbox'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

import { Button } from '../../ui/Button'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type FormFields = z.infer<typeof loginSchema>

export const SignIn = () => {
  const { control, handleSubmit, register } = useForm<FormFields>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormFields) => {
    console.log(data)
  }

  return (
    <Card className={s.root}>
      <Typography style={{ textAlign: 'center' }} variant={'h1'}>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<DevTool control={control} />*/}
        <Input label={'Email'} {...register('email', { minLength: 8 })} />
        <Input label={'Password'} {...register('password')} type={'password'} />

        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Typography style={{ textAlign: 'right' }} variant={'body2'}>
          Forgot password?
        </Typography>
        <Button fullWidth type={'submit'}>
          Sign in
        </Button>
        <Typography style={{ textAlign: 'center' }} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography style={{ textAlign: 'center' }} variant={'link1'}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
