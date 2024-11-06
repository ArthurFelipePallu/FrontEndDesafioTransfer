<script>

import ClientInfoHolder from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/ClientInfoHolder.vue";
import PostList from "@/components/HTTP TESTS/PostList.vue";
export default {
  components: {
    ClientInfoHolder,
    PostList,

  }
}
</script>

<template>
  <div class="ml-20 searchClient">
    <h3>Buscar Cliente</h3>
    <input type="text" placeholder="CPF do cliente">
    <PostList />
    <ClientInfoHolder />
  </div>
</template>

<style scoped>

.searchClient{
  width: 98%;
}
h3{
  font-size: 21px;
  font-weight: 600;
  color: var(--color-text-black);
  margin-top: 15px;
}
input{
  width: 98%;
  height: 61px;
  border-radius: 10px;
  border-style: none;
}
</style>
