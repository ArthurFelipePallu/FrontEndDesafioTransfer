
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
    modoPagamento:{
      type: String,
      required: true
    }

  }
};
</script>
<template>
  <div class="dollar">
    <img src="../../../../assets/Icons/FlagUSA.png" height="36" width="60"/>
    <div class="dollarInfo">
      <p>USD {{ dollarValue }}</p>
      <div class="bottomInfo">
        <p>{{modoPagamento}}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.dollar{
  margin-top: 15px;
  width: 191px;
  height: 38px;
  display: flex;
  align-items: center;

}
.dollarInfo{
  margin-left: 10px;
  height: 38px;
}

.bottomInfo{
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-grey);
}
</style>
