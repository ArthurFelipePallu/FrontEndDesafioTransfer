<script setup lang="ts">

import OperacoesInfo from "@/components/DesafioFrontEndComponents/MainScreen/UltimasOperacoes/OperacoesInfo.vue";
</script>

<template>
  <div class="ultimasOperacoesContainer">
    <p>Ultimas operações realizadas</p>
    <OperacoesInfo valor="1.000,00" aprovada="Aprovada"/>
    <OperacoesInfo valor="5.000,00" aprovada="Pendente"/>
    <OperacoesInfo valor="7.500,00" aprovada="Pendente"/>

    <p class="aligned-text" >Ver Todas</p>
  </div>
</template>

<style scoped>
.ultimasOperacoesContainer{
  margin: 40px 20px;
  width: 100%;
  height: 332px;

}
.aligned-text{
  text-align: center;
  margin-top: 20px;

}
</style>
