import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, Check, DollarSign, Scroll } from 'lucide-react'

export default function DashboardHome() {
  return (
    <>
      <section>
        <div className="space-y-4 mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total received */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total arrecadado
                </CardTitle>
                <DollarSign className="text-primary h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0</div>
                {/* <CardDescription>+20.1% from last month</CardDescription> */}
              </CardContent>
            </Card>

            {/* Active services */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Serviços ativos
                </CardTitle>
                <Activity className="text-primary h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>

            {/* Total services */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Serviços concluidos
                </CardTitle>
                <Check className="text-primary h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
              </CardContent>
            </Card>

            {/* Changelogs */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total de changelogs
                </CardTitle>
                <Scroll className="text-primary h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">230 </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>chart</Card>
            <Card>recent</Card>
          </div>
        </div>
      </section>
    </>
  )
}
