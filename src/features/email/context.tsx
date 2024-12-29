import * as React from "react"
import { Mail } from "./types"

interface EmailState {
  selectedThreadId: string | null
  threads: Mail[]
  assignees: string[]
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
    case "ADD_REPLY":
      return {
        ...state,
        threads: state.threads.map(thread =>
          thread.email === action.threadId
            ? { 
                ...thread,
                teaser: action.message,
                date: new Date().toLocaleTimeString()
              }
            : thread
        )
      }
    default:
      return state
  }
}

export function EmailProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(emailReducer, {
    selectedThreadId: null,
    threads: [
      {
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        date: "09:34 AM",
        teaser: "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
      },
      // ... copy other emails from app-sidebar.tsx
    ],
    assignees: ["John Doe", "Jane Smith", "Bob Johnson"] // Sample assignees
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