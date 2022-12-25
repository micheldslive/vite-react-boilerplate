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
      className='p-4 flex flex-col items-center gap-10 cursor-pointer bg-slate-50 rounded-md'
    >
      count is {count}
    </button>
  )
}
