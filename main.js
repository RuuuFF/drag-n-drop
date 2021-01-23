const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// Adiciona um ouvidor de eventos do tipo "dragstart" que chama uma função quando o usuário começa a arrastar o elemento
fill.addEventListener('dragstart', dragStart)
// Adiciona um ouvidor de evetos do tipo "dragend" que chama uma função quando o usuário termina de arrastar o elemento
fill.addEventListener('dragend', dragEnd)


// Funciona como um "forEach". Passa cada item de "empties"
// Adiciona 4 tipos de ouvidores de evento em cada item dentro de "empties"
for(const empty of empties) {
  // Executa quando um elemento estiver sendo arrastado sobre um destino de soltar que seja válido
  empty.addEventListener('dragover', dragOver)
  
  // Executa quando um elemento arrastável entrar em um destino de soltar
  empty.addEventListener('dragenter', dragEnter)
  
  // Executa quando um elemento arrastável é movido para fora de um destino de soltar.
  empty.addEventListener('dragleave', dragLeave)
  
  // O evento ocorre quando um elemento arrastável ou seleção de texto é solto em um destino de soltar válido.
  empty.addEventListener('drop', dragDrop)
}


// Declaração da função "dragStart", de "fill"
function dragStart() {
  // "this" pega "fill", "className" e concatena as classes que já tem ("fill") com "hold" (ficando class="fill hold").
  this.className += ' hold'
  // Timeout para não executarem "juntos". Remove todas as classes adicionando apenas a classe "invisible" (sumindo com o elemento no quadrado).
  setTimeout(() => this.className = 'invisible', 0)
}


// Declaração da função "dragEnd", de "fill"
function dragEnd() {
  // Adiciona a "fill" a classe "fill"
  this.className = 'fill'
}


// Função "dragOver" de cada elemento em "empties"
function dragOver(event) {
  // "preventDefault" cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá.
  event.preventDefault()
}


// Função "dragEnter" de cada elemento dentro de "empties"
function dragEnter(event) {
  // "preventDefault" cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá.
  event.preventDefault()
  // Concatena as classes já em de "empty" com "hovered" (ficando: class="empty hovered").
  this.className += ' hovered'
}


// Função "dragLeave" de cada elemento dentro de "empties"
function dragLeave() {
  // Adiciona a classe "empty" ao elemento "empty"
  this.className = 'empty'
}


// Função "dragDrop" de cada elemento dentro de "empties"
function dragDrop() {
  // Adiciona a classe "empty" ao item "empty" que está em "empties"
  this.className = 'empty'
  // Pega "empty", adiciona dentro dele o elemento "fill"
  this.append(fill)
}


// "dragstart": Executa um JavaScript quando o usuário começar a arrastar um elemento.
// https://www.w3schools.com/jsref/event_ondragstart.asp


// "dragend": Executa um JavaScript quando o usuário terminar de arrastar um elemento.
// https://www.w3schools.com/jsref/event_ondragend.asp


// "dragover": Executa um quando um elemento estiver sendo arrastado sobre um destino de soltar que seja válido.
// https://www.w3schools.com/jsref/event_ondragover.asp


// "dragenter": Executa quando um elemento arrastável entrar em um destino de soltar.
// https://www.w3schools.com/jsref/event_ondragenter.asp


// "dragleave": Executa quando um elemento arrastável é movido para fora de um destino de soltar.
// https://www.w3schools.com/jsref/event_ondragleave.asp


// "drop": O evento ondrop ocorre quando um elemento arrastável ou seleção de texto é solto em um destino de soltar válido.
// https://www.w3schools.com/jsref/event_ondrop.asp


// "preventDefault": cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá.
// https://www.w3schools.com/jsref/event_preventdefault.asp