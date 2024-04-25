import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import { ControlledCheckbox } from '@/components/ui/controlled/ControlledCheckbox/ControlledCheckbox'
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
    <Card className={s.card}>
      <Typography as={'h1'} className={s.h1} variant={'h1'}>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<DevTool control={control} />*/}
        <Input label={'Email'} {...register('email', { minLength: 8 })} />
        <Input className={s.input} label={'Password'} {...register('password')} type={'password'} />
        <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <div className={s.forgotLink}>
          <Typography as={'a'} href={'/forgot'} variant={'body2'}>
            Forgot password?
          </Typography>
        </div>
        <Button fullWidth type={'submit'}>
          <Typography as={'span'} variant={'subtitle2'}>
            Sign in
          </Typography>
        </Button>
        <Typography className={s.account} variant={'body2'}>
          Don`t have an account?
        </Typography>
        <Typography as={'a'} className={s.signupLink} href={'/signup'} variant={'body2'}>
          Sign Up
        </Typography>
      </form>
    </Card>
  )
}
