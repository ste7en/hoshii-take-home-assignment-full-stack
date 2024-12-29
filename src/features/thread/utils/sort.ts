import { Mail } from "@/features/email/types";

export function sortThreadsByDateDesc(a: Mail, b: Mail): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}