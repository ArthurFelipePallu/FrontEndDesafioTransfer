﻿<script setup lang="ts">

import HeaderNotification from "@/components/DesafioFrontEndComponents/MainScreen/Header/HeaderNotification.vue";
import HeaderUser from "@/components/DesafioFrontEndComponents/MainScreen/Header/HeaderUser.vue";
</script>

<template>
  <div class="userSectionContainer isContainerFlexAlignedCenter">
    <HeaderNotification number-of-notifications="14" />
    <HeaderUser user-name="Allan"/>

  </div>
</template>

<style scoped>
.userSectionContainer{
  width: 200px;
  height: 30px;
  align-content: space-around;
}
</style>
