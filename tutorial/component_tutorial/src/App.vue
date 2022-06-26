<template>
  <HeaderTokyo :username="name"/>
  <BodyTokyo @add="add1"/>
  <BodyTokyo @add="add2" />
  <p>total: {{ totalcount }}</p>
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
      totalcount: 0
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

</style>
