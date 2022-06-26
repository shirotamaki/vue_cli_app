<template>
  <div>
    <ul>
      <li v-for="(memo, index) in memos" :key="index">
        <span @click="edit(index)">{{ showTitle(memo) }}</span>
      </li>
    </ul>
  </div>
  <div>
    <form @submit.prevent>
      <textarea type="text" v-model="text" ref="editor"></textarea>
      <div>
        <span><button class="button" @click="setItems" type="submit">{{ changeButtonText }}</button></span>
        <span><button class="button" @click="cancel" type="submit">キャンセル</button></span>
        <span><button class="button" @click="remove" type="submit">削除</button></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      editIndex: -1,
      memos: [],
    }
  },
  mounted () {
    this.memos = JSON.parse(localStorage.getItem('memos')) || []
  },
  methods: {
    setItems () {
      if (this.editIndex === -1) {
        this.memos.push(this.text)
      } else {
        this.memos.splice(this.editIndex, 1, this.text)
      }
      this.cancel()
      localStorage.setItem('memos', JSON.stringify(this.memos))
    },
    cancel () {
      this.text = ''
      this.editIndex = -1
    },
    edit (index) {
      this.editIndex = index
      this.text = this.memos[index]
      this.$refs.editor.focus()
    },
    remove (index) {
      if (confirm('Are you sure?')) {
        this.memos.splice(index, 1)
      }
      this.text = ''
      localStorage.setItem('memos', JSON.stringify(this.memos))
    },
    showTitle(memo){
      return memo.split(/\n/)[0]
    }
  },
    computed: {
    //   totalNumber: function () {
    //     return this.todos.length
    //   },
    changeButtonText () {
      return this.editIndex === -1 ? '＋' : '編集を実行'
    },
  },
}
</script>

<style>
</style>
