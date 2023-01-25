import { useAuth0 } from '@auth0/auth0-react'

export function SignedIn({ children }) {
  const { isAuthenticated } = useAuth0()
  if (!isAuthenticated) {
    return <></>
  }
  return children
}
