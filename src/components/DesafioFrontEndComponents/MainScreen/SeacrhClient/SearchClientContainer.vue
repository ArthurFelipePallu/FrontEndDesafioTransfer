<script setup lang="ts">

import SearchClient from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/SearchClient.vue";
import CompraContainer from "@/components/DesafioFrontEndComponents/MainScreen/Compra/CompraContainer.vue";
</script>

<template>
  <div class="searchClientContainer">
    <SearchClient />
    <CompraContainer />
  </div>
</template>

<style scoped>
.searchClientContainer{
  width: 750px;
  height: 650px;
  background-color: var(--color-background-grey);
}
</style>
