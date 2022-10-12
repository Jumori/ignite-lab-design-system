import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

const Template: Meta<TextInputRootProps> = {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key={TextInput.Icon.displayName}>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input
        key={TextInput.Input.displayName}
        placeholder="Type your e-mail address"
      />
    ]
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

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />
  }
}
