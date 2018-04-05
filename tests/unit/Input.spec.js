import { shallow } from '@vue/test-utils'
// import { createRenderer } from 'vue-server-renderer'

import Input from '@/components/Input/Input.vue'

describe('Input.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'Input label'
    const wrapper = shallow(Input, {
      propsData: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
  // it('has a max length when passed', () => {
  //   const maxLength = 10
  //   const wrapper = shallow(Input, {
  //     propsData: { maxLength }
  //   })
  //   // check tohtml has attribute maxLength
  //   console.log((wrapper.find('form-control').attributes()))
  //   expect(wrapper.props().maxLength).toBe(10)
  // })
  // it('matches snapshot', () => {
  //   const label = 'Input label'
  //   const renderer = createRenderer()
  //   const wrapper = shallow(Input, {
  //     propsData: { label }
  //   })
  //   renderer.renderToString(wrapper.vm, (err, str) => {
  //     if (err) throw new Error(err)
  //     expect(str).toMatchSnapshot()
  //   })
  // })
})
