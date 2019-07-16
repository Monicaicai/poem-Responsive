<template>
  <div id="app">
    <myheader></myheader>
    <transition name="el-fade-in">
      <router-view />
    </transition>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "@/layout/header/index";
import myfooter from "@/layout/footer/index";
export default {
  components: {
    myheader,
    myfooter
  }
  // name: "App"
};
</script>
