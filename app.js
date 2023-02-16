const body = document.querySelector('body');
const humberger = document.querySelector('.humberger');
const people = document.querySelector('.people');
const data = [
  {
    name: 'Oliver Rolland',
    position: 'Managing Director chez Toulouse White Biotechnology (TWB)',
    idea: 'He has recieved the Presidential Green Chemistry Award 2014 for “Farnesane: a Breakthrough Renewable Hydrocarbon for Use as Diesel and Jet Fuel” ',
    picture: './img/profiles/person2.jpeg',
    pattern: './img/chess.jpg',
  },
  {
    name: 'Irina Borodina',
    position: 'Professor, Novo Nordisk Foundation Center for Biosustainability',
    idea: 'Research interests: Metabolic Engineering, Synthetic Biology, Industrial Biotechnology',
    picture: './img/profiles/person3.jpeg',
    pattern: './img/chess.jpg',
  },
  {
    name: 'Greg De Temmerman',
    position: 'Managing Director at Zenon Research. Associate Researcher at Mines Paris Tech/IHEIE',
    idea: 'Leading scientist with a demonstrated history of working in an international and challenging project environment. Author of more than 230 scientific articles',
    picture: './img/profiles/person4.jpeg',
    pattern: './img/chess.jpg',
  },
  {
    name: 'Ann Mettler',
    position: 'Vice President, Europe at Breakthrough Energy',
    idea: 'Ann Mettler is the head of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
    picture: './img/profiles/person5.jpeg',
    pattern: './img/chess.jpg',
  },
  {
    name: 'Angeleki Rigos',
    position: 'President, Europe at Breakthrough Energy.',
    idea: 'Angeleki Rigos is the President of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
    picture: './img/profiles/person6.jpeg',
    pattern: './img/chess.jpg',
  },
];

//      ------------  functions   -----------

function remove(o) {
  const humberger2 = document.querySelector('.humberger2');
  humberger2.onclick = () => {
    body.removeChild(o);
  };
}

// ------------- function for creatine Chevtron btn --------------
function createChevronBtn() {
  const btn = document.createElement('div');
  btn.classList = 'w-100';
  btn.innerHTML = `
          <button class="d-flex border bg-white w-100 py-3 my-3 fs-2 justify-content-center"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                      >
                          MORE
                          <svg class="p mx-2" width="16" height="28"  fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                  </button>
      `;
  people.append(btn);
}

function createSection() {
  const section = document.createElement('section');
  section.classList = 'popup';
  const divForPop = document.createElement('div');
  divForPop.classList = 'popup-content';
  divForPop.innerHTML = `
    <button
    class="humberger2 navbar-toggler postion-fixed mt-3     toggler-example " type="button">
        <span class="span-1"></span>
        <span class="hide"></span>
        <span class="span-2"></span>
    </button>
    <nav class="links">
    <ul>
        <li>
          <a href="./pages/about.html">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
    </ul>
    </nav>
    `;
  section.append(divForPop);
  body.appendChild(section);
  remove(section);
  // remove by itmes clicked
  const links = document.querySelectorAll('.links li');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      body.removeChild(section);
    });
  });
}

// --------- function for creatine chevetron collapse menu ---

function collpase() {
  const div = document.createElement('div');
  div.classList = 'collapse';
  div.id = 'collapseExample';
  for (let i = 2; i < data.length; i += 1) {
    const li = document.createElement('li');
    li.classList = 'd-flex my-4';
    li.innerHTML = `
      <div class="profile position-relative d-flex justfify-content-center align-items-center">
                          <img class="img1 position-absolute top-0 left-0" src="${data[i].pattern}" alt="chessPattern">
                          <img class="img2 mt-2 ms-3 z-3" src="${data[i].picture}" alt="person2">
                      </div>
                      <div class="idea ps-5 align-self-center">
                              <h3 class="display-6 fw-semibold">${data[i].name}</h3>
                          <p class="text-danger fst-italic fs-5 mb-0">${data[i].position}</p>
                          <div class="space my-3"></div>
                          <p class="research fs-4">
                              ${data[i].idea}
                          </p>
                      </div>
      `;
    div.append(li);
  }
  people.append(div);
}

function createSpeaker() {
  for (let i = 0; i < 2; i += 1) {
    const li = document.createElement('li');
    li.classList = 'd-flex my-4';
    li.innerHTML = `
    <div class="profile position-relative d-flex justfify-content-center align-items-center">
                        <img class="img1 position-absolute top-0 left-0" src="${data[i].pattern}" alt="chessPattern">
                        <img class="img2 mt-2 ms-3 z-3" src="${data[i].picture}" alt="person2">
                    </div>
                    <div class="idea ps-5 align-self-center">
                            <h3 class="display-6 fw-semibold">${data[i].name}</h3>
                        <p class="text-danger fst-italic fs-5 mb-0">${data[i].position}</p>
                        <div class="space my-3"></div>
                        <p class="research fs-4">
                            ${data[i].idea}
                        </p>
                    </div>
    `;
    people.append(li);
  }
  createChevronBtn();
  collpase();
}

// ---------------------- events -----------------------
humberger.onclick = () => {
  createSection();
};

window.onload = () => {
  createSpeaker();
};
