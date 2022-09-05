import React, {useEffect} from 'react'

export default function Info({type, msg, removeInfo}) {
  useEffect(() => {
    setTimeout(() => {
      removeInfo()
    }, 1500)
  }, [])
  

  return (
    <div className="info_container">
      <p className={`info info_${type}`}>{msg}</p>
    </div>
  )
}
