﻿<script>
export default {
  props: {
    nome: {
      type: String,
      required: true
    },
    valor: {
      type: String,
      required: true
    },
  }

};
</script>

<template>
  <div class="compraInfoContainer isContainerFlexBetween">
    <div class="isContainerFlexBetween ">
      <img src="../../../../assets/Icons/infoIcon.png" height="14" width="16"/>
      <p class="compraInfoText">{{nome}}  </p>
    </div>
    <div>
      <p  class="compraInfoValue">{{valor}}</p>
    </div>
  </div>
</template>

<style scoped>
.compraInfoContainer{
  width: 100%;
  height: 17px;
  margin-top: 22px;
}
.compraInfoText{
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-black);

}
.compraInfoValue{
  font-size: 14px;
  font-weight: 700;
  color: var(--color-text-black);

}
</style>
