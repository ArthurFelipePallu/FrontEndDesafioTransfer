<script>
import UltimaOperaçoesDolar
  from "@/components/DesafioFrontEndComponents/MainScreen/UltimasOperacoes/UltimaOperaçoesDolar.vue";

export default {
  components: {UltimaOperaçoesDolar},
  props: {
    valor: {
      type: String,
      required: true
    },
  aprovada: {
    type:String,
    required: true
  }
  }

};
</script>
<template>
  <div class="operacoesInfo">
    <UltimaOperaçoesDolar dollar-value="1.000,00" modo-pagamento="Transferência PIX"/>

    <img src="../../../../assets/DesafioFrontendAssets/Recebimento.png" height="15" width="92"/>
    <p class="aprovadaText">{{ aprovada }}</p>
  </div>
</template>

<style scoped>
.operacoesInfo{
  width: 90%;
  height: 42px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-top: var(--color-borded-lightgrey) 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;

}

.aprovadaText{
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-grey);
}
</style>
