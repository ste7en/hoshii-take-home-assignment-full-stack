import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials, getColorFromString } from "../utils"
import { User } from "../types"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  user: Pick<User, "name" | "email" | "avatar">
  className?: string
}

export function UserAvatar({ user, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("h-8 w-8 rounded-lg", className)}>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback
        className="rounded-lg text-white"
        style={{ backgroundColor: getColorFromString(user.name) }}
      >
        {getInitials(user.name)}
      </AvatarFallback>
    </Avatar>
  )
} 