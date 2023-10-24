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
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'

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
    <Card>
      <CardHeader className="bg-primary rounded-t-md py-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-primary-foreground" />
          <CardTitle className="text-primary-foreground text-center">
            Nos envie uma mensagem
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form className="flex flex-col gap-8 w-full">
            <div className="space-y-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Como se chama?</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="senderEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual seu email?</FormLabel>
                      <FormControl>
                        <Input placeholder="exemplo@email.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual seu telefone?</FormLabel>
                      <FormControl>
                        <Input placeholder="Telefone" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual o assunto?</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Escolha um assunto" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="dúvidas">Dúvida</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qual a sua mensagem?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Sua mensagem..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-fit">Enviar mensagem</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
