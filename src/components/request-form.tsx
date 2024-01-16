'use client'

import { Card, CardContent } from './ui/card'
import { Input, InputRoot } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { productTypes } from '@/contents/product-types'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { toast } from 'sonner'
import { sendEmail } from '@/utils/send-email'

const formSchema = z.object({
  name: z
    .string()
    .min(4, 'Nome deve ter no mínimo 4 caracteres.')
    .max(40, 'Nome deve ter no máximo 40 caracteres.'),
  phoneNumber: z.string().length(11, 'Número de telefone inválido.'),
  email: z
    .string()
    .email('Email inválido.')
    .min(8, 'Email deve ter no mínimo 8 caracteres.')
    .max(64, 'Email deve ter no máximo 64 caracteres.'),
  productType: z.string().min(1, 'Escolha um tipo de produto.'),
  plan: z
    .string()
    .min(8, 'Mensagem deve ter no mínimo 16 caracteres.')
    .max(255, 'Mensagem deve ter no máximo 255 caracteres.'),
})

export type FormData = z.infer<typeof formSchema>

export function RequestForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phoneNumber: '',
      name: '',
      plan: '',
      productType: '',
    },
  })

  const handleRequestCreation = (data: FormData) => {
    try {
      toast.success('Email enviado com sucesso.')
      sendEmail(data)
    } catch (err) {
      toast.success('Error ao enviar email.')
    }
    // console.log(data)
  }

  return (
    <Card className="bg-background-alt border-t-4 border-t-primary">
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(handleRequestCreation)}
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <InputRoot>
                    <FormLabel>Qual seu nome?</FormLabel>
                    <FormControl>
                      <Input
                        hasError={!!form.formState.errors?.name?.message}
                        placeholder="Nome"
                        {...field}
                      />
                    </FormControl>
                  </InputRoot>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <InputRoot>
                      <FormLabel>Qual seu telefone?</FormLabel>
                      <FormControl>
                        <Input
                          hasError={
                            !!form.formState.errors?.phoneNumber?.message
                          }
                          placeholder="Telefone"
                          maxLength={11}
                          type="tel"
                          {...field}
                        />
                      </FormControl>
                    </InputRoot>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <InputRoot>
                      <FormLabel>Qual seu email?</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          hasError={!!form.formState.errors?.email?.message}
                          placeholder="Email"
                        />
                      </FormControl>
                    </InputRoot>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Needing */}
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <InputRoot>
                    <FormLabel>Qual produto precisa?</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolher" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        {productTypes.map(({ title, value }) => (
                          <SelectItem key={value} value={value}>
                            {title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </InputRoot>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="plan"
              render={({ field }) => (
                <FormItem>
                  <InputRoot>
                    <FormLabel>Qual o seu plano para o projeto?</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        hasError={!!form.formState.errors?.plan?.message}
                        placeholder="Conte como podemos te ajudar"
                      />
                    </FormControl>
                  </InputRoot>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full lg:justify-end">
              <Button
                size="lg"
                className="w-full lg:w-fit text-base"
                type="submit"
              >
                <span>Enviar pedido</span> <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
