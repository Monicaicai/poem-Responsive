<template>
  <div id="pagewrap">
    <el-button type="warning" @click="$router.push({name:'ES6'})">ES6</el-button>
    <el-button type="warning" @click="$router.push({name:'poem'})">今日诗词</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      poem: "",
      weather: "",
      author: ""
    };
  },
  mounted() {},
  methods: {}
};
</script>