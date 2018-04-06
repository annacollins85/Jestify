// import Vue from 'vue'
// import jsdom from 'jsdom'
import { shallow } from '@vue/test-utils'

import Checkbox from '@/components/Checkbox/Checkbox.vue'

// const renderer = require('vue-server-renderer').createRenderer()

describe('Checkbox.vue', () => {
  it('renders the name and description when passed', () => {
    const name = 'name of Checkbox'
    const description = 'description of Checkbox'
    const wrapper = shallow(Checkbox, {
      propsData: { name, description }
    })
    expect(wrapper.find('h4').text()).toBe('name of Checkbox')
    expect(wrapper.find('p').text()).toBe('description of Checkbox')
  })
  // it('renders the name and description when passed2', () => {
  //   const name = 'name of Checkbox'
  //   const description = 'description of Checkbox'
  //   const ClonedBox = Vue.extend(Checkbox)
  //   const newBox = new ClonedBox({
  //     propsData: { name, description }
  //   })
  //   renderer.renderToString(newBox, (err, str) => {
  //     if (err) console.log('error')
  //     const dom = new jsdom.JSDOM(str)
  //     const name = dom.window.document.querySelector('h4')
  //     const description = dom.window.document.querySelector('p')
  //     expect(name.textContent).toBe('name of Checkbox')
  //     expect(description.textContent).toBe('description of Checkbox')
  //   })
  // })
  // it('has a default setting of unchecked and not disabled', () => {
  //   const wrapper = shallow(Checkbox)
  //   expect(wrapper.find('input').attributes().checked).toBe(false)
  //   expect(wrapper.find('input').attributes().disabled).toBe(false)
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
