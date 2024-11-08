<script setup lang="ts">

import SearchClientContainer
  from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/SearchClientContainer.vue";
import MainScreenHeader from "@/components/DesafioFrontEndComponents/MainScreen/MainScreenHeader.vue";
import MainSideContainer from "@/components/DesafioFrontEndComponents/MainScreen/MainSideContainer.vue";


</script>

<template>
  <div>
    <MainScreenHeader/>
    <h1>Novo Pagamento</h1>
    <div class="mainContent">
      <SearchClientContainer />
      <MainSideContainer />
    </div>
  </div>
</template>

<style scoped>

h1{
  margin-top: 30px;
  font-size: 37px;
  font-weight: 600;
  color: var(--color-text-black);
}
.mainContent{
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
