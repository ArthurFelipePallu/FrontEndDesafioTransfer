
<script>
export default {
  props: {
    lastUpdateTimestamp: {
      type: String,
      required: true
    }

  },

};
</script>
<template>
<div class="timeStamp">
  <p>{{ lastUpdateTimestamp }}</p>
</div>
</template>

<style scoped>
.timeStamp{
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-grey);
}
</style>
