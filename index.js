import './style.css';
import { createApp, ref } from 'vue';
import Todo from './composants/Todo.js';

createApp({
  components: {
    Todo,
  },
  setup() {
    const groceryList = ref([
      { id: 0, text: 'Vegetablesytooo' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ]);

    return {
      groceryList,
    };
  },
}).mount('#app');
