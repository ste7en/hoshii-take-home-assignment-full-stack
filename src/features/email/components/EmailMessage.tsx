import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials, getColorFromString } from "@/features/user/utils"
import { EmailMessage as EmailMessageType } from "../types"

interface EmailMessageProps {
  message: EmailMessageType
}

export function EmailMessage({ message }: EmailMessageProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={message.from.avatar} alt={message.from.name} />
          <AvatarFallback
            className="text-white"
            style={{ backgroundColor: getColorFromString(message.from.name) }}
          >
            {getInitials(message.from.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{message.from.name}</div>
          <div className="text-xs text-muted-foreground">{message.timestamp}</div>
        </div>
      </div>
      <div className="pl-10 text-sm">
        <div className="rounded-lg bg-muted/50 p-3">{message.content}</div>
      </div>
    </div>
  )
} 