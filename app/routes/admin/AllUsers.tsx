import { Header } from 'components';
import React from 'react'
const user= { name :"Hamza"};

function AllUsers() {
  return (
    <main className="dashboard wrapper">
    <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Track activity, trends and popular destinations in real time"
    />
  </main>
  )
}

export default AllUsers