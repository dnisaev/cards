import { Ref, forwardRef, memo } from 'react'

import { IconProps, IconWrapper } from '@/assets/IconWrapper'

const CloseOutline = (allProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={'100%'}
          ref={ref}
          viewBox={'0 0 24 24'}
          width={'100%'}
          xmlns={'http://www.w3.org/2000/svg'}
          {...props}
        >
          <g clipPath={'url(#prefix__clip0_124_21523)'}>
            <path
              d={
                'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'
              }
              fill={'currentColor'}
            />
          </g>
          <defs>
            <clipPath id={'prefix__clip0_124_21523'}>
              <path d={'M0 0h24v24H0z'} fill={'currentColor'} />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
      size={1.25}
    />
  )
}

const ForwardRef = forwardRef(CloseOutline)
const Memo = memo(ForwardRef)

export default Memo
