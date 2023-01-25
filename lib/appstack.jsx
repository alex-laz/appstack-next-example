import { AppstackProvider } from '@appstackjs/react'
import { useAuth0 } from '@auth0/auth0-react'

export function AppstackProviderWithAuth0({ children, projectId }) {
  const { getAccessTokenSilently } = useAuth0()
  return (
    <AppstackProvider
      getAuthToken={getAccessTokenSilently}
      projectId={projectId}
    >
      {children}
    </AppstackProvider>
  )
}
