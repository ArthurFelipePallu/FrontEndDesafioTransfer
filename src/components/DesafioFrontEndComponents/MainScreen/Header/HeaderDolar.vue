
<script>
import HeaderDolarTimeStamp from "@/components/DesafioFrontEndComponents/MainScreen/Header/HeaderDolarTimeStamp.vue";
import HeaderDolarPercentage from "@/components/DesafioFrontEndComponents/MainScreen/Header/HeaderDolarPercentage.vue";

export default {
  components: {HeaderDolarPercentage, HeaderDolarTimeStamp},
  props: {
    dollarValue: {
      type: String,
      required: true
    },
  }
};
</script>

<template>
  <div class="dollar isContainerFlexAlignedCenter">
    <img src="../../../../assets/Icons/FlagUSA.png" height="36" width="60"/>
    <div class="dollarInfo">
      <p>{{ dollarValue }} BRL</p>
      <div class="bottomInfo">
        <HeaderDolarTimeStamp last-update-timestamp="20:04:37" />
        <HeaderDolarPercentage percentage="0,16"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.dollar{
  margin-left: 20px;
  width: 191px;
  height: 38px;

}
.dollarInfo{
  margin-left: 10px;
  height: 38px;
}

.bottomInfo{
  display: flex;
  height:20px;
}

</style>
