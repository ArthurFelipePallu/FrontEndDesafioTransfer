<script>
export default {
  props: {
    pagamentoValor: {
      type: String,
      required: true
    },
  },

};
</script>

<template>

  <div>
    <div class="valorPagamento">
      <img src="../../../../assets/Icons/FlagBR.png" height="39" width="56"/>
      <div class="valorTextHolder">
        <p class="valorText">$ {{ pagamentoValor }}</p>
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
.valorPagamento{
  padding: 20px;
  width: 100%;
  height: 61px;
  background-color: var(--color-background-white);
  border-radius: 10px;
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
