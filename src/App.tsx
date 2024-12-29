import Layout from './app/Layout'
import { EmailProvider } from '@/features/email/context'
import { UserProvider } from '@/features/user/context'
import { ThreadProvider } from '@/features/thread/context'

function App() {
  return (
    <UserProvider>
      <EmailProvider>
        <ThreadProvider>
          <Layout>
          </Layout>
        </ThreadProvider>
      </EmailProvider>
    </UserProvider>
  )
}

export default App
