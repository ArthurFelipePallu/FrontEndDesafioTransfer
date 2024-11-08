<script>

import ClientInfoHolder from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/ClientInfoHolder.vue";
import PostList from "@/components/HTTP TESTS/PostList.vue";
import axios from "axios";
import {ModalState} from "@/stores/counter"

import {UserList} from "@/stores/counter"

export default {
  components: {
    ClientInfoHolder,
    PostList,
    ModalState,
    UserList,
  },
  data(){
    return {
      postmanUsersList:[
        {
          "id" : 1,
          "name" : "Allan",
          "cpf" : 99999999999,
          "number" : "(11) 9 1111-1111"
        },
        {
          "id" : 2,
          "name" : "Adrian",
          "cpf" : 11111111111,
          "number" : "(22) 9 2222-2222"
        },
        {
          "id" : 3,
          "name" : "Arthur",
          "cpf" : 22222222222,
          "number" : "(33) 9 3333-3333"
        },
        {
          "id" : 4,
          "name" : "Alexa",
          "cpf" : 33333333333,
          "number" : "(11) 9 1111-1111"
        },
        {
          "id" : 5,
          "name" : "Allia",
          "cpf" : 44444444444,
          "number" : "(22) 9 2222-2222"
        },
        {
          "id" : 6,
          "name" : "Allastor",
          "cpf" : 55555555555,
          "number" : "(33) 9 3333-3333"
        }
      ],
      cpfToSearch: '',
      userName:'' ,
      userCPF:'',
      userNumber:'',
      usersList:null,
      modalState: null,
    }
  },
  beforeMount() {
    this.usersList = UserList();
    this.GetHardCodeUsersList();
    //this.GetClientList();
    this.modalState = ModalState();
  },
  methods: {
    GetHardCodeUsersList(){
      this.usersList.setUsersList(this.postmanUsersList);

    },
    GetClientList(){
      axios.get(  this.base_url + "/users").then( (response) => {
        this.usersList.setUsersList(response.data.users);
      }).catch(error => {
        console.error(error);
      })
    },
    ready: function () {
      if (this.cpfToSearch.length !== 11)
        return;

      let user = this.usersList.getUserByCPF(Number(this.cpfToSearch));


      if (user != null) {
        this.usersList.setUserFound(user);
        this.userName = user.name;
        this.userCPF = user.cpf;
        this.userNumber = user.number;
        return;
      }
      this.modalState.openModal();
      this.modalState.setMessage("Usuário com CPF: " + this.cpfToSearch + " não pôde ser encontrado");
    },
  },
}
</script>

<template>

  <div class="ml-20 searchClient">

    <div class="searchBar isContainerFlexAlignedCenter">

      <img
        src="../../../../assets/Icons/IconSearch.png"
        class="ml-10 Icon" alt=""/>


      <input
        type="text"
        v-model="cpfToSearch"
        placeholder="CPF do cliente"
        class="ml-10 section-readonly-input"
        @input="ready">


    </div>

    <ClientInfoHolder :user-name="userName" :user-c-p-f="userCPF" :user-number="userNumber"/>



  </div>

</template>

<style scoped>

.searchClient{
  width: 98%;
  margin-top: 20px;
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
.searchBar{
  width: 98%;
  justify-content: left;
  background-color: var(--color-background-white);
}
.section-readonly-input {
  border: none;
  &:focus-visible{
    outline: none;
  }
}
.Icon{
  width: 15px;
  height: 15px;
}

</style>
