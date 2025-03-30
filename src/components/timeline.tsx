import { ClockIcon } from 'lucide-react'

interface TimelineItemProps {
  icon: React.ElementType
  title: string
  time: string
  description?: string
}
const TimelineItem = ({
  icon: Icon,
  title,
  time,
  description
}: TimelineItemProps) => {
  return (
    <li className="ms-6 mb-10 space-y-2">
      <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
        <Icon className="text-primary size-3" />
      </span>
      <h3 className="flex items-center font-semibold">{title}</h3>
      <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
        <ClockIcon className="size-3" /> {time}
      </time>
      <p className="text-muted-foreground">{description}</p>
    </li>
  )
}

interface TimelineProps {
  items: TimelineItemProps[]
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <ol className="relative border-s">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          icon={item.icon}
          title={item.title}
          time={item.time}
          description={item.description}
        />
      ))}
    </ol>
  )
}

export default Timeline
