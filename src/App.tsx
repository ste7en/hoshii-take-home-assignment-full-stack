import Layout from './app/Layout'
import { EmailProvider } from '@/features/email/context'
import { UserProvider } from '@/features/user/context'

function App() {
  return (
    <UserProvider>
      <EmailProvider>
        <Layout>
        </Layout>
      </EmailProvider>
    </UserProvider>
  )
}

export default App
