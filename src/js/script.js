// In your Javascript (external .js resource or <script> tag)
$(".position-select").select2({
    dropdownParent: $(".choose-position")
  });

$(".position-select").select2({
    width: 'resolve' // need to override the changed default
});

//filter

const popular = document.querySelector('.models__popular')
const all = document.querySelector('.models__all')
const check = document.querySelector('.switch-button')

check.addEventListener('click', () => popular.classList.toggle('none'))
check.addEventListener('click', () => all.classList.toggle('grid'))

//language

const arrow1 = document.querySelector('#dropdown-1')
const arrow2 = document.querySelector('#dropdown-2')
const setLanguage = document.querySelector('#setLanguage')

const headerTitle = document.querySelector('#header-title')
const headerSubtitle = document.querySelector ('#header-subtitle')
const selectLable1 = document.querySelector('#search-p-1')
const selectLable2 = document.querySelector('#search-p-2')
const placeholder1 = document.querySelector('#placeholder-1')
const placeholder2 = document.querySelector('#placeholder-2')
const switchspan = document.querySelector('.switch-button-label-span')
const switchlabeleng = document.querySelector('.switch-button-eng')
const switchlabelru = document.querySelector('.switch-button')

arrow1.addEventListener('click', () => setLanguage.innerHTML = 'English')
arrow1.addEventListener('click', () => headerTitle.innerHTML = 'Repair of Chinese motorcycles')
arrow1.addEventListener('click', () => headerSubtitle.innerHTML = 'HERE YOU TELL ABOUT <span id="header-span">MOTORCYCLE REPAIR</span>')
arrow1.addEventListener('click', () => selectLable1.innerHTML = 'Search by motorcycle brand')
arrow1.addEventListener('click', () => selectLable2.innerHTML = 'Search by motorcycle model')
arrow1.addEventListener('click', () => placeholder1.innerHTML = 'Motorcycle brand')
arrow1.addEventListener('click', () => placeholder2.innerHTML = 'Motorcycle model')
arrow1.addEventListener('click', () => switchspan.innerHTML = 'Popular')
arrow1.addEventListener('click', () => switchlabeleng.classList.toggle('real'))
arrow1.addEventListener('click', () => switchlabelru.classList.toggle('none'))


arrow2.addEventListener('click', () => setLanguage.innerHTML = 'Русский')
