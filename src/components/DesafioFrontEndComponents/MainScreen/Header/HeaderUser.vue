<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    }
  },

};
</script>

<template>
<div class="user isContainerFlexAlignedCenter">

  <img src="../../../../assets/Icons/userIcon.png" height="29" width="29"/>
  <p class="ml-20">{{ userName }}</p>

  <img src="../../../../assets/DesafioFrontendAssets/whiteArrow.png" height="12" width="8" class="rotate90 ml-20"/>
</div>
</template>

<style scoped>
.user{
  width: 100px;
}
.rotate90{
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>
