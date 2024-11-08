<script>

import { OperationDetails }  from "@/stores/counter"

export default {
  components: {
    OperationDetails
  },
  data() {
    return {
      operationDetails: null,
    }
  },
  beforeMount() {
    this.operationDetails = OperationDetails();
  },
  methods: {
  },

};
</script>


<template>

  <div>
    <div class="valorPagamento isContainerFlexBetween">
      <img src="../../../../assets/Icons/FlagBR.png" height="39" width="56"/>
      <div class="valorTextHolder isContainerFlexAlignedCenter">
        <p class="valorText">R$: {{this.operationDetails.getTotalAPagar}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>


.valorPagamento{
  padding: 20px;
  width: 100%;
  height: 61px;
  background-color: var(--color-background-white);
  border-radius: 10px;
  border-style: none;
}
.valorTextHolder {
  width: 164px;
  height: 17px;
  justify-content: right;
}
.valorText{
  color: var(--color-text-black);
  font-size: 20px;
  font-weight: 700;
}
</style>
