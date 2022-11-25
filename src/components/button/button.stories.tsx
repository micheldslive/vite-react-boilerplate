import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Button } from './button'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    setCount: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  const [{ count, disabled }, updateArgs] = useArgs()
  const setCount = () => updateArgs({ count: count + 1 })

  const newArgs = { ...args, setCount, disabled }

  return (
    <div className='card'>
      <Button {...newArgs} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  disabled: false,
  count: 0,
}
