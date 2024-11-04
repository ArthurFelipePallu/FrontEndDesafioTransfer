<script>
export default {
  props: {
    numberOfNotifications: {
      type: Number,
      required: true
    }
  },

};
</script>
<template>
<div class="headerNotification">
  <img src="../../../../assets/DesafioFrontendAssets/Icons/bellIcon.png" height="22" width="20"/></div>
  <div class="notificationNumber bottomDiv">
    <p>{{ numberOfNotifications }}</p>
  </div>
</template>

<style scoped>
.notificationNumber{
  width: 15px;
  height: 15px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-text-white);
  background-color: var(--color-background-green);
}
.bottomDiv{
  position:relative;
  bottom:10px;
  right:10px;
}
</style>
