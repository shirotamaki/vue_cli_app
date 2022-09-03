<template>
  <div>
  <Header :username="name" v-model="InputData.condition">
<!--    <template v-slot:message>-->
<!--      <p>Lets enjoy programming!</p>-->
<!--    </template>-->
  </Header>
  <HeaderTokyo :username="name"/>
  <BodyTokyo @add="add1"/>
  <BodyTokyo @add="add2" />
  <p>total: {{ totalcount }}</p>
  <p>condition : {{ InputData.condition }} </p>
    <button @click="componentName = 'HeaderTokyo'">Header</button>
    <button @click="componentName = 'BodyTokyo'">Body</button>
    <component :is="componentName"></component>
  </div>
</template>

<script>
import HeaderTokyo from './components/HeaderTokyo.vue'
import BodyTokyo from './components/BodyTokyo.vue'

export default {
  components: {
    HeaderTokyo,
    BodyTokyo,
  },
  data() {
    return {
      name: 'たまき',
      count1: 0,
      count2: 0,
      totalcount: 0,
      InputData: {
        condition: ""
      },
      componentName: "HeaderTokyo"
    }
  },
  methods: {
    add1(count) {
      this.count1 = count
      this.totalcount = this.count1 + this.count2
    },
    add2(count){
      this.count2 = count
      this.totalcount = this.count1 + this.count2
    }
  }
}
</script>

<style>

p {
  color: green;
}
</style>
