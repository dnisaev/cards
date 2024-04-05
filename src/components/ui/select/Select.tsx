import React, { ComponentPropsWithoutRef, ReactNode, RefAttributes } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectRadix from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './Select.module.scss'

type SelectProps = {
  ariaLabel?: string
  checked?: boolean
  disabled?: boolean
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
  const { ariaLabel, disabled, placeholder } = props

  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger aria-label={ariaLabel} className={s.SelectTrigger}>
        <SelectRadix.Value placeholder={placeholder} />
        <SelectRadix.Icon className={disabled ? '' : s.SelectIcon}>
          <ChevronDownIcon />
          {/*<ChevronUpIcon />*/}
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content className={s.SelectContent}>
          <SelectRadix.Viewport className={s.SelectViewport}>
            <SelectRadix.Group>
              <SelectItem value={'Select-box-1'}>Select-box 1</SelectItem>
              <SelectItem value={'Select-box-2'}>Select-box 2</SelectItem>
              <SelectItem value={'Select-box-3'}>Select-box 3</SelectItem>
              <SelectItem value={'Select-box-4'}>Select-box 4</SelectItem>
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
