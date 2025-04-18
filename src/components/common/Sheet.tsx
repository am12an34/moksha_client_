import { ReactNode, createElement, forwardRef } from 'react'
import { classNames } from '@arpansaha13/utils'
import type { HTMLElementTagNames } from '~/types'

interface SheetProps extends React.HTMLAttributes<HTMLElement> {
  /** @default 'div' */
  as?: HTMLElementTagNames
  children: ReactNode
  className?: string
}

/** background-color should be provided from parent. */
const Sheet = forwardRef(({ as = 'div', children, className, ...rest }: SheetProps, ref) => {
  return createElement(
    as,
    {
      ref,
      className: classNames(
        '',
        className
      ),
      ...rest,
    },
    children
  )
})

export default Sheet
