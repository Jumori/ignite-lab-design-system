import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxRootProps } from './Checkbox'

const Template: Meta<CheckboxRootProps> = {
  title: 'Components/Checkbox',
  component: Checkbox.Root,
  args: {
    children: <Checkbox.Indicator key={Checkbox.Indicator.displayName} />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}

export default Template

export const Default: StoryObj<CheckboxRootProps> = {}

export const WithLabel: StoryObj<CheckboxRootProps> = {
  args: {
    children: [
      <Checkbox.Indicator
        key={Checkbox.Indicator.displayName}
        name="storybook-checkbox"
      />,
      <Checkbox.Label
        key={Checkbox.Label.displayName}
        name="storybook-checkbox"
      >
        Lorem ipsum dolor sit amet, consectetur adip
      </Checkbox.Label>
    ]
  }
}
