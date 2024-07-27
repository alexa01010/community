const books = [
    {
        imgSrc:'img/call.jpeg' ,
        title: 'A Ligação' ,
        author: ' Lee Chung-hyeon' ,
        description: 'Conectada a outra mulher por telefone, mas separada dela no tempo, uma serial killer põe em risco o passado e a vida da sua interlocutora para mudar o próprio destino.' , 
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/carrie.jpeg',
        title: 'Carrie',
        author: 'Brian De Palma',
        description: 'Carrie é uma jovem tímida, perseguida pelos colegas e impedida pela mãe de levar uma vida comum.Ela descobre que possui poderes telecinéticos.' ,
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc:'img/jason.jpeg',
        title:'Friday the 13th',
        author:'Victor Miller',
        description:'Jason persegue e mata o acampamento Crystal Lake, sentindo uma necessidade ardente de vingar a morte de sua amada mãe.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/pearl.jpeg',
        title: 'Pearl:a origem do fator X',
        author: ' Ti West',
        description: 'Uma menina que quer ser uma estrela e está presa em um fazenda.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/hereditario.jpeg',
        title: 'Hereditário',
        author: ' Ari Aster',
        description: 'Após a morte da avó, vários episódios sobrenaturais começam a acontecer na vida dessa família.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/telefonepreto.jpeg',
        title: 'Telefone Preto',
        author: 'Scott Derrickson',
        description:'Uma série de sequestros está acontecendo na cidade de Denver.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/freddykrueguer.jpeg',
        title: 'Freddy Krueguer',
        author: 'Wes Craven',
        description: 'Um assassino que invade os sonhos das pessoas.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/duende.jpeg',
        title: 'Duende',
        author: 'Serial Killer',
        description: 'Em busca de seu ouro roubado, um irlandês brincalhão e endiabrado aterroriza uma cidadezinha',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/myers.jpeg',
        title: 'Halloween',
        author: 'John Carpenter',
        description: 'an serial killer, Bind,torture,kill.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/olhosfamintos.jpeg',
        title: 'Olhos Famintos',
        author: ' Timo Vuorensola, Victor Salva',
        description: 'Uma criatura canibal que assassina pessoas que estão com medo.',
    },
    {
        imgSrc: 'img/iluminado.jpeg',
        title: 'O Iluminado',
        author: 'Disgrace',
        description: 'an serial killer, Bind,torture,kill.',
        resume: "AAAAAAAAAAA",
    },
    {
        imgSrc: 'img/midsommar.jpeg',
        title: 'Midsommar - O Mal Não Espera a Noite',
        author: ' Ari Aster',
        description: 'Uma filme de suspenso psicológico sobre um seita pagã.',  resume: "AAAAAAAAAAA",
    },
    

];
 

//função para adicionar os livros á página
function addBooksToPage() {
 const bookList=document.querySelector('.book-list');

 books.forEach(book => {
      const bookElement =document.createElement('div');
      bookElement.classList.add('book');

      bookElement.innerHTML = `
      <div class="flex">
        <img src="${book.imgSrc}"alt="">
        <div>
      <h3>${book.title}</h3>
      <p>Autor:${book.author}</p>
      <p>Descrição:${book.description}</p>
       <a href="detailsBook.html?bookId=${book.title}"><button type="submit">Ler</button></a>
      </div>
      </div>
      `;

      bookList.appendChild(bookElement);
 });
}

function viewDataForm(){
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const messageText = `nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`;
         formMessage.innerHTML = messageText;

         form.reset();
    });
}

//função para obter o valor dos parâmetros da Url
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);  
}

function addDetailsBook() {
    //obtém o título do livro da URl
    const bookId = getQueryParam('bookId');

    //encontrar o livro correspondente ao bookId
    const bookData = books.find(book => book.title === bookId);

    //exibir os detalhes do livro
    if (bookData) {
        document.getElementById('bookImage').src = bookData.imgSrc;
        document.getElementById('bookTitle').textContent = `Livro: ${bookData.title}`;
        document.getElementById('bookAuthor').textContent =  `Autor: ${bookData.author}`;
        document.getElementById('bookResume').textContent = `Sinopse: ${bookData.resume}`;
    } else{
        document.getElementById('bookTitle').textContent = "Livro não encontrado";
    }
    }


//obtém o título do livro do Url
const bookId = getQueryParam('bookId');
document.addEventListener('DOMContentLoaded', addBooksToPage);
document.addEventListener('DOMContentLoaded', viewDataForm);
document.addEventListener('DOMContentLoaded', addDetailsBook);






//('') aspas simples-usadas para colocar comentários no sites ex:('"oi")
//("")aspas duplas-usadas para colocar comentários no sites ex:('"oi")
//(´´)chave crases-usada para definir algum elemento que não seja texto

