import React from 'react'

export default function Info({type, msg}) {
  return (
    <p className={`alert alert_${type}`}>{msg}</p>
  )
}
