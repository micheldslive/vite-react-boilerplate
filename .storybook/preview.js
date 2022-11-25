export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import '../src/index.css'
import '../src/App.css'

export const decorators = [
  (Story) => (
    <div className='App'>
      <Story />
    </div>
  ),
]
