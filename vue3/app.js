const FooApp = ({
  data () {
    return {
      width: 0,
      list: ['りんご', 'ばなな', 'いちご'],
    }
  },
  computed: {
    // 算出プロパティhalfWidthを定義
    halfWidth: function () {
      return this.width / 2
    },
  },
  computed: {
    date: function () {
      console.log('computed')
      return Math.random()
    },
  },
  methods: {
    getDate: function () {
      console.log('methods')
      return Math.random()
    },
  },
})

Vue.createApp(FooApp).mount('#app')