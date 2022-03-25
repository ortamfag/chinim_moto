// In your Javascript (external .js resource or <script> tag)
$(".position-select").select2({
    dropdownParent: $(".choose-position")
  });

$(".position-select").select2({
    width: 'resolve' // need to override the changed default
});

const popular = document.querySelector('.models__popular')
const all = document.querySelector('.models__all')
const check = document.querySelector('.switch-button')

check.addEventListener('click', () => popular.classList.toggle('none'))
check.addEventListener('click', () => all.classList.toggle('grid'))
