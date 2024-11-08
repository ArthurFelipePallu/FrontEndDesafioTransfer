<script >
import { ModalState }  from "@/stores/counter"
import { UserList }  from "@/stores/counter"
import { OperationDetails }  from "@/stores/counter"
import { LastUserTransactions }  from "@/stores/counter"

import axios from "axios";

export default {
  components: {
    ModalState,
    UserList,
    OperationDetails,
    LastUserTransactions
  },
  data(){
    return {
      modalState: null,
      userList: null,
      operationDetails: null,
      lastUserTransactions: null,
    }
  },
  beforeMount() {
    this.modalState = ModalState();
    this.userList = UserList();
    this.operationDetails = OperationDetails();
    this.lastUserTransactions = LastUserTransactions();
  },
  methods: {



   showPaymentInModal(){
     console.log("[QRCODE] ENTROU NA FUNÇÃO");
     let message ="";
     let user = this.userList.getUserFound;

     if(user == null){
       message = "Usuário válido não confirmado";
     }
      else {
       message = "Pagamento efetuado por " + user.name + "\n CPF: " + user.cpf + " no valor de \nR$ "+ this.operationDetails.getTotalAPagar+" foi confirmado";
     }
     this.modalState.setMessage(message);
     this.modalState.openModal();
     this.fakePostNewPayment();
   },
    fakePostNewPayment(){
      let newpayment = this.createNewPayment();

      this.lastUserTransactions.addTransactionToList(newpayment);
   },
    realPostNewPayment(){
      let newpayment = this.createNewPayment();
      axios.post(this.base_url+ "/finishedTransactions", newpayment)
        .then(response => newpayment.id = response.data.id);
    },
    createNewPayment()
    {
      return {
        id: this.lastUserTransactions.getTransactionsList.length + 1,
        value: this.operationDetails.getTotalAPagar,
        payment: "PIX",
        aproved: true
      };
    }


  },
}
</script>
<template>
  <div class="qrCodeContainer">
    <button @click="showPaymentInModal">
      <img src="../../../../assets/DesafioFrontendAssets/qrcode.png" height="360" width="360"/>
    </button>
  </div>
</template>

<style scoped>
.qrCodeContainer{
  width: 100%;
  margin: 20px;
}
</style>
