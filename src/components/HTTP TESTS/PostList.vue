<script>
import axios from "axios";

export default {
  name: "PostList",
  data() {
    return {
      posts: [],
    }
  },
  methods:{
    getPosts(){
      axios.get("https://8bf5656a-59c7-481c-b829-805269eb65d9.mock.pstmn.io/users").then( (response) => {
        console.log( response.data );
        this.posts = response.data.data;
      }).catch(error => {
        console.error(error);
      })
    }
  }
}
</script>

<template>
  <div>
    <button @click="getPosts">Load Posts</button>
  </div>
</template>

<style scoped>

</style>
