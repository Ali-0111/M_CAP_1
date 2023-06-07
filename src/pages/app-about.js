const body = document.querySelector('main');
const humberger = document.querySelector('.humberger-btn');

const navigationLinks = [
  { label: 'Home', target: '../index.html' },
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

// ---------------------- events -----------------------
humberger.onclick = () => {
  navToMain();
};
