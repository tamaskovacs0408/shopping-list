import React, {useEffect} from 'react'

export default function Info({type, msg, removeInfo, list}) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeInfo()
    }, 1500)
    return () => clearTimeout(timeOut)
  }, [list])
  

  return (
    <div className="info_container">
      <p className={`info info_${type}`}>{msg}</p>
    </div>
  )
}
