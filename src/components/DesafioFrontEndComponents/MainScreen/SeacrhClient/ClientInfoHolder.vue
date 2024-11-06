<script >

import ClienInfo from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/ClienInfo.vue";

export default {
  components: {ClienInfo},
  props:{
    userName: {
      type:String,
      required:true
    },
    userCPF: {
      type:String,
      required:true
    },
    userNumber: {
      type:String,
      required:true
    },
  }
}
</script>

<template>
<div class="clientInfoContainer isContainerFlexAlignedCenter">
  <ClienInfo info-name="Nome do cliente" :info="userName" class="ml-20"/>

  <ClienInfo info-name="CPF" :info="userCPF" />

  <ClienInfo info-name="Telefone" :info="userNumber" /> />
</div>
</template>

<style scoped>
.clientInfoContainer{
  width: 98%;
  height: 114px;
  margin-top: 20px;
  background-color: var(--color-background-white);
  border-radius: 10px;
  border-style: none;
}
</style>
