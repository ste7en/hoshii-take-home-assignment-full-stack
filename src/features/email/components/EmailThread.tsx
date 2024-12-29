import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useEmail } from "@/features/email/context"
import { EmailMessage } from "./EmailMessage"
import { EmailReplyBox } from "./EmailReplyBox"
import { EmptyState } from "./EmptyState"

export function EmailThread() {
  const { state } = useEmail()
  const selectedThread = state.threads.find(
    (thread) => thread.email === state.selectedThreadId
  )

  if (!selectedThread) {
    return <EmptyState />
  }

  return (
    <div className="space-y-6">
      <Card className="flex flex-col">
        <CardHeader className="border-b px-4 py-3 flex-shrink-0">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{selectedThread.subject}</h2>
              <div className="flex items-center gap-2">
                {/* Add assignee dropdown here */}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>From: {selectedThread.name}</span>
              <span>·</span>
              <span>{selectedThread.date}</span>
            </div>
          </div>
        </CardHeader>
        <ScrollArea className="flex-1">
          <CardContent className="p-4">
            <div className="space-y-6">
              {selectedThread.messages?.map((message) => (
                <EmailMessage key={message.id} message={message} />
              ))}
            </div>
          </CardContent>
        </ScrollArea>
      </Card>

      <Card>
        <CardContent className="p-4">
          <EmailReplyBox threadId={selectedThread.email} />
        </CardContent>
      </Card>
    </div>
  )
} 