export function EmptyState() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <h3 className="text-lg font-medium">No email selected</h3>
        <p className="text-sm text-muted-foreground">
          Select an email from the sidebar to view it here
        </p>
      </div>
    </div>
  )
}