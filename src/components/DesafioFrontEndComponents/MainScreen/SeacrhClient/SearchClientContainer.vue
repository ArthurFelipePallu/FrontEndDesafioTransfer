<script >

import SearchClient from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/SearchClient.vue";
import CompraContainer from "@/components/DesafioFrontEndComponents/MainScreen/Compra/CompraContainer.vue";
import axios from "axios";
export default {
  components: {CompraContainer, SearchClient},


}
</script>

<template>
  <div class="searchClientContainer">

    <SearchClient v-model:value="cpf" />
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
