import * as React from "react"
import { cn } from "@/lib/utils"
import { useEmail } from "../context"

interface EmailReplyBoxProps {
  threadId: string
}

export function EmailReplyBox({ threadId }: EmailReplyBoxProps) {
  const [message, setMessage] = React.useState("")
  const { dispatch } = useEmail()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    dispatch({
      type: "ADD_REPLY",
      threadId,
      message: message.trim()
    })
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        className="min-h-[100px] w-full rounded-md border bg-transparent p-3 text-sm"
        placeholder="Write your reply..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className={cn(
            "rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground",
            "hover:bg-primary/90",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
          disabled={!message.trim()}
        >
          Send Reply
        </button>
      </div>
    </form>
  )
} 