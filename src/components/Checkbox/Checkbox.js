export default {
  name: 'HelloWorld',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    description: String,
    disabled: {
      type: Boolean,
      default: false
    },
    id: String,
    group: String,
    name: String
  }
  // methods: {
  //   toggl
  // }
}
