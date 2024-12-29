export interface Mail {
  name: string
  email: string
  subject: string
  date: string
  teaser: string
}

export interface EmailThread extends Mail {
  messages: EmailMessage[]
  assignees: string[]
}

export interface EmailMessage {
  id: string
  from: string
  to: string[]
  content: string
  timestamp: string
} 