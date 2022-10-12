import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

const Template: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
    disabled: false
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: {
        type: 'inline-radio'
      }
    }
  }
}

export default Template

export const Default: StoryObj<ButtonProps> = {}
