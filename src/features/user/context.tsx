import * as React from "react"

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
    user: {
      name: "Stefano Formicola",
      email: "stefano@formicola.com",
      avatar: "https://www.gravatar.com/avatar/729926fa345d27f81fdc37c7f12f2319?s=2048",
      role: "Admin"
    },
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