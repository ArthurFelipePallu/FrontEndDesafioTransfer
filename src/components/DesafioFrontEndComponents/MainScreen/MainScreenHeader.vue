<script setup lang="ts">

import HeaderDolar from "@/components/DesafioFrontEndComponents/MainScreen/Header/HeaderDolar.vue";
import HeaderUserSection from "@/components/DesafioFrontEndComponents/MainScreen/Header/HeaderUserSection.vue";
</script>

<template>
<div class="headerContainer isContainerFlexBetween">
  <HeaderDolar dollar-value="5,3034"/>
  <HeaderUserSection />
</div>
</template>

<style scoped>

.headerContainer{
  width: 1150px;
  height: 80px;
  color: var(--color-text-white);
  background-color: var(--color-background-black);
  border-radius: 15px;
}
</style>
