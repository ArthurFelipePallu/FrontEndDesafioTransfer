<script>
import UltimaOperaçoesDolar
  from "@/components/DesafioFrontEndComponents/MainScreen/UltimasOperacoes/UltimaOperaçoesDolar.vue";

export default {
  components: {UltimaOperaçoesDolar},
  props: {
    valor: {
      type: Number,
      required: true
    },
    aprovada: {
      type:Boolean,
      required: true
    },
    modoPagamento: {
      type:String,
      required: true
    }
  }

};
</script>
<template>
  <div class="operacoesInfo isContainerFlexAround">
    <UltimaOperaçoesDolar :dollar-value="valor" :modo-pagamento="modoPagamento" />

    <img src="../../../../assets/DesafioFrontendAssets/Recebimento.png" height="15" width="92"/>

    <p v-if="aprovada" class="aprovadaText">Aprovada</p>
    <p v-else class="aprovadaText">Pendente</p>

  </div>
</template>

<style scoped>
.operacoesInfo{
  width: 90%;
  height: 42px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-top: var(--color-borded-lightgrey) 1px solid;
}

.aprovadaText{
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-grey);
}
</style>
