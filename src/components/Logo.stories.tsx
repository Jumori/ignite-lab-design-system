import { Meta, StoryObj } from '@storybook/react'
import { Logo, LogoProps } from './Logo'

const Template: Meta<LogoProps> = {
  title: 'Components/Logo',
  component: Logo,
  args: {},
  argTypes: {}
}

export default Template

export const Default: StoryObj<LogoProps> = {}
