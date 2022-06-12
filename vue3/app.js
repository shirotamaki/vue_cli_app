const FooApp = ({
  data () {
    return {
      width: 800,
    }
  },
  computed: {
    // 算出プロパティhalfWidthを定義
    halfWidth: function () {
      return this.width / 2
    }
  }
})

Vue.createApp(FooApp).mount('#app')