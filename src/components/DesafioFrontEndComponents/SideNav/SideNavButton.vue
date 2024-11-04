<script setup lang="ts">
import Icon from "@/components/Icon.vue";

defineProps<{
  btnText: string
  status: string
}>()
</script>


<template>
  <div v-bind:class="status" class="botao">
    <Icon :data="{ imageName: 'IconQRcode.png' }" />

    <div class="buttonContent">
      <p>{{btnText}}</p>

      <img src="../../../assets/DesafioFrontendAssets/whiteArrow.png" height="12" width="8" alt=""/>
    </div>
  </div>
</template>


<style scoped>

.botao{
  width: 281px;
  height: 56px;
  color: var(--color-text-black);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.buttonContent{
  width: 211px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.botaoverde{
  background-color: var(--color-background-green);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  border-color: var(--color-borded-green);
  border-radius: 10px;
}
</style>
