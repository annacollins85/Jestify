import { shallow } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer'

import Checkbox from '@/components/Checkbox/Checkbox.vue'

describe('Checkbox.vue', () => {
  it('renders the name when passed', () => {
    const name = 'name of Checkbox'
    const wrapper = shallow(Checkbox, {
      propsData: { name }
    })
    expect(wrapper.text()).toMatch(name)
  })
  it('renders the description when passed', () => {
    const description = 'description of Checkbox'
    const wrapper = shallow(Checkbox, {
      propsData: { description }
    })
    expect(wrapper.text()).toMatch(description)
  })
  it('should toggle checked status when clicked', () => {
    const wrapper = shallow(Checkbox)
    wrapper.trigger('click')
    expect(wrapper.props().checked).toBe(true)
    wrapper.trigger('click')
    expect(wrapper.props().checked).toBe(true)
  })
  it('matches snapshot', () => {
    const name = 'Checkbox name'
    const description = 'Checkbox description'
    const renderer = createRenderer()
    const wrapper = shallow(Checkbox, {
      propsData: { name, description }
    })
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
