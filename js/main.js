(function () {
  'use strict'

  var likeComponent = Vue.extend({
    props: {
      message: {
        type: String,
        default: 'Like',
      },
    },
    data: function () {
      return {
        count: 0,
      }
    },
    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function () {
        this.count++
        this.$emit('increment')
      },
    },
  })

  var app_comp = new Vue({
    el: '#app_comp',
    components: {
      'like-component': likeComponent,
    },
    data: {
      total: 0,
    },
    methods: {
      incrementTotal: function () {
        this.total++
      },
    },
  })

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [],
    },
    watch: {
      todos: {
        handler: function () {
          localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        deep: true,
      },
    },
    mounted: function () {
      this.todos = JSON.parse(localStorage.getItem('todos')) || []
    },
    methods: {
      addItem: function () {
        var item = {
          title: this.newItem,
          isDone: false,
        }
        this.todos.push(item)
        this.newItem = ''
      },
      deleteItem: function (index) {
        if (confirm('are you sure?')) {
          this.todos.splice(index, 1)
        }
      },
      purge: function (index) {
        if (!confirm('delete finished?')) {
          return
        }
        this.todos = this.remaining
      },
    },
    computed: {
      remaining: function () {
        return this.todos.filter(function (todo) {
          return !todo.isDone
        })
      },
    },
  })
})()
