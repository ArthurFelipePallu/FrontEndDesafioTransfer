<script>

import ClientInfoHolder from "@/components/DesafioFrontEndComponents/MainScreen/SeacrhClient/ClientInfoHolder.vue";
import PostList from "@/components/HTTP TESTS/PostList.vue";
import axios from "axios";
export default {
  components: {
    ClientInfoHolder,
    PostList,

  },
  data(){
    return {
      keyWord:'',
      cpfToSearch: '',
      userName:'' ,
      userCPF:'',
      userNumber:'',
      foundUser: null,
      usersList:null
    }
  },
  props:{
    value:{
      type: String,
      default: "",
    }
  },
  watch:{
    value(value){
      this.keyWord = value;
    }
  },
  created() {
    this.keyWord = this.value;
  },
  beforeMount() {
    this.GetClientList();
  },
  methods: {
    onInput(vl){
        this.$emit('input',vl);
    },

    GetClientList(){
      axios.get("https://8bf5656a-59c7-481c-b829-805269eb65d9.mock.pstmn.io/users").then( (response) => {
        console.log( "the users list was retrieved successfully before mounted" );
        this.usersList = response.data.users;
        this.SetUserVariables(5);

      }).catch(error => {
        console.error(error);
      })
    },
    SetUserVariables(Id){
      let tempUserList = this.usersList;
      let user = tempUserList.find( (u) => {
        return (u.id === Id)
      });
      this.userName = user.name;
      this.userCPF = user.cpf;
      this.userNumber = user.number;
    }
  },
  computed: {

  }

}
</script>

<template>

  <div>
    {{usersList}}
  </div>
  <div class="ml-20 searchClient">
    <h3>{{ keyWord }}</h3>
    <div class="searchBar isContainerFlexAlignedCenter">

      <img
        src="../../../../assets/Icons/IconSearch.png"
        class="ml-10 Icon" alt=""/>

      <input
        type="text"
        :value="keyWord"
        @input="onInput($event.target.value)"
        placeholder="CPF do cliente"
        class="ml-10 section-readonly-input">


    </div>

    <ClientInfoHolder :user-name="userName" :user-c-p-f="userCPF" :user-number="userNumber"/>



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

.black{
  background-color: var(--color-background-black);
}
</style>
