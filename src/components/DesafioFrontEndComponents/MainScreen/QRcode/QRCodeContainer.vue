<script >
import { ModalState }  from "@/stores/counter"
import { UserList }  from "@/stores/counter"
export default {
  components: {
    ModalState,
    UserList,
  },
  data(){
    return {
      modalState: null,
      userList: null,
    }
  },
  beforeMount() {
    this.modalState = ModalState();
    this.userList = UserList();
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
       message = "Pagamento efetuado por " + user.name + "\n CPF: " + user.cpf + " no valor de \nR$ 27.000,00 foi confirmado";
     }
     this.modalState.setMessage(message);
     this.modalState.openModal();
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
