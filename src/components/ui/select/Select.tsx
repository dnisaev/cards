import React, { ComponentPropsWithoutRef, ReactNode, RefAttributes } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './Select.module.scss'

type Item = {
  text: string
  value: string
}

type SelectProps = {
  ariaLabel?: string
  checked?: boolean
  disabled?: boolean
  items: Item[]
  placeholder?: string
  title?: string
} & ComponentPropsWithoutRef<'select'>

type SelectItemProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  value?: string
}

export const Select = (props: SelectProps) => {
  const { ariaLabel, disabled, items, placeholder } = props

  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger aria-label={ariaLabel} className={s.SelectTrigger} disabled={disabled}>
        <SelectRadix.Value placeholder={placeholder} />
        <SelectRadix.Icon className={s.SelectIcon}>
          <ChevronDownIcon />
          {/*<ChevronUpIcon />*/}
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content className={s.SelectContent}>
          <SelectRadix.Viewport className={s.SelectViewport}>
            <SelectRadix.Group>
              {items.map(i => (
                <SelectItem key={i.value} value={i.value}>
                  {i.text}
                </SelectItem>
              ))}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
const SelectItem = React.forwardRef(
  (
    { children, className, ...props }: SelectItemProps & RefAttributes<HTMLDivElement>,
    forwardedRef
  ) => {
    return (
      <SelectRadix.Item
        className={classnames(s.SelectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
