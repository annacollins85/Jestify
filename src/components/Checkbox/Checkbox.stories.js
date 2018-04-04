import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/vue'
import { withNotes } from '@storybook/addon-notes'

import Checkbox from './Checkbox.vue'

const knobs = (options = {}) => {
  return {
    checked: boolean('checked', options.checked || false),
    description: text('description', options.description || 'lorem ipsum dolor sit amet'),
    disabled: boolean('disabled', options.disabled || false),
    id: text('id', options.id || 'checkbox'),
    group: text('group', options.group || 'group'),
    name: text('name', options.name || 'name')
  }
}

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('with radio', withNotes('This a note for the Checkbox component')(() => {
    return ({
      components: { Checkbox },
      template: '<Checkbox v-bind="props" />',
      data () {
        return {
          props: knobs()
        }
      }
    })
  }))
