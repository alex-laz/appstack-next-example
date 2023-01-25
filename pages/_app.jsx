import { GoogleProvider } from '@appstackjs/react'
import { Auth0Provider } from '@auth0/auth0-react'
import { AppstackProviderWithAuth0 } from '../lib/appstack'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Auth0Provider
        authorizationParams={{
          audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        }}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      >
        <AppstackProviderWithAuth0
          projectId={process.env.NEXT_PUBLIC_APPSTACK_PROJECT_ID}
        >
          <GoogleProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
            redirectUri={process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}
          >
            <Component {...pageProps} />
          </GoogleProvider>
        </AppstackProviderWithAuth0>
      </Auth0Provider>
    </>
  )
}
