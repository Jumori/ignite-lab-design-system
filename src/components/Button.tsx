import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  asChild = false,
  disabled = false,
  ...restProps
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
        {
          'bg-gray-400 hover:bg-gray-400 cursor-default': disabled
        }
      )}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </Comp>
  )
}
