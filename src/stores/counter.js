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

});

export const OperationDetails = defineStore("operationDetailsCounter",{

  state:() =>{
    return {
      valorCompra: 0,
      custoPercentual: 0.7,
      cotacaoComercial: 0,
      impostoIOF: 0.38,
      tarifa: 10,
      dolarVET: 0,
    }
  },
  actions:{
    setValorDaCompra(val){
      this.valorCompra = val;
    },
    setCotacaoComercial(val){
      this.cotacaoComercial = val;
    },
    calculateDolarVet(){

      let num = (this.cotacaoComercial * (1 + this.custoPercentual + this.impostoIOF)) + this.tarifa;
      this.dolarVET = parseFloat(num).toFixed(4);
    },


  },
  getters : {
    getValorDaCompra: (state) => state.valorCompra,
    getCustoPercentual: (state) => state.custoPercentual,
    getCotacaoComercial: (state) => state.cotacaoComercial,
    getImpostoIOF: (state) => state.impostoIOF,
    getTarifa: (state) => state.tarifa,
    getDolarVet: (state) => state.dolarVET,



    getTotalAPagar: (state) => parseFloat(state.valorCompra * state.dolarVET).toFixed(2)
  }

});
export const LastUserTransactions = defineStore("lastUserTransactionsCounter",{

  state:() =>{
    return {
      transactions: [],
      transactionTypes:["PIX","Talao de cheque","Crédito","Débito"],
    }
  },
  actions:{
    setTransactionsList(fromPostman){
      this.transactions = fromPostman;
    },
    addTransactionToList(transaction){
      this.transactions.push(transaction);
    }


  },
  getters : {
    getTransactionsCount: (state) => state.transactions.length,
    getTransactionById: (state) => (userId) => state.transactions.find(user => user.id === userId),
    getTransactionsList: (state) => state.transactions,


    getTransactionsTypesCount: (state) => state.transactionTypes.length,
    getTransactionsTypesList: (state) => state.transactionTypes,
    getTransactionTypeById:(state) => (userId) => state.transactionTypes.find(user => user.id === userId),

  }

});

export const QRCodeInteractions = defineStore("QRCodeInteractionsCounter",{

  state:() =>{
    return {
      started: false,
      stopped: false,
      timeInMiliSeconds: 3000,

    }
  },
  actions:{
    startQRCodeTimer(){
      this.started = true;
      this.stopped = false;
    },
    stopQRCodeTimer(){
      if(this.started){
        this.stopped = true;
        this.started = false;
      }
    },
    reset(){
      this.started = false;
      this.stopped = false;
    }


  },
  getters : {
    getStartedQRCode: (state) => state.started,
    getStoppedQRCode: (state) => state.stopped,
    getTimeInMiliSeconds :(state) => state.timeInMiliSeconds ,
  }

});
