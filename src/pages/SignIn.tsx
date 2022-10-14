import React, { FormEvent, useState } from 'react'
import { Envelope, Lock } from 'phosphor-react'
import { api } from '../services/api'

import { Button } from '../components/Button'
import { Checkbox } from '../components/Checkbox'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'

export const SignIn: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string | null>(null)
  const [passwordInput, setPasswordInput] = useState<string | null>(null)
  const [rememberInput, setRememberInput] = useState(false)
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  const handleSignIn = async (event: FormEvent): Promise<void> => {
    event.preventDefault()

    await api.post('/sessions', {
      email: emailInput,
      password: passwordInput,
      remember: rememberInput
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmailInput(event.currentTarget.value)
              }
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordInput(event.currentTarget.value)
              }
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox
            id="remember"
            onCheckedChange={checked => {
              if (checked === true) {
                setRememberInput(true)
              } else {
                setRememberInput(false)
              }
            }}
          />

          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a
            href=""
            className="text-gray-400 underline hover:text-gray-200 transition-colors"
          >
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a
            href=""
            className="text-gray-400 underline hover:text-gray-200 transition-colors"
          >
            Não possui conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  )
}
