import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

const Template: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    id: 'remember'
  },
  argTypes: {},
  decorators: [
    Story => {
      return (
        <label htmlFor="remember" className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remember me for 30 days</Text>
        </label>
      )
    }
  ]
}

export default Template

export const Default: StoryObj<CheckboxProps> = {}
