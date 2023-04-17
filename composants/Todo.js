import Bb from './Bb.js';

export default {
  components: {
    Bb,
  },
  props: {
    todo: Object,
  },
  template: `
  <li>{{ todo.text }}</li>
  <bb :greeting-message="todo"></bb>
  `,
};
