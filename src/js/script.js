// In your Javascript (external .js resource or <script> tag)
$(".position-select").select2({
    dropdownParent: $(".choose-position")
  });

$(".position-select").select2({
    width: 'resolve' // need to override the changed default
});