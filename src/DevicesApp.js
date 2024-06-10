import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth/AuthContext'
import { SocketProvider } from './context/SocketContext'

export const DevicesApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter/>
      </SocketProvider>

    </AuthProvider>
  )
}
