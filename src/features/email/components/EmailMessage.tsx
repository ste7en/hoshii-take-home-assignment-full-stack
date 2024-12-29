import { formatDate } from "@/utils/date"
import { EmailMessage as EmailMessageType } from "../types"
import { UserAvatar } from "@/features/user/components"

interface EmailMessageProps {
  message: EmailMessageType
}

export function EmailMessage({ message }: EmailMessageProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <UserAvatar user={message.from} />
        <div>
          <div className="font-medium">{message.from.name}</div>
          <div className="text-xs text-muted-foreground">{formatDate(message.timestamp)}</div>
        </div>
      </div>
      <div className="pl-10 text-sm">
        <div 
          className="prose prose-sm max-w-none rounded-lg bg-muted/50 p-3"
          dangerouslySetInnerHTML={{ __html: message.content }}
        />
      </div>
    </div>
  )
} 