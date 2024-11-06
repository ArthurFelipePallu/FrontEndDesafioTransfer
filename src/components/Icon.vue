<template>
  <div v-if="name === 'IconExtrato'" >
    <img src="../assets/Icons/IconExtrato.png" class="icon"  alt=""/>
  </div>
  <div v-else-if=" name === 'IconQRcode'" >
    <img src="../assets/Icons/IconQRcode.png" class="icon" alt=""/>
  </div>
  <div v-else-if=" name === 'IconSaque'"  >
    <img src="../assets/Icons/IconSaque.png" class="icon" alt=""/>
  </div>
  <div v-else-if=" name === 'IconClientes'" >
    <img src="../assets/Icons/IconClientes.png" class="icon" alt=""/>
  </div>
  <div v-else-if=" name === 'IconAcessos'"  >
    <img src="../assets/Icons/IconAcessos.png" class="icon" alt=""/>
  </div>
  <div v-else-if=" name === 'IconContas'" >
  <img src="../assets/Icons/IconContas.png" class="icon" alt=""/>
</div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    name: {
      type: String,
      required: true
    },
    selected:{
      type: String,
      default: false
    }
  },
};
</script>

<style scoped>
.icon{
  height: 24px;
  width: 24px;
}
</style>
