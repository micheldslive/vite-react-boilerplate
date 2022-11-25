import { Button } from './button'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

const props = {
  count: 0,
  setCount: () => 0,
}

describe('<Button />', () => {
  test('should by render a button', () => {
    render(<Button {...props} />)
    const closeButton = screen.getByLabelText(/button/i)
    expect(closeButton).toBeInTheDocument()
  })
})
