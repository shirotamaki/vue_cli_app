<template>
  <div id="app">
    <HeaderTitle msg="メモアプリ"/>
    <MemoList />
    <AddMemo />
    <EditDelete />
  </div>
</template>

<script>
import HeaderTitle from "./components/HeaderTitle.vue";
import MemoList from "./components/MemoList.vue";
import AddMemo from "./components/AddMemo.vue";
import EditDelete from "./components/EditDelete.vue";

export default {
  name: "App",
  components: {
    HeaderTitle,
    MemoList,
    AddMemo,
    EditDelete,
  },
}
</script>

<style>
</style>
