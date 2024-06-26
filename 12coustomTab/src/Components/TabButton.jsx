import React from 'react'
import Tabs from './tabs'

function TabButton(pet) {
  return (
    <div>
      <Tabs petData={pet}/>
    </div>
  )
}

export default TabButton
