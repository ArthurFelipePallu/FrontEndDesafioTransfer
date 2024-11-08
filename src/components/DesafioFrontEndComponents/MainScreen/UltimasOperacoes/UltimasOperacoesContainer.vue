<script >

import OperacoesInfo from "@/components/DesafioFrontEndComponents/MainScreen/UltimasOperacoes/OperacoesInfo.vue";
import axios from "axios";
import { LastUserTransactions }  from "@/stores/counter"

export default {
  name: "Operacoes",
  components: {
    OperacoesInfo,
    LastUserTransactions
  },
  data() {
    return {
      operacoes: [
        {
          "id" : 1,
          "value" : 1050.00,
          "aproved" : true,
          "payment" : "credit"
        },
        {

          "id" : 2,
          "value" : 2640.00,
          "aproved" : false,
          "payment" : "Pix"
        },
        {

          "id" : 3,
          "value" : 15.00,
          "aproved" : true,
          "payment" : "talao Cheque"
        }
      ],
      lastUserTransactions: null,
    }
  },
  methods:{
    getTransactions(){
      axios.get(this.base_url + "/finishedTransactions").then( (response) => {
        console.log( response.data );
        this.operacoes = response.data;
        console.log("[ULTIMASOPERACOES] Operacoes:" + this.operacoes)

        this.lastUserTransactions.setTransactionsList(this.operacoes);

      }).catch(error => {
        console.error(error);
      })
    },
  },
  beforeMount() {
    //this.getTransactions();
    this.lastUserTransactions = LastUserTransactions();
    this.lastUserTransactions.setTransactionsList(this.operacoes);

  }
}

</script>

<template>
  <div class="ultimasOperacoesContainer">
    <p>Ultimas operações realizadas</p>
    <div v-for="oper in lastUserTransactions.getTransactionsList" :key="oper.id">
      <OperacoesInfo :valor="oper.value" :aprovada="oper.aproved" :modo-pagamento="oper.payment" />
      <hr />
    </div>
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
