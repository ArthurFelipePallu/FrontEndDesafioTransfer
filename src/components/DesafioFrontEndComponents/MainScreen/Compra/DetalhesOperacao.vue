<script >

import CompraInfo from "@/components/DesafioFrontEndComponents/MainScreen/Compra/CompraInfo.vue";
import { OperationDetails }  from "@/stores/counter"

export default {
  components: {
    CompraInfo,
    OperationDetails,
  },
  data(){
    return {
      operationDetails: null,
      custoPercentualtxt :'',
      cotacaoComercialtxt :'',
      impostotxt :'',
      tarifatxt :'',
      dolarVettxt :'',
      realPrefix: "R$",
      comercialValues:[4.1234,5.2345,6.3456]
    }
  },
  beforeMount() {
    this.operationDetails = OperationDetails();
    this.SetValues();
  },
  methods:{
    SetValues(){
      this.RandomizeCotacao();
      this.operationDetails.calculateDolarVet();
      this.custoPercentualtxt = this.operationDetails.getCustoPercentual + "%";
      this.cotacaoComercialtxt = this.realPrefix + this.operationDetails.getCotacaoComercial;
      this.impostotxt = this.realPrefix + this.operationDetails.getImpostoIOF;
      this.tarifatxt = this.realPrefix + this.operationDetails.getTarifa;
      this.dolarVettxt = this.realPrefix + this.operationDetails.getDolarVet;
    },
    RandomizeCotacao(){
      const idx = Math.floor(Math.random() * this.comercialValues.length);
      this.operationDetails.setCotacaoComercial( this.comercialValues[idx]);
    }
  },


}
</script>


<template>
  <div class="detalhesContainer">
    <p>Detalhes da Operação</p>
    <CompraInfo :valor="custoPercentualtxt" nome="Custo (percentual)" />
    <CompraInfo :valor="cotacaoComercialtxt" nome="Cotação Comercial" />
    <CompraInfo :valor="impostotxt" nome="Imposto ( IOF )" />
    <CompraInfo :valor="tarifatxt" nome="Tarifa" />
    <CompraInfo :valor="dolarVettxt" nome="Dolar VET" />
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
