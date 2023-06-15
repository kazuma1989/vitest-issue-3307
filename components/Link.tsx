import React, { useState } from 'react'
import Star from './star.svg?.tsx'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
}

function Link({ page, children }: any) {
  const [status, setStatus] = useState(STATUS.NORMAL)

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED)
  }

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL)
  }

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Star />
      {children}
    </a>
  )
}

export default Link
