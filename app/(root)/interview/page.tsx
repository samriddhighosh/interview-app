import Agent from '@/components/Agent'
import React from 'react'

const interviewPage = () => {
  return (
    <>
        <h3>Interview generation</h3>

        <Agent username="You" userId="user1" type="generate" />
    </>
  )
}

export default interviewPage