const body = document.querySelector('body');
const humberger = document.querySelector('.humberger');


// ---------------------- events -----------------------
humberger.onclick = ()=> {
    createSection();
};

//      ------------  functions   -----------    

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
          <a href="../index.html">Home</a>
        </li>
        <li>
          <a href="#memo">Services</a>
        </li>
    </ul>
    </nav>
    `;
    section.append(divForPop);
    body.appendChild(section);
    remove(section);
    // remove by items click
    const links = document.querySelectorAll('.links li');
    links.forEach((link) => {
        link.addEventListener('click',(e)=>{
            body.removeChild(section);
        })
    });
    
};

function remove(o) {
    const humberger2 = document.querySelector('.humberger2');
    humberger2.onclick = () => {
        body.removeChild(o);
    };
}

function arrayEvent(arr, section) {
    Array.from(arr).forEach((link)=> {
        link.onclick = () => {
            remove(section);
        console.log('array link');
        };
    });
}