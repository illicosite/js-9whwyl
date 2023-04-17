export default {
  props: {
    greetingMessage: Object
  },
  template: `
  <h1>{{greetingMessage.text}}</h1>
  `
}