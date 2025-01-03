import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { EmailMessage } from "@/features/email/components/EmailMessage"
import { ThreadReplyBox } from "@/features/thread/components/ThreadReplyBox"
import { useThread } from "../context"
import { EmptyState } from "./EmptyState"
import { formatDate } from "@/utils/date"

export function ThreadView() {
  const { currentThread } = useThread()

  if (!currentThread) {
    return <EmptyState />
  }

  return (
    <div className="space-y-6">
      <Card className="flex flex-col">
        <CardHeader className="border-b px-4 py-3 flex-shrink-0">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>From: {currentThread.name}</span>
            <span>·</span>
            <span>{formatDate(currentThread.date)}</span>
          </div>
        </CardHeader>
        <ScrollArea className="flex-1">
          <CardContent className="p-4">
            <div className="space-y-6">
              {currentThread.messages?.map((message) => (
                <EmailMessage key={message.id} message={message} />
              ))}
            </div>
          </CardContent>
        </ScrollArea>
      </Card>

      <Card>
        <CardContent className="p-4">
          <ThreadReplyBox />
        </CardContent>
      </Card>
    </div>
  )
} 