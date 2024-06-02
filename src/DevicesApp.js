import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/AuthContext'

export const DevicesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>

    </AuthProvider>
  )
}
