'use client'

import { useForm } from 'react-hook-form'

export function UseCreateRequestFormController() {
  const { control, handleSubmit } = useForm()

  return { control, handleSubmit }
}
