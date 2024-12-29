import { useThread } from "../context"

export function ThreadSubjectTitle() {
  const { currentThread } = useThread()

  if (!currentThread) {
    return <span className="text-muted-foreground">No email selected</span>
  }

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{currentThread.subject}</span>
      <span className="text-muted-foreground">·</span>
      <span className="text-sm text-muted-foreground">{currentThread.name}</span>
    </div>
  )
} 