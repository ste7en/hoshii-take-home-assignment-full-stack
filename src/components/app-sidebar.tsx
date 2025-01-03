"use client"

import * as React from "react"
import { ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react"
import { useEmail } from "@/features/email/context"

import { NavUser } from "@/components/nav-user"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { formatDate } from "@/utils/date"
import { FeatureFlags } from "@/features/flags"

// Keep the navMain data here since it's navigation-specific
const navMain = [
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    isActive: true,
    enabled: true,
  },
  {
    title: "Drafts",
    url: "#",
    icon: File,
    isActive: false,
    enabled: FeatureFlags.features.otherInboxes
  },
  {
    title: "Sent",
    url: "#",
    icon: Send,
    isActive: false,
    enabled: FeatureFlags.features.otherInboxes
  },
  {
    title: "Junk",
    url: "#",
    icon: ArchiveX,
    isActive: false,
    enabled: FeatureFlags.features.otherInboxes
  },
  {
    title: "Trash",
    url: "#",
    icon: Trash2,
    isActive: false,
    enabled: FeatureFlags.features.otherInboxes
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(navMain[0])
  const { state, dispatch } = useEmail()
  const { setOpen } = useSidebar()

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
                <a href="#">
                  <img src="hoshii-icon.png" className="size-8" />
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Hoshii AG</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {navMain.map((item) => (
                  <SidebarMenuItem key={item.title} hidden={!item.enabled}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        setOpen(true)
                      }}
                      isActive={activeItem.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeItem.title}
            </div>
            <div hidden={!FeatureFlags.features.unreads}>
              <Label className="flex items-center gap-2 text-sm">
                <span>Unreads</span>
                <Switch className="shadow-none" />
              </Label>
            </div>
          </div>
          <div hidden={!FeatureFlags.features.search}>
            <SidebarInput placeholder="Type to search..." />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {state.threads.map((mail) => (
                <a
                  href="#"
                  key={mail.email}
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch({ type: "SELECT_THREAD", threadId: mail.email })
                  }}
                  className={cn(
                    "flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    state.selectedThreadId === mail.email && "bg-sidebar-accent text-sidebar-accent-foreground"
                  )}
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>
                    <span className="ml-auto text-xs">{formatDate(mail.date)}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] whitespace-break-spaces text-xs">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
