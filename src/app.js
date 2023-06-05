const body = document.querySelector('main');
const humberger = document.querySelector('.humberger');
const people = document.querySelector('.people');
const data = [
  {
    name: 'Oliver Rolland',
    position: 'Managing Director chez Toulouse White Biotechnology (TWB)',
    idea: 'He has recieved the Presidential Green Chemistry Award 2014 for “Farnesane: a Breakthrough Renewable Hydrocarbon for Use as Diesel and Jet Fuel” ',
    picture: '../assests/img/profiles/person2.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Irina Borodina',
    position: 'Professor, Novo Nordisk Foundation Center for Biosustainability',
    idea: 'Research interests: Metabolic Engineering, Synthetic Biology, Industrial Biotechnology',
    picture: '../assests/img/profiles/person3.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Greg De Temmerman',
    position: 'Managing Director at Zenon Research. Associate Researcher at Mines Paris Tech/IHEIE',
    idea: 'Leading scientist with a demonstrated history of working in an international and challenging project environment. Author of more than 230 scientific articles',
    picture: '../assests/img/profiles/person4.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Ann Mettler',
    position: 'Vice President, Europe at Breakthrough Energy',
    idea: 'Ann Mettler is the head of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
    picture: '../assests/img/profiles/person5.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Angeleki Rigos',
    position: 'President, Europe at Breakthrough Energy.',
    idea: 'Angeleki Rigos is the President of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
    picture: '../assests/img/profiles/person6.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Wayne Koff',
    position: 'CEO, Human Immunome Project, Harvard T.H.',
    idea: 'Wayne Koff, PhD, is the founding president and CEO of the Human Immunome Project.AIDS Vaccine Initiative (IAVI)”',
    picture: '../assests/img/profiles/WayneKoff.jpg',
    pattern: '../assests/img/chess.jpg',
  },
];

const navigationLinks = [
  { label: 'About', target: './pages/about.html' },
  { label: 'Program', target: '#p' },
  { label: 'Sponsor', target: '#s' },
  { label: 'News', target: '#n' },
  { label: 'Tickets', target: '#t' },
];
//      ------------  functions   -----------

function navList(navigationLinks) {
  const nav = document.createElement('nav');
  nav.classList.add('nav-items', 'py-2', 'text-white');
  const ul = document.createElement('ul');
  ul.className = 'navList';

  // ul items made by iteration
  navigationLinks.forEach(({ label, target }) => {
    const li = document.createElement('li');
    li.classList.add('hover:text-red-600');

    const a = document.createElement('a');
    a.setAttribute('href', target);
    a.innerText = label;

    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

function closeBtn() {
  const btn = document.createElement('button');
  btn.className = 'closeButton text-white';
  btn.type = 'button';

  // this div is shape of x inside the button
  // it made by two spans

  const div = document.createElement('div');
  div.className = 'space-y-1 spn-wrapper';

  const span1 = document.createElement('span');
  span1.className = 'span-1 block w-8 mx-auto h-[4px] bg-white';

  const span2 = document.createElement('span');
  span2.className = 'span-2 block w-8 mx-auto h-[4px] bg-white';

  div.append(span1, span2);
  btn.appendChild(div);
  return btn;
}

function navContent() {
  // navContent has two section inside a div. 1: close btn 2:navigation list

  const navWrapper = document.createElement('div');
  navWrapper.className = 'container py-4';

  const navCloseBtn = closeBtn();
  const navsList = navList(navigationLinks);

  navWrapper.append(navCloseBtn, navsList);
  return navWrapper;
}

function removeFromBody(element) {
  body.removeChild(element);
}

function addRemoveAbilityFor(target) {
  const closeButton = document.querySelector('.closeButton');
  closeButton.onclick = () => {
    removeFromBody(target);
  };

  const links = document.querySelectorAll('.navList li');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      removeFromBody(target);
    });
  });
}

// ------------- function for creatine Chevtron btn --------------
function createChevronBtn() {
  const btn = document.createElement('div');
  btn.classList = 'w-100 hide-desk';
  btn.innerHTML = `
          <button class="d-flex border bg-white w-100 py-3 my-3 fs-2 justify-content-center"
                      type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                      >
                          Expand or Minimize
                          <svg class="p mx-2" width="16" height="28"  fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                          </svg>
                  </button>
      `;
  people.append(btn);
}

function navToMain() {
  // section tag will be a child inside main tag
  const navContainer = document.createElement('section');
  navContainer.classList = 'popup demo';
  const wrapper = document.createElement('div');
  wrapper.className = 'popup-content';

  // a wrapper div for nav content
  wrapper.appendChild(navContent());

  // navContent inside section tag by a wrapper
  navContainer.append(wrapper);

  body.appendChild(navContainer);

  // remevo feature for navContainer
  addRemoveAbilityFor(navContainer);
}

// --------- function for creatine chevetron collapse menu ---

function collpase() {
  const div = document.createElement('div');
  div.classList = 'collapse hide-desk';
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
    li.classList = 'd-flex my-4 sz';
    li.innerHTML = `
    <div class="profile position-relative d-flex">
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

function speackersDesk() {
  for (let i = 2; i < data.length; i += 1) {
    const li = document.createElement('li');
    li.classList = 'grid-speakers my-4 sz';
    li.innerHTML = `
      <div class="profile position-relative d-flex">
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
}
// ---------------------- events -----------------------
humberger.onclick = () => {
  navToMain();
};

window.onload = () => {
  createSpeaker();
  speackersDesk();
};
