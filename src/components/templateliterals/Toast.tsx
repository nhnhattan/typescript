import React from 'react'

type HorizontalPosition = 'left' | 'right' | 'center'
type VerticalPosition = 'top' | 'bottom' | 'center'

type ToastProps = {
    position: 
        Exclude <`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
}

const Toast = ({position}: ToastProps) => {
  return (
    <div>Toast - {position}</div>
  )
}

export default Toast