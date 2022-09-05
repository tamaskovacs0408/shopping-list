import React from 'react'

export default function Info({type, msg}) {
  return (
    <p className={`info info_${type}`}>{msg}</p>
  )
}
