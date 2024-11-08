<script >

import OperacoesInfo from "@/components/DesafioFrontEndComponents/MainScreen/UltimasOperacoes/OperacoesInfo.vue";
import axios from "axios";
export default {
  name: "Operacoes",
  components: {OperacoesInfo},
  data() {
    return {
      operacoes: [],
    }
  },
  methods:{
    getTransactions(){
      axios.get(this.base_url + "/finisheTransactions").then( (response) => {
        console.log( response.data );
        this.operacoes = response.data;
      }).catch(error => {
        console.error(error);
      })
    }
  },
  beforeMount() {
    this.getTransactions();
  }
}

</script>

<template>
  <div class="ultimasOperacoesContainer">
    <p>Ultimas operações realizadas</p>
    <div v-for="oper in operacoes" :key="oper.id">
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
