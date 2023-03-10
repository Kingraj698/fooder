import React from 'react'

const Clientview = () => {

    const xyz = window.location.host.split('.')[0]

  return (
    <div>

        {xyz}
    </div>
  )
}

export default Clientview