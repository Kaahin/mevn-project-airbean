<template>
  <div id="nav">
    <router-link to="/landing">Landing</router-link>
  </div>
  <div class="hmenu">
    <img
      src="@/assets/navicon.svg"
      alt="hamburgermenu open"
      class="hmenu-logo open"
      @click="toogleMenu"
      v-if="toogle"
    />
    <img
      src="@/assets/close.svg"
      alt="hamburgermenu close"
      class="hmenu-logo close"
      @click="toogleMenu"
      v-else
    />
  </div>
  <div class="view">
    <router-view />
    <Hmenu :style="[toogle ? { width: '0px' } : { width: '375px' }]" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Hmenu from "@/components/Hmenu.vue";

let toogle = ref(false);
const toogleMenu = () => {
  toogle.value = !toogle.value;
};
onMounted(() => {
  toogleMenu();
});
</script>

<style scoped>
.view {
  display: flex;
  flex-direction: row;
}
.hmenu {
  position: absolute;
  margin: 16px 311px 748px 16px;
  z-index: 3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
