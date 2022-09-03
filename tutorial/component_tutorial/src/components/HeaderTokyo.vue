<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
<!--    <slot name="message"></slot>-->
    <p>Welcome!! {{ username }}</p>
    <label for="condition">How are you?</label>
    <input id="condition" type="text" :value="value" @input="$emit('input',$event.target.value)">
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
    username: String,
    value: String
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