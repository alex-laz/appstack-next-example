import { useGoogle } from '@appstackjs/react'
import { useEffect } from 'react'

export default function GoogleCallbackPage() {
  const { callback } = useGoogle()
  useEffect(() => {
    callback()
  }, [])
  return (
    <div className='flex h-screen items-center justify-center'>
      <span className='text-gray-500'>Loading...</span>
    </div>
  )
}
