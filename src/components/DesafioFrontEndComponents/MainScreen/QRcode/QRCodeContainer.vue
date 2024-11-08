<script >
import { ModalState }  from "@/stores/counter"
import { UserList }  from "@/stores/counter"
import { OperationDetails }  from "@/stores/counter"
import { LastUserTransactions }  from "@/stores/counter"
import { QRCodeInteractions }  from "@/stores/counter"

import axios from "axios";

export default {
  components: {
    ModalState,
    UserList,
    OperationDetails,
    LastUserTransactions,
    QRCodeInteractions
  },
  data(){
    return {
      modalState: null,
      userList: null,
      operationDetails: null,
      lastUserTransactions: null,
      qrCodeInteractions: null,
    }
  },
  beforeMount() {
    this.modalState = ModalState();
    this.userList = UserList();
    this.operationDetails = OperationDetails();
    this.lastUserTransactions = LastUserTransactions();
    this.qrCodeInteractions = QRCodeInteractions();
  },
  methods: {



   showPaymentInModal(){
     if(!this.qrCodeInteractions.getStartedQRCode)
       return;
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
    },
    StartScaling(){
     if(this.qrCodeInteractions.getStartedQRCode)
     {

     }
       return;

    }


  },
}
</script>
<template>
  <div class="qrCodeContainer">
    <button @click="showPaymentInModal">
      <div v-if="this.qrCodeInteractions.getStartedQRCode">
        <img src="../../../../assets/DesafioFrontendAssets/QR_code_clean.png" height="360" width="360"/>
      </div>
      <div v-else>
        <img  src="../../../../assets/DesafioFrontendAssets/qrcode.png" height="360" width="360"/>
      </div>
    </button>
  </div>
  <div >
    <div class="qrCodeContainer  greenBar" :class="{TimeIt : qrCodeInteractions.getStartedQRCode}" >

    </div>
  </div>

</template>

<style scoped>
.qrCodeContainer{
  width: 100%;
  margin: 20px;
}

.greenBar{
  width: 95%;
  height: 30px;
  transform: scaleX(1);
  background-color: rgba(0,0,0,0);
}
.TimeIt{
  background-color: #0BDD78;
  transition-property: transform;
  transition-duration: 3s;
  transition-delay: 0.0s;
  transition-timing-function: ease-out;
  transform: scaleX(0);
}

</style>
