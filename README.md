# desafiofrontend

Este é um projeto de desenvolvimento de front-end como teste de contratação

O projeto encompassa uma única página de um site de banco com funcionalidades de:
* busca de usuários via chave especifica e tratar o resultado desta busca
* Calculo do total a ser pago pelo usuario  determinado algumas variáveis
* Adicionar ultima transação feita pelo usuário a uma lista no backend , juntamente com animações decomponentes da página
* Tornar a tela responsiva
    
  Tudo isso seguindo o design disponibilizado no figma a seguir :
  https://www.figma.com/proto/Uo1reBcBXBVniP7zGlTv02/Design-System?page-id=0%3A1&node-id=1720-2921&node-type=frame&viewport=-2454%2C-9780%2C0.22&t=nrEX4unWUO6U0zDy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1696%3A675


  Comecei o projeto de maneira simples , me adequando ao estilo de programação do VUEjs e aprendendo suas peculiaridades através de tutoriais , A.I. e maior parte tentativa e erro.
  me acostumando com o básico e desenhando a página como de acordo com o design.
      Após essa parte terminada , a primeira fase de refatoração e limpeza do código começou . Embora não tão detalhada como desejaria , esta seria a parte onde uma dinamicidade maior entrou no projeto,
  buscando dinâmicamente valores e paths de componentes / CSSstyles e assets.
      A próxima etapa do projeto seguiu com a integração da busca de dados no MockServer do Postman. Uma lista de usuário e outra de Transações fora aplicado e seus valores Retraídos para o site e utilizados em conjunto com o resto dos componentes.
      Mas foi a chegada do Pinia que iniciou um efeito dominó e disponibilizou uma vasta gama de funcionalidade para o projeto. De Inicio possibilitou a ativação de itens como o Modal a partir de componentes distantes. tarefa que não havia conseguido reproduzir anteriormente.
      A chegada do Pinia também centralizou boa parte dos dados do projeto em um só lugar, com stores criadas para guardar informações dos itens principais  como lista de Usuários, Lista de Transações ,Operações bancárias e por fim o Modal em si.
  Com  essas mesas de dados a meu dispor , utilizar suas informações ao redor do projeto possibiltou realizar as funcionalidades necessárias.

  O projeto deu uma sofrida no momento em que atingi minha quota mensal de requests do Postman.
  para circunvir rapidamente esse problema  , desabilitei as chamadas de funções que faziam as requests através do axios e setei valores manualmente.
