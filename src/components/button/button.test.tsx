import { Button } from './button'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('<Button />', () => {
  test('should by render a button', () => {
    render(<Button />)
    const closeButton = screen.getByText(/button/i)
    expect(closeButton).toBeInTheDocument()
  })
})
