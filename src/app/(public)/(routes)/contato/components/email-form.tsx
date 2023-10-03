'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  fullName: z.string(),
  senderEmail: z.string().email(),
  phoneNumber: z.string(),
  subject: z.string().min(8),
  message: z.string().min(12),
})

type FormData = z.infer<typeof formSchema>

export function EmailForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      {/* Full Name */}
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome completo</FormLabel>
            <FormControl>
              <Input placeholder="Nome completo" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Email */}
      <FormField
        control={form.control}
        name="senderEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="exemplo@email.com" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      {/* Phone Number */}
      {/* Subject */}
      {/* Message */}
    </Form>
  )
}
