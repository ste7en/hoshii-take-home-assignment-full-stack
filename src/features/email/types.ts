export interface Mail {
  name: string
  email: string
  subject: string
  date: string
  teaser: string
  messages: EmailMessage[]
  assignees: string[]
}

export interface EmailMessage {
  id: string
  from: {
    name: string
    email: string
    avatar?: string
  }
  to: Array<{
    name: string
    email: string
  }>
  content: string
  timestamp: string
} 