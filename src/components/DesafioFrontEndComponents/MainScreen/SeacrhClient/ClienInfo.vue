<script>
export default {
  props: {
   infoName: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
  },

};
</script>
<template>
  <div class="clientInfo">
    <p class="infoNameText">{{infoName}}</p>
    <p class="infoText">{{info}}</p>
  </div>
</template>

<style scoped>
.clientInfo{
  width: 261px;
  height: 50px;

}
.infoNameText{
  width: 260px;
  height: 23px;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-text-black);
}
.infoText{

  width: 260px;
  height: 23px;
  font-size:19px;
  font-weight: 700;
  color: var(--color-text-black)
}
</style>
