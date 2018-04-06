// import Vue from 'vue'
// import jsdom from 'jsdom'
import { shallow } from '@vue/test-utils'
// import { renderToString } from '@vue/server-test-utils'

import Input from '@/components/Input/Input.vue'

// const renderer = require('vue-server-renderer').createRenderer()

describe('Input.vue', () => {
  it('renders the label when passed', () => {
    const label = 'Input label'
    const wrapper = shallow(Input, {
      propsData: { label }
    })
    expect(wrapper.text()).toMatch(label)
    expect(wrapper.find('label').text()).toBe('Input label')
  })
  it('has a max length when passed', () => {
    const wrapper = shallow(Input, {
      propsData: {
        maxlength: 10
      }
    })
    expect(wrapper.find('input').attributes().maxlength).toBe('10')
  })
  // it('has a max lenth when passed2', () => {
  //   const ClonedInput = Vue.extend(Input)
  //   const newInput = new ClonedInput({
  //     propsData: {
  //       maxlength: 10
  //     }
  //   })
  //   renderer.renderToString(newInput, (err, str) => {
  //     if (err) console.log('error')
  //     const dom = new jsdom.JSDOM(str)
  //     const input = dom.window.document.querySelector('input')
  //     const maxlength = input.getAttribute('maxlength')
  //     expect(maxlength).toEqual('10')
  //   })
  // })
  // it('should have the value of the input', () => {
  // })
  // it('renders the label when passed', () => {
  //   const label = 'Input label'
  //   const renderedString = renderToString(Input, {
  //     propsData: { label }
  //   })
  //   expect(renderedString).toContain('Input label')
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
