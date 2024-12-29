import Layout from './app/Layout'
import { EmailProvider } from '@/features/email/context'
import { UserProvider } from '@/features/user/context'
import { EmailThread } from '@/features/email/components'

function App() {
  return (
    <UserProvider>
      <EmailProvider>
        <Layout>
          <EmailThread />
        </Layout>
      </EmailProvider>
    </UserProvider>
  )
}

export default App
