<template>
  <AboutComp />
</template>

<script lang="ts">
import AboutComp from "@/components/AboutComp.vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "About",
  components: {
    AboutComp,
  },
});
</script>
