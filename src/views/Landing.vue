<template>
  <LandingComp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingComp from "@/components/LandingComp.vue";
export default defineComponent({
  name: "Landing",
  components: {
    LandingComp,
  },
});
</script>
