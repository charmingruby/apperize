import { Text } from '@/components/ui/text'

export function TimelineEvent() {
  return (
    <div className="flex flex-row gap-4">
      {/* Pin */}
      <div>
        <div className="border-2 border-muted-foreground h-4 w-4 rounded-full" />
        <div className="w-px ml-2 h-[calc(100%-16px)] bg-border" />
      </div>

      {/* Event */}
      <div className="pb-6">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A eaque ad
          provident possimus esse nesciunt. Cumque fuga nulla similique odio
          amet repudiandae optio maxime odit modi voluptas! Sed, praesentium
          voluptatibus?
        </Text>
      </div>
    </div>
  )
}
