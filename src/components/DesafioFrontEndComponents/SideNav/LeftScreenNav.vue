<script setup lang="ts">
import TransferBanKLogo from "@/components/DesafioFrontEndComponents/SideNav/TransferBanKLogo.vue";
import SideNavButton from "@/components/DesafioFrontEndComponents/SideNav/SideNavButton.vue";

</script>

<template>
  <div class="desafioLeftNav">
    <TransferBanKLogo/>
    <div class="navButtonsContainer margintop60">
      <SideNavButton btn-text="Gerar QR Code" status="botaoverde"/>
      <SideNavButton btn-text="Extrato" status="normal"  />
      <SideNavButton btn-text="Saque" status="normal" />
      <SideNavButton btn-text="Clientes" status="normal"  />
      <SideNavButton btn-text="Acessos" status="normal"  />
      <SideNavButton btn-text="Contas" status="normal"/>

    </div>


  </div>
</template>

<style scoped>
.desafioLeftNav{
  width: 281px;
  height: 100%;
  border: #F3F3F3 1px solid;
}
.margintop60{
  margin-top: 60px;
}
.navButtonsContainer{
  width: 281px;
  height: 387px;
}


</style>
