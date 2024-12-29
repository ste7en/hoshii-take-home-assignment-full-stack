import { Mail } from "../email/types";

export const MOCK_EMAILS: Mail[] = [
  {
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    date: "2024-12-29T11:34:00Z",
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
        timestamp: "2024-12-29T09:34:00Z"
      }
    ],
    assignees: []
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    subject: "Project Deadline Update",
    date: "2024-12-29T11:15:00Z",
    teaser: "Hey everyone, I wanted to let you know that we've extended the deadline for the Q3 deliverables to next Friday.",
    messages: [
      {
        id: "2",
        from: {
          name: "Sarah Johnson", 
          email: "sarah.j@example.com"
        },
        to: [{ name: "Me", email: "me@example.com" }],
        content: "Hey everyone, I wanted to let you know that we've extended the deadline for the Q3 deliverables to next Friday.",
        timestamp: "2024-12-29T11:15:00Z"
      }
    ],
    assignees: []
  },
  {
    name: "Michael Chen",
    email: "mchen@example.com", 
    subject: "Code Review Request",
    date: "2024-12-28T14:00:00Z",
    teaser: "Could you please review my latest PR when you have a chance? I've implemented the new authentication flow we discussed.",
    messages: [
      {
        id: "3",
        from: {
          name: "Michael Chen",
          email: "mchen@example.com"
        },
        to: [{ name: "Me", email: "me@example.com" }],
        content: "Could you please review my latest PR when you have a chance? I've implemented the new authentication flow we discussed.",
        timestamp: "2024-12-28T14:00:00Z"
      }
    ],
    assignees: []
  },
  {
    name: "Emma Davis",
    email: "emma.davis@example.com",
    subject: "UI Design Feedback",
    date: "2024-12-27T10:00:00Z",
    teaser: "I've attached the latest mockups for the dashboard redesign. Let me know your thoughts on the new layout and color scheme.",
    messages: [
      {
        id: "4",
        from: {
          name: "Emma Davis",
          email: "emma.davis@example.com"
        },
        to: [{ name: "Me", email: "me@example.com" }],
        content: "I've attached the latest mockups for the dashboard redesign. Let me know your thoughts on the new layout and color scheme.",
        timestamp: "2024-12-27T10:00:00Z"
      }
    ],
    assignees: []
  }
]