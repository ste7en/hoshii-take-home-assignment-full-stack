import * as React from "react"
import { Mail } from "./types"
import { MOCK_EMAILS, MOCK_ASSIGNEES } from "@/features/mock"
import { User } from "@/features/user/types"
import { sortThreadsByDateDesc } from "../thread/utils"

interface EmailState {
  selectedThreadId: string | null
  threads: Mail[]
  assignees: User[]
}

type EmailAction = 
  | { type: "SELECT_THREAD"; threadId: string }
  | { type: "ASSIGN_THREAD"; threadId: string; assigneeIds: string[] }
  | { type: "ADD_REPLY"; threadId: string; message: string }

interface EmailContextType {
  state: EmailState
  dispatch: React.Dispatch<EmailAction>
}

const EmailContext = React.createContext<EmailContextType | undefined>(undefined)

function emailReducer(state: EmailState, action: EmailAction): EmailState {
  switch (action.type) {
    case "SELECT_THREAD":
      return {
        ...state,
        selectedThreadId: action.threadId
      }
    case "ASSIGN_THREAD":
      return {
        ...state,
        threads: state.threads.map(thread => 
          thread.email === action.threadId 
            ? { ...thread, assignees: action.assigneeIds }
            : thread
        )
      }
    case "ADD_REPLY": {
      const timestamp = new Date().toISOString()
      return {
        ...state,
        threads: state.threads.map(thread =>
          thread.email === action.threadId
            ? { 
                ...thread,
                teaser: action.message,
                date: timestamp,
                messages: [
                  ...thread.messages,
                  {
                    id: Date.now().toString(),
                    from: {
                      name: "Me",
                      email: "me@example.com",
                    },
                    to: [{
                      name: thread.name,
                      email: thread.email
                    }],
                    content: action.message,
                    timestamp
                  }
                ]
              }
            : thread
        ).sort(sortThreadsByDateDesc)
      }
    }
    default:
      return state
  }
}

export function EmailProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(emailReducer, {
    selectedThreadId: null,
    threads: MOCK_EMAILS,
    assignees: MOCK_ASSIGNEES
  })

  return (
    <EmailContext.Provider value={{ state, dispatch }}>
      {children}
    </EmailContext.Provider>
  )
}

export function useEmail() {
  const context = React.useContext(EmailContext)
  if (context === undefined) {
    throw new Error("useEmail must be used within an EmailProvider")
  }
  return context
} 