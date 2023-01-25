import { useGoogle } from '@appstackjs/react'
import { useAuth0 } from '@auth0/auth0-react'
import { SignedIn } from '../lib/auth0'
import { Connected, useCalendarEvents } from '../lib/google'

export default function HomePage() {
  return (
    <>
      <AuthSection />
      <SignedIn>
        <GoogleSection />
        <Connected>
          <CalendarSection />
        </Connected>
      </SignedIn>
    </>
  )
}

function AuthSection() {
  const { isLoading, isAuthenticated, user, loginWithPopup, logout } =
    useAuth0()
  return (
    <div className='mx-6 my-4'>
      <h2 className='font-bold'>Auth</h2>
      {isLoading && (
        <>
          <span className='text-gray-500'>Loading...</span>
        </>
      )}
      {!isLoading && !isAuthenticated && (
        <>
          <button
            className='text-blue-500 underline'
            onClick={() => loginWithPopup()}
          >
            Sign In
          </button>
        </>
      )}
      {isAuthenticated && (
        <>
          <span className='block'>{user.email}</span>
          <button className='text-blue-500 underline' onClick={() => logout()}>
            Sign Out
          </button>
        </>
      )}
    </div>
  )
}

function GoogleSection() {
  const { isLoading, isConnected, account, connect, disconnect } = useGoogle()
  return (
    <div className='mx-6 my-4'>
      <h2 className='font-bold'>Google</h2>
      {isLoading && (
        <>
          <span className='text-gray-500'>Loading...</span>
        </>
      )}
      {!isLoading && !isConnected && (
        <>
          <button
            className='text-blue-500 underline'
            onClick={() =>
              connect([
                'https://www.googleapis.com/auth/calendar.events.readonly',
              ])
            }
          >
            Connect
          </button>
        </>
      )}
      {isConnected && (
        <>
          <span className='block'>{account.email}</span>
          <button
            className='text-blue-500 underline'
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </>
      )}
    </div>
  )
}

function CalendarSection() {
  const { isLoading, data, mutate } = useCalendarEvents({ maxResults: 2 })
  return (
    <div className='mx-6 my-4'>
      <h2 className='font-bold'>Calendar</h2>
      {isLoading && (
        <>
          <span className='text-gray-500'>Loading...</span>
        </>
      )}
      {data && (
        <>
          <ul className='list-disc mx-4'>
            {data.items.map((item) => (
              <li key={item.id}>{item.summary}</li>
            ))}
          </ul>
          <button
            className='text-blue-500 underline'
            onClick={() => mutate(undefined)}
          >
            Refresh
          </button>
        </>
      )}
    </div>
  )
}
