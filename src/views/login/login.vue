<template>
  <div>login</div>
  <!-- <el-button>hhaha</el-button> -->
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <button @click="tt"></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      tt() {
        console.log()
      }
    }
  }
})
</script>

<style scoped></style>
