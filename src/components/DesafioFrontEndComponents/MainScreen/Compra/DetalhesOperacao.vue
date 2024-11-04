<script setup lang="ts">

import CompraInfo from "@/components/DesafioFrontEndComponents/MainScreen/Compra/CompraInfo.vue";
</script>

<template>
  <div class="detalhesContainer">
    <p>Detalhes da Operação</p>
    <CompraInfo valor="0,70%" nome="Custo (percentual)" />
    <CompraInfo valor="RS 5,5754" nome="Cotação Comercial" />
    <CompraInfo valor="R$ 54,00" nome="Imposto ( IOF )" />
    <CompraInfo valor="R$ 0,00" nome="Tarifa" />
    <CompraInfo valor="r$ 5,6540" nome="Dolar VET" />
  </div>
</template>

<style scoped>

.detalhesContainer{
  width: 47.5%;
  height: 226px;
  margin-top: 40px;
  font-size: 14px;
  font-weight: 500;
}
</style>
