<script>
export default {
  props: {
    percentage: {
      type: Number,
      required: true
    }
  },

};
</script>
<template>
  <div class="percentage ml-10">
    <p> ({{percentage}}%)</p>
    <img src="../../../../assets/DesafioFrontendAssets/greenArrow.png" height="7" width="11" class="ml-10"/>
  </div>
</template>

<style scoped>
.percentage{
  display: flex;
  align-items: baseline;
  font-size: 12px ;
  height: 20px;
  color: var(--color-text-green);
}
</style>
