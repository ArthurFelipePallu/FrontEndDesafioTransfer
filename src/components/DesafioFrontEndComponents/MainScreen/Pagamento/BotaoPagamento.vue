<script >
import { OperationDetails }  from "@/stores/counter"
import { QRCodeInteractions }  from "@/stores/counter"

import axios from "axios";

export default {
  components: {
    OperationDetails,
    QRCodeInteractions
  },
  data(){
    return {
      operationDetails: null,
      qRCodeInteractions: null,
    }
  },
  beforeMount() {
    this.operationDetails = OperationDetails();
    this.qRCodeInteractions = QRCodeInteractions();
  },
  methods: {

    GerarQRCode(){
      this.qRCodeInteractions.startQRCodeTimer();
      setTimeout(this.qRCodeInteractions.stopQRCodeTimer, this.qRCodeInteractions.getTimeInMiliSeconds);
    },
    CancelarPagamento(){
      this.qRCodeInteractions.stopQRCodeTimer();
    },



  },
}
</script>

<template>
  <div class="botao Pagamento isContainerFlexAlignedCenter" v-if="!this.qRCodeInteractions.getStartedQRCode" @click="GerarQRCode">
    <p class="pagamentoText">Gerar QR  code de pagamento</p>
  </div>
  <div class="botao Cancelamento isContainerFlexAlignedCenter" v-else  @click="CancelarPagamento">
    <p class="pagamentoText">Cancelar Pagamento</p>
  </div>
</template>

<style scoped>
.Pagamento{
  background-color: var(--color-background-blue);
}
.pagamentoText{
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-white);
}
.Cancelamento {
  background-color: red;
}
.botao{
  width: 100%;
  height: 61px;
  margin-top: 75px;
  border-radius: 10px;
  border-style: none;
  justify-content: center;
}

</style>
