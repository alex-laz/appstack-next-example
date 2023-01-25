import { useGoogle } from '@appstackjs/react'
import { useState } from 'react'
import useSWR from 'swr'

export function Connected({ children }) {
  const { isConnected } = useGoogle()
  if (!isConnected) {
    return <></>
  }
  return children
}

export function useCalendarEvents({ maxResults }) {
  const [now] = useState(new Date().toISOString())
  const url =
    `https://www.googleapis.com/calendar/v3/calendars/primary/events` +
    `?maxResults=${maxResults}&orderBy=startTime&singleEvents=true&timeMin=${now}`
  const { request } = useGoogle()
  /** @type {import('swr').SWRResponse<import('@googleapis/calendar').calendar_v3.Schema$Events>} */
  const swr = useSWR(url, request)
  return swr
}
