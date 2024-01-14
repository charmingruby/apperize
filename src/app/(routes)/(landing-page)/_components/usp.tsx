import { usps } from '@/contents/usps'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

export function USP() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {usps.map(({ icon: Icon, description, percentage, title }) => (
        <Card key={title} className="flex flex-col">
          <CardHeader>
            <div className="bg-background-alt-dark border-4 border-background-alt w-fit p-2 rounded-full mb-2">
              <Icon className="text-primary" />
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{description}</CardDescription>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="w-full flex items-center gap-2">
              <div className="w-full h-1.5 bg-border relative rounded-full">
                <div
                  className="absloute h-1.5 bg-primary rounded-full"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
              <small className="text-primary">{percentage}%</small>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
