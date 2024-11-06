<script setup lang="ts">

import ValorDaCompra from "@/components/DesafioFrontEndComponents/MainScreen/Compra/ValorDaCompra.vue";
import DetalhesOperacao from "@/components/DesafioFrontEndComponents/MainScreen/Compra/DetalhesOperacao.vue";
import DetalhesPagamento from "@/components/DesafioFrontEndComponents/MainScreen/Pagamento/DetalhesPagamento.vue";
</script>

<template>
  <div class="compraContainer">
    <ValorDaCompra  compra-valor="200,00"/>
    <div class="container isFlex">
      <DetalhesOperacao />
      <DetalhesPagamento />
    </div>
  </div>
</template>

<style scoped>
.compraContainer{
  width: 96%;
  height: 350px;
  margin-top: 30px;
  margin-left: 20px;
}
.container{
  justify-content: space-between;
}
</style>
