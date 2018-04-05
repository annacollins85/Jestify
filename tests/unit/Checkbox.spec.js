import Vue from 'vue'
import Checkbox from '@/components/Checkbox/Checkbox.vue'

import { shallow } from '@vue/test-utils'
const jsdom = require('jsdom')

const renderer = require('vue-server-renderer').createRenderer()

describe('Checkbox.vue', () => {
  it('renders the name when passed', () => {
    const name = 'name of Checkbox'
    const wrapper = shallow(Checkbox, {
      propsData: { name }
    })
    renderer.renderToString(wrapper, (err, str) => {
      if (err) console.log('error')
      const dom = new jsdom.JSDOM(str)
      console.log(dom.window.document)
      const name = dom.window.document.querySelector('h4')
      expect(name.textContent).toContain('name of Checkbox')
    })
    // expect(wrapper.text()).toMatch(name)
  })
  it('renders the description when passed', () => {
    const description = 'description of Checkbox'
    const wrapper = shallow(Checkbox, {
      propsData: { description }
    })
    expect(wrapper.text()).toMatch(description)
  })
  // it('should toggle checked status when clicked', () => {
  //   const wrapper = shallow(Checkbox)
  //   wrapper.trigger('click')
  //   expect(wrapper.props().checked).toBe(true)
  //   wrapper.trigger('click')
  //   expect(wrapper.props().checked).toBe(true)
  // })
  // it('matches snapshot', () => {
  //   const name = 'Checkbox name'
  //   const description = 'Checkbox description'
  //   const renderer = createRenderer()
  //   const wrapper = shallow(Checkbox, {
  //     propsData: { name, description }
  //   })
  //   renderer.renderToString(wrapper.vm, (err, str) => {
  //     if (err) throw new Error(err)
  //     expect(str).toMatchSnapshot()
  //   })
  // })
})
