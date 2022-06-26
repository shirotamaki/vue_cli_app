<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <p>{{ username }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "ヘッダーーーー",
      text: "Hello Vue.js!"
    }
  },
  props: {
    username: String
  }
}
</script>

<style scoped>
div{
  border: 1px solid blue
}
h1{
  color: blue
}
p{
  color:blue
}
</style>