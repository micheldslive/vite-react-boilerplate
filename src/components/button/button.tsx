export type ButtonProps = {
  count: number
  setCount(): void
  disabled?: boolean
}

export const Button = ({ count, setCount, disabled }: ButtonProps) => {
  return (
    <button
      onClick={setCount}
      aria-label='button'
      disabled={disabled}
    >
      count is {count}
    </button>
  )
}
