<script setup lang="ts">

import QRCodeContainer from "@/components/DesafioFrontEndComponents/MainScreen/QRcode/QRCodeContainer.vue";
import UltimasOperacoesContainer
  from "@/components/DesafioFrontEndComponents/MainScreen/UltimasOperacoes/UltimasOperacoesContainer.vue";
</script>

<template>
<div class="mainSideContainer">
  <QRCodeContainer />
  <UltimasOperacoesContainer />
</div>
</template>

<style scoped>
.mainSideContainer{
  width: 400px;
  height: 836px;
  margin-left: 10px;
  background-color: var(--color-background-grey);
}
</style>
