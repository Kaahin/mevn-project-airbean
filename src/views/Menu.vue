<template>
  <MenuComp />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MenuComp from "@/components/MenuComp.vue";
export default defineComponent({
  name: "Menu",
  components: {
    MenuComp,
  },
});
</script>

