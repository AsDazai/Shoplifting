import React from 'react'
import LiveFeed from './LiveFeed'
import Alerts from './Alerts'
import Dashboard from './Dashboard'

function MainPage() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <LiveFeed />
      <Alerts />
      <Dashboard />
    </div>
  )
}

export default MainPage
