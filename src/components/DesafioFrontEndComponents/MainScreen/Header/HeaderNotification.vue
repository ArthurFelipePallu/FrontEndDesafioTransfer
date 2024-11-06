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
  <img src="../../../../assets/Icons/bellIcon.png" height="22" width="20"/>
</div>
  <div class="notificationNumber bottomDiv isContainerFlexAlignedCenter">
    <p>{{ numberOfNotifications }}</p>
  </div>
</template>

<style scoped>
.notificationNumber{
  width: 15px;
  height: 15px;
  font-size: 10px;
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
