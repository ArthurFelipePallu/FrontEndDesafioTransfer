<script>
export default {
  props: {
    CompraValor: {
      type: String,
      required: true
    },
  },

};
</script>



<template>

  <div>

    <p class="compraText">Valor da compra</p>
    <div class="valorCompra isContainerFlexBetween">
      <img src="../../../../assets/Icons/FlagUSA.png" height="36" width="60"/>
      <div class="valorTextHolder">
        <p class="valorText">$ 200,00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.compraText{
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-black);
}
.valorCompra{
  padding: 20px;
  width: 100%;
  height: 61px;
  margin-top: 20px;
  background-color: var(--color-background-white);
  border-radius: 10px;
  border-style: none;
}
.valorTextHolder {
  width: 164px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: right;
}
.valorText{
  color: var(--color-text-black);
  font-size: 20px;
  font-weight: 700;
}
</style>
