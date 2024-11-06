<script setup lang="ts">

import ClienInfo from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/ClienInfo.vue";
</script>

<template>
<div class="clientInfoContainer isContainerFlexAlignedCenter">
  <ClienInfo info-name="Nome do cliente" info="Arthur Pallu" class="ml-20"/>

  <ClienInfo info-name="CPF" info="000.000.000-00" />

  <ClienInfo info-name="Telefone" info="(11) 1 1111-1111" />
</div>
</template>

<style scoped>
.clientInfoContainer{
  width: 98%;
  height: 114px;
  margin-top: 20px;
  background-color: var(--color-background-white);
  border-radius: 10px;
  border-style: none;
}
</style>
