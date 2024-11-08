<script>
import {UserList} from "@/stores/counter"
export default {
  components: {
    UserList,
  },
  data(){
    return {
      usersList:null,
    }
  },
  beforeMount() {
    this.usersList = UserList();
  },
  methods: {
    getUserName(){
      let user = this.usersList.getUserFound;
      let name = '';

      if(user) {
        name = user.name;
      }
      return name;

    }
  },
}
</script>

<template>
<div class="user isContainerFlexAlignedCenter">

  <img src="../../../../assets/Icons/userIcon.png" height="29" width="29"/>
    <p class="ml-20">{{ getUserName() }}</p>


  <img src="../../../../assets/DesafioFrontendAssets/whiteArrow.png" height="12" width="8" class="rotate90 ml-20"/>
</div>
</template>

<style scoped>
.user{
  width: 100px;
}
.rotate90{
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
</style>
