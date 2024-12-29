import { User } from "@/features/user/types"

export interface EmailMessage {
  id: string
  from: User
  to: User[]
  content: string
  timestamp: string
}

export interface Mail {
  name: string
  email: string
  subject: string
  date: string
  teaser: string
  messages: EmailMessage[]
  assignees: string[]
} 