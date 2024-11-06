<script >
import Icon from "@/components/Icon.vue";

export default {
  components: {Icon},
  props: {
    iconName: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: "normal"
    }
  }

};
</script>

<template>
  <div v-bind:class="status" class="botao isContainerFlexAround">
    <Icon :name="iconName" />

    <div class="buttonContent isContainerFlexBetween">
      <p>{{btnText}}</p>

      <img src="../../../assets/DesafioFrontendAssets/whiteArrow.png" height="12" width="8" alt=""/>
    </div>
  </div>
</template>


<style scoped>

.botao{
  width: 281px;
  height: 56px;
  color: var(--color-text-black);
}
.buttonContent {
  width: 211px;
  height: 22px;
}
.isSelected{
  background-color: var(--color-background-green);
  color: var(--color-text-white);
  border-style: solid;
  border-color: var(--color-borded-green);
  border-radius: 10px;
}
</style>
