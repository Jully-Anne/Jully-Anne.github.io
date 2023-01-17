import { useAuth } from 'react-oidc-context'
import AppProtected from './pages/AppProtected/Index'
import AppUnprotected from './pages/AppUnprotected/Index'

const App = () => {
  const auth = useAuth()

  return (<AppProtected />)


}

export default App
