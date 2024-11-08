<script setup lang="ts">
import LeftScreenNav from "@/components/DesafioFrontEndComponents/SideNav/LeftScreenNav.vue";
import MainScreen from "@/components/DesafioFrontEndComponents/MainScreen/MainScreen.vue";
import {ref} from "vue";
import { onClickOutside } from "@vueuse/core";
import { ModalState }  from "./stores/counter"

const modalState = ModalState();
//const isModalOpen = ref(false)
const modal = ref(null)

onClickOutside(modal,() => (modalState.closeModal()))

</script>

<template>

  <body>
  <LeftScreenNav />
  <MainScreen />

  </body>
  <Teleport to="#modal">
    <Transition name="modal" >
      <div class="modal-bg" v-if="modalState.isModalOpen">
        <div class="modal" ref="modal">
          <button @click="modalState.closeModal()" class="close-btn">X</button>
          <pre>  {{ modalState.modalMessage }}  </pre>
        </div>
      </div>
    </Transition>
  </Teleport>
<!--  <RouterView />-->
</template>

<style scoped>

.modal-bg{
  /* Fix modal to viewport*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  /* Darken screen*/
  background-color: rgba(0, 0, 0, .5);

  /* Center modal itself*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal{
  /* Needed to Position Button*/
  position: relative;

  background-color: white;
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0, 0, 0, 0.1);

}

.close-btn{
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  border: none;
  cursor: pointer;
}


.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
</style>
