import * as React from "react"
import { MOCK_USER } from "@/features/mock"

interface User {
  name: string
  email: string
  avatar: string
  role: string
}

interface UserState {
  user: User | null
  isLoading: boolean
}

type UserAction = 
  | { type: "SET_USER"; user: User }
  | { type: "CLEAR_USER" }
  | { type: "SET_LOADING"; isLoading: boolean }

interface UserContextType {
  state: UserState
  dispatch: React.Dispatch<UserAction>
}

const UserContext = React.createContext<UserContextType | undefined>(undefined)

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
        isLoading: false
      }
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
        isLoading: false
      }
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state
  }
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(userReducer, {
    user: MOCK_USER,
    isLoading: false
  })

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
} 