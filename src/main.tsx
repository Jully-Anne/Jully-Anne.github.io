import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const oidcConfig = {
  authority: 'http://localhost:8080/realms/bleistahl',
  client_id: 'eos-app',
  redirect_uri: 'http://localhost:3000/dashboard',
  post_logout_redirect_uri: 'http://localhost:3000'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
