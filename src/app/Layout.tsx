import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider 
      style={{ "--sidebar-width": "350px" } as React.CSSProperties}
    >
      <div className="flex h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 flex h-14 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </header>
          <main className="flex-1 overflow-auto">
            <div className="container h-full py-6">
              {children}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}