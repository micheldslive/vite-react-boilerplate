import { useState } from 'react'

type ButtonProps = {
  disabled?: boolean
}

export const Button = ({ disabled }: ButtonProps) => {
  return (
    <button name='button' title='Button' disabled={disabled}>
      Button
    </button>
  )
}
