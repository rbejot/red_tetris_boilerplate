import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      Error: Url not found go to <Link to="/">Home</Link>
    </div>
  )
}

export default Error