import React, { ReactNode } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Slot } from '@radix-ui/react-slot'
import { Check } from 'phosphor-react'

export interface CheckboxRootProps {
  name?: string
  children: ReactNode
}

const CheckboxRoot: React.FC<CheckboxRootProps> = ({ children }) => {
  return <div className="flex items-center gap-2">{children}</div>
}

CheckboxRoot.displayName = 'Checkbox.Root'

export interface CheckboxIndicatorProps {
  name?: string
}

const CheckboxIndicator: React.FC<CheckboxIndicatorProps> = ({ name }) => {
  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p-[2px] bg-gray-800 rounded"
      id={name}
      name={name}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

CheckboxIndicator.displayName = 'Checkbox.CheckboxIndicator'

export interface CheckboxLabelProps {
  children: ReactNode
  asChild?: boolean
  name?: string
}

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
  children,
  asChild = false,
  name
}) => {
  const Comp = asChild ? Slot : 'label'

  return (
    <Comp className="text-gray-200 text-xs" htmlFor={name}>
      {children}
    </Comp>
  )
}

CheckboxLabel.displayName = 'Checkbox.CheckboxLabel'

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel
}
