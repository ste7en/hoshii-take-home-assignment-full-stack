import * as React from "react"
import { Mail } from "@/features/email/types"
import { useEmail } from "@/features/email/context"

interface ThreadContextType {
  currentThread: Mail | undefined
  assignThread: (assigneeIds: string[]) => void
  addReply: (message: string) => void
}

const ThreadContext = React.createContext<ThreadContextType | undefined>(undefined)

export function ThreadProvider({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = useEmail()
  const currentThread = state.threads.find(
    (thread) => thread.email === state.selectedThreadId
  )

  const value = React.useMemo(() => ({
    currentThread,
    assignThread: (assigneeIds: string[]) => {
      if (!currentThread) return
      dispatch({
        type: "ASSIGN_THREAD",
        threadId: currentThread.email,
        assigneeIds
      })
    },
    addReply: (message: string) => {
      if (!currentThread) return
      dispatch({
        type: "ADD_REPLY",
        threadId: currentThread.email,
        message
      })
    }
  }), [currentThread, dispatch])

  return (
    <ThreadContext.Provider value={value}>
      {children}
    </ThreadContext.Provider>
  )
}

export function useThread() {
  const context = React.useContext(ThreadContext)
  if (context === undefined) {
    throw new Error("useThread must be used within a ThreadProvider")
  }
  return context
} 