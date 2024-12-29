import * as React from "react"
import { Plus } from "lucide-react"
import { UserAvatar } from "@/features/user/components"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useEmail } from "@/features/email/context"
import { useThread } from "../context"

export function AssigneeGroup() {
  const { state } = useEmail()
  const { currentThread, assignThread } = useThread()
  const availableAssignees = state.assignees

  if (!currentThread) return null

  const assignees = availableAssignees.filter((user) => 
    currentThread.assignees.includes(user.email)
  )

  return (
    <div className="flex items-center gap-1">
      <div className="flex -space-x-2">
        {assignees.map((user) => (
          <UserAvatar
            key={user.email}
            user={user}
            className="ring-2 ring-background"
          />
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Plus className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {availableAssignees.map((user) => (
            <DropdownMenuCheckboxItem
              key={user.email}
              checked={currentThread.assignees.includes(user.email)}
              onCheckedChange={(checked) => {
                const newAssignees = checked
                  ? [...assignees, user]
                  : assignees.filter(a => a.email !== user.email)
                assignThread(newAssignees.map(a => a.email))
              }}
            >
              <div className="flex items-center gap-2">
                <UserAvatar user={user} className="h-6 w-6" />
                <span>{user.name}</span>
              </div>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 