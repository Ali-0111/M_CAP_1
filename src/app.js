const body = document.querySelector('main');
const humberger = document.querySelector('.humberger');
const people = document.querySelector('.people');
const data = [
  {
    name: 'Oliver Rolland',
    position: 'Managing Director chez Toulouse White Biotechnology (TWB)',
    info: 'He has recieved the Presidential Green Chemistry Award 2014 for “Farnesane: a Breakthrough Renewable Hydrocarbon for Use as Diesel and Jet Fuel” ',
    picture: '../assests/img/profiles/person2.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Irina Borodina',
    position: 'Professor, Novo Nordisk Foundation Center for Biosustainability',
    info: 'Research interests: Metabolic Engineering, Synthetic Biology, Industrial Biotechnology',
    picture: '../assests/img/profiles/person3.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Greg De Temmerman',
    position: 'Managing Director at Zenon Research. Associate Researcher at Mines Paris Tech/IHEIE',
    info: 'Leading scientist with a demonstrated history of working in an international and challenging project environment. Author of more than 230 scientific articles',
    picture: '../assests/img/profiles/person4.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Ann Mettler',
    position: 'Vice President, Europe at Breakthrough Energy',
    info: 'Ann Mettler is the head of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
    picture: '../assests/img/profiles/person5.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Angeleki Rigos',
    position: 'President, Europe at Breakthrough Energy.',
    info: 'Angeleki Rigos is the President of the European Political Strategy Centre (EPSC), the in-house think tank of the European Commission.',
    picture: '../assests/img/profiles/person6.jpeg',
    pattern: '../assests/img/chess.jpg',
  },
  {
    name: 'Wayne Koff',
    position: 'CEO, Human Immunome Project, Harvard T.H.',
    info: 'Wayne Koff, PhD, is the founding president and CEO of the Human Immunome Project.AIDS Vaccine Initiative (IAVI)”',
    picture: '../assests/img/profiles/WayneKoff.jpg',
    pattern: '../assests/img/chess.jpg',
  },
];

const navigationLinks = [
  { label: 'About', target: './pages/about.html' },
  { label: 'Program', target: '#program' },
  { label: 'Team', target: '#team' },
];

//      ------------  functions   -----------
// ------------- Child-1 for navContent
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
// ------------- Child-2 for navContent
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

function navToMain() {
  // section tag will be a child inside main tag
  const navContainer = document.createElement('section');
  navContainer.classList = 'popup hide-pop';
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

// codes for speakers data
// ------------- Child-1 for profileCreator -------
function profilePic(ptrn, picture) {
  // needy element created
  const frame = document.createElement('div');
  const pattern = document.createElement('img');
  const face = document.createElement('img');

  // classes added
  frame.className = 'relative h-[150px] max-md:h-[120px] w-[25%]';
  pattern.className = 'absolute top-0 left-0 w-[50%] h-[50%]';
  face.className = 'absolute bottom-0 right-0 w-[93%] h-[93%]';

  // images content
  pattern.setAttribute('src', ptrn);
  pattern.setAttribute('alt', 'chessPicture');

  face.setAttribute('src', picture);
  face.setAttribute('alt', 'Person');

  // child appending
  frame.append(pattern, face);
  return frame;
}

// ------------- Child-2 for profileCreator -------

function profileDetails(name, position, info) {
  // creating needy elements
  const detailsWrapper = document.createElement('div');
  const forName = document.createElement('h3');
  const forPosition = document.createElement('p');
  const span = document.createElement('span');
  const forInfo = document.createElement('p');

  // adding classes for elements
  detailsWrapper.className = 'w-[70%] h-full text-left self-center space-y-2';
  forName.className = 'font-bold';
  forPosition.className = 'italic text-custom-orange';
  forInfo.className = 'w-[80%] text-justify';
  span.className = 'w-5 my-2 h-[2px] block bg-custom-gray/30';

  // adding contents
  forName.textContent = name;
  forPosition.textContent = position;
  forInfo.textContent = info;

  // appending child
  detailsWrapper.append(forName, forPosition, span, forInfo);
  return detailsWrapper;
}

function profileCreator(obj) {
  // arranging data from object
  const {
    name, position, info, pattern, picture,
  } = obj;

  // li will be created, with a simple wrapper
  const li = document.createElement('li');
  li.className = 'text-black max-md:leading-5 flex justify-between items-start';

  // li children
  const firstChild = profilePic(pattern, picture);
  const secondChild = profileDetails(name, position, info);
  li.append(firstChild, secondChild);

  // li added to the ul list
  people.append(li);
}

// from each person, profile created
function loadSpeakers(data) {
  data.forEach((item) => {
    profileCreator(item);
  });
}

// ---------------------- events -----------------------
humberger.onclick = () => {
  navToMain();
};

window.onload = () => {
  loadSpeakers(data);
};
