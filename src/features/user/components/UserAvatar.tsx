import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials, getColorFromString } from "../utils"
import { User } from "../types"

interface UserAvatarProps {
  user: Pick<User, "name" | "email" | "avatar">
  className?: string
}

export function UserAvatar({ user, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback
        className="text-white"
        style={{ backgroundColor: getColorFromString(user.name) }}
      >
        {getInitials(user.name)}
      </AvatarFallback>
    </Avatar>
  )
} 