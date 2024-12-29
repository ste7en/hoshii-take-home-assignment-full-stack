import Layout from './app/Layout'
import { EmailProvider } from '@/features/email/context'
import { UserProvider } from '@/features/user/context'
import { ThreadProvider, ThreadView } from '@/features/thread'

function App() {
  return (
    <UserProvider>
      <EmailProvider>
        <ThreadProvider>
          <Layout>
            <ThreadView />
          </Layout>
        </ThreadProvider>
      </EmailProvider>
    </UserProvider>
  )
}

export default App
