const books = [
    {
        pdf:'https://www.youtube.com/watch?v=hxkKeniT-0Q',
        imgSrc:'img/call.jpeg' ,
        title: 'A Ligação' ,
        author: ' Lee Chung-hyeon' ,
        description: 'Conectada a outra mulher por telefone, mas separada dela no tempo, uma serial killer põe em risco o passado e a vida da sua interlocutora para mudar o próprio destino.' , 
        resume: "Duas pessoas vivem em épocas diferentes. Seo-Yeon vive no presente e Young-Sook vive no passado. Uma ligação conecta às duas e suas vidas são irrevogavelmente mudadas.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=YRVDAxrLfSY&list=PLfL6vJdbGHi3Lb8ff0itri_dcSSRlcdjN',
        imgSrc: 'img/carrie.jpeg',
        title: 'Carrie, a estranha',
        author: 'Brian De Palma',
        description: 'Carrie é uma jovem tímida, perseguida pelos colegas e impedida pela mãe de levar uma vida comum.Ela descobre que possui poderes telecinéticos.' ,
        resume: "Carry White (Sissy Spacek) uma jovem que não faz amigos em virtude de morar em quase total isolamento com Margareth (Piper Laurie), sua mãe e uma pregadora religiosa que se torna cada vez mais ensandecida. Carrie foi menosprezada pelas colegas, pois ao tomar banho achava que estava morrendo, quando na verdade estava tendo sua primeira menstruação. Uma professora fica espantada pela sua falta de informação e Sue Snell (Amy Irving), uma das alunas que zombaram dela, fica arrependida e pede a Tommy Ross (William Katt), seu namorado e um aluno muito popular, para que convide Carrie para um baile no colégio. Mas Chris Hargenson (Nancy Allen), uma aluna que foi proibida de ir festa, prepara uma terrível armadilha que deixa Carrie ridicularizada em público.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=aDrOvFtzyPQ',
        imgSrc: 'img/jason.jpeg',
        title: 'Friday the 13th',
        author: 'Victor Miller',
        description: 'Jason persegue e mata o acampamento Crystal Lake, sentindo uma necessidade ardente de vingar a morte de sua amada mãe.',
        resume: "Em 1958, um casal de adolescentes foge de um acampamento para passar uma noite romântica juntos, mas os dois são perseguidos por um assassino e mortos a facadas. Em 1979, os dirigentes do acampamento Crystal Lake decidem reabrir o local, apesar do trauma que ainda marca a cidade",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=L5PW5r3pEOg',
        imgSrc: 'img/pearl.jpeg',
        title: 'Pearl:a origem do fator X',
        author: ' Ti West',
        description: 'Uma menina que quer ser uma estrela e está presa em um fazenda.',
        resume: "Ambientada no Texas de 1918, a história segue Pearl, uma jovem sonhadora que se vê isolada na fazenda da família devido à Primeira Guerra Mundia e à pandemia da gripe espanhola",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=Ui13PlmyZhQ',
        imgSrc: 'img/hereditario.jpeg',
        title: 'Hereditário',
        author: ' Ari Aster',
        description: 'Após a morte da avó, vários episódios sobrenaturais começam a acontecer na vida dessa família.',
        resume: "Quando sua mãe que sofria de distúrbios mentais falece, Annie (Toni Collette), seu marido (Gabriel Byrne), filho (Alex Wolff) e filha (Milly Shapiro) lamentam sua perda. Todavia, após a morte da reclusa avó, a família Graham começa a desvendar algumas coisas. A família recorre a diferentes meios para lidar com sua dor",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=dCAbPQnFAU4',
        imgSrc: 'img/telefonepreto.jpeg',
        title: 'Telefone Preto',
        author: 'Scott Derrickson',
        description:'Uma série de sequestros está acontecendo na cidade de Denver.',
        resume: "Finney Shaw, um garoto de 13 anos, é sequestrado. o garoto acorda em um porão, onde há apenas uma cama e um telefone preto em uma das paredes. Quando o aparelho toca, o garoto consegue ouvir a voz das vítimas anteriores do assassino, e elas tentam evitar que o Finney sofra o mesmo destino.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=HHNMjwYPlvY',
        imgSrc: 'img/freddykrueguer.jpeg',
        title: 'A hora do pesadelo',
        author: 'Wes Craven',
        description: 'Um assassino que invade os sonhos das pessoas.',
        resume: "Um grupo de adolescentes de um subúrbio americano tem um sonho em comum, envolvendo Freddy Krueger (Jackie Earle Haley). Ele é um assassino desfigurado, que sempre os persegue em seus sonhos. Enquanto eles estão acordados não há risco algum, mas quando adormecem é a chance que Krueger tem para dominá-los.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=0Lcl7-SM6qE',
        imgSrc: 'img/duende.jpeg',
        title: 'Duende',
        author: 'Serial Killer',
        description: 'Em busca de seu ouro roubado, um irlandês brincalhão e endiabrado aterroriza uma cidadezinha',
        resume: "Em busca de seu ouro roubado, um irlandês brincalhão e endiabrado aterroriza uma cidadezinha com seus poderes mágicos.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=ek1ePFp-nBI',
        imgSrc: 'img/myers.jpeg',
        title: 'Halloween',
        author: 'John Carpenter',
        description: 'an serial killer, Bind,torture,kill.',
        resume: "Myers é retratado como uma criança de seis anos que na noite de Halloween, assassina a sua irmã mais velha, Judith. Depois de ficar institucionalizado num hospital psiquiátrico durante quinze anos, escapa e regressa a casa em Haddonfield, Illinois, para matar mais adolescentes.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=5T7TFIOZ2xU',
        imgSrc: 'img/olhosfamintos.jpeg',
        title: 'Olhos Famintos',
        author: ' Timo Vuorensola, Victor Salva',
        description: 'Uma criatura canibal que assassina pessoas que estão com medo.',
        resume: "Dois irmãos vão num encalço de um terrível demônio. Ao volante, parece ir um psicopata. O incidente faz os dois irmãos recordarem uma história sobre uns miúdos que terão desaparecido no mesmo sítio há mais de vinte anos.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=dSQ3yN5yJ0g',
        imgSrc: 'img/iluminado.jpeg',
        title: 'O Iluminado',
        author: 'Disgrace',
        description: 'an serial killer, Bind,torture,kill.',
        resume: "Durante o inverno, um homem (Jack Nicholson) é contratado para ficar como vigia em um hotel no Colorado e vai para lá com a mulher (Shelley Duvall) e seu filho (Danny Lloyd). Porém, o contínuo isolamento começa a lhe causar problemas mentais sérios e ele vai se tornado cada vez mais agressivo e perigoso, ao mesmo tempo em que seu filho passa a ter visões de acontecimentos ocorridos no passado, que também foram causados pelo isolamento excessivo.",
    },
    {
        pdf: 'https://www.youtube.com/watch?v=1Vnghdsjmd0',
        imgSrc: 'img/midsommar.jpeg',
        title: 'Midsommar - O Mal Não Espera a Noite',
        author: 'Ari Aster',
        description: 'Uma filme de suspenso psicológico sobre um seita pagã.',
        resume: "a trama acompanha um casal que viaja à Suécia para participar de um festival de solstício de verão em uma vila rural. Acontece que as coisas começam a ficar cada vez mais estranhas e suspeitas com o passar dos dias no vilarejo.",
    },
    

];
 

//função para adicionar os livros á página
function addBooksToPage(filteredBooks = books) {
 const bookList=document.querySelector('.book-list');

 bookList.innerHTML = '';
 filteredBooks.forEach(book => {
      const bookElement = document.createElement('div');
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

    form.addEventListener('submit', function (event) {
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

//função para pesquisar livros
function searchBooks() {

    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.toLowerCase();

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query)
    )

    addBooksToPage(filteredBooks);
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
        
        const readBookButton = document.getElementById('readBookButton')
        readBookButton.href = bookData.pdf;
    } else {
        document.getElementById('bookTitle').textContent = "Livro não encontrado";
    }
    }


//obtém o título do livro do Url
document.addEventListener('DOMContentLoaded', viewDataForm);
document.addEventListener('DOMContentLoaded', addDetailsBook);
document.addEventListener('DOMContentLoaded', function() {
    addBooksToPage();

    document.getElementById('searchInput').addEventListener('input', searchBooks);
});







//('') aspas simples-usadas para colocar comentários no sites ex:('"oi")
//("")aspas duplas-usadas para colocar comentários no sites ex:('"oi")
//(´´)chave crases-usada para definir algum elemento que não seja texto

