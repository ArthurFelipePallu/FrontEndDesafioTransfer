import {defineStore} from "pinia";


export const ModalState = defineStore("counter",{
  state:() =>{
    return {
      isOpen: false,
      message: "ModalState default message"
    }
  },
  actions : {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    setMessage(newMessage) {
      this.message = newMessage;
    },

  },
  getters : {
    isModalOpen: (state) => state.isOpen ,
    modalMessage: (state) => state.message,
  },

});


export const UserList = defineStore("userCounter",{

  state:() =>{
      return {
        users: [],
        userFound: null,
      }
    },
  actions:{
    setUsersList(fromPostman){
      this.users = fromPostman;
    },
    setUserFound(user)
    {
      this.userFound = user;

    }

  },
  getters : {
    getUsersCount: (state) => state.users.length,
    getUserById: (state) => (userId) => state.users.find(user => user.id === userId),
    getUserByCPF:(state) => (userCPF) => state.users.find(user => user.cpf === userCPF),
    getUserFound: (state) => state.userFound,
  }

})
