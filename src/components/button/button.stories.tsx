import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'Form/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />
}

export const Default = Template.bind({})

Default.args = {
  disabled: false,
}
