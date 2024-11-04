<template>
  <div>
    <!-- Use require to resolve the image path dynamically -->
    <img :src="getImagePath(data.imageName)" alt="Dynamic Icon" />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImagePath(imageName) {
      try {
        // Dynamically require the image from the Icons folder
        return require(`../assets/Icons/${imageName}`);
      } catch (error) {
        // Handle cases where the image does not exist
        console.warn(`Image not found: ${imageName}`);
        return ""; // Or return a placeholder image path
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 100px; /* Example width */
  height: auto;
}
</style>
