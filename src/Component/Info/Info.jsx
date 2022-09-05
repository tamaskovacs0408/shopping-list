import React, {useEffect} from 'react'

export default function Info({type, msg, removeInfo}) {
  useEffect(() => {
    setTimeout(() => {
      removeInfo()
    }, 2500)
  }, [])
  

  return (
    <p className={`info info_${type}`}>{msg}</p>
  )
}
