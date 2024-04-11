import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './Card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...restProps }, ref) => {
    const classNames = clsx(s.root, className)

    return (
      <div className={classNames} ref={ref} {...restProps}>
        {children}
      </div>
    )
  }
)
