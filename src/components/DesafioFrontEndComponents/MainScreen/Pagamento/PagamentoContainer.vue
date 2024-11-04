<script setup lang="ts">
import ValorDoPagamento from "@/components/DesafioFrontEndComponents/MainScreen/Pagamento/ValorDoPagamento.vue";
import BotaoPagamento from "@/components/DesafioFrontEndComponents/MainScreen/Pagamento/BotaoPagamento.vue";
</script>

<template>
  <div class="pagamentoContainer">
    <p>Cliente Pagará</p>
    <ValorDoPagamento pagamentoValor="1200,00" />
    <BotaoPagamento />
  </div>
</template>

<style scoped>
.pagamentoContainer{
}
</style>
