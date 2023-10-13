import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FieldsProgressBar } from './fields-progress-bar'
import { PersonalRequestForm } from './personal-request-form'

export function OptionsTabs() {
  return (
    <div className="mt-8">
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-2 w-fit">
          <TabsTrigger value="personal">Pessoal</TabsTrigger>
          <TabsTrigger value="enterprise">Empresa</TabsTrigger>
        </TabsList>
        <TabsContent value="personal">
          <FieldsProgressBar amountOfFields={10} fieldsFilled={6} />

          <PersonalRequestForm />
        </TabsContent>
        <TabsContent value="enterprise">
          <FieldsProgressBar amountOfFields={10} fieldsFilled={6} />
          empresa
        </TabsContent>
      </Tabs>
    </div>
  )
}
