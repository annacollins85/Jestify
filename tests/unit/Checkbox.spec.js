import { shallow } from '@vue/test-utils'
import CheckBox from '@/components/CheckBox/CheckBox.vue'

describe('CheckBox.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'name of Checkbox'
    const wrapper = shallow(CheckBox, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })
})
