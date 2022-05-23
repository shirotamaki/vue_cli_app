const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue Vue!'
    }
  }
}

const ConditionalRendering = {
  data() {
    return {
      seen: false
    }
  }
}

const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript'},
        { text: 'Learn Vue'},
        { text: 'Rocknroll'}
      ]
    }
  }
}

const TodoItem = {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
}

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  },
  components: {
    TodoItem
  }
}


const app = Vue.createApp(TodoList)

app.mount('#todo-list-app')


Vue.createApp(EventHandling).mount('#event-handling')
Vue.createApp(TwoWayBinding).mount('#two-way-binding')
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
Vue.createApp(ListRendering).mount('#list-rendering')
