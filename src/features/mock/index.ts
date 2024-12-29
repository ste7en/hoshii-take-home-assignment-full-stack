import { Mail } from "../email/types"

export const MOCK_EMAILS: Mail[] = [
  {
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    date: "09:34 AM",
    teaser: "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    messages: [
      {
        id: "1",
        from: {
          name: "William Smith",
          email: "williamsmith@example.com",
        },
        to: [{ name: "Me", email: "me@example.com" }],
        content: "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
        timestamp: "09:34 AM"
      }
    ],
    assignees: []
  }
]

export const MOCK_ASSIGNEES = ["John Doe", "Jane Smith", "Bob Johnson"]

export const MOCK_USER = {
  name: "Stefano Formicola",
  email: "stefano@formicola.com",
  avatar: "https://www.gravatar.com/avatar/729926fa345d27f81fdc37c7f12f2319?s=2048",
  role: "Admin"
} 