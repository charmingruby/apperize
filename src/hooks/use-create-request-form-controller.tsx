'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({})

export function useCreateRequestFormController() {
  const { control, handleSubmit } = useForm()

  return { control, handleSubmit }
}
