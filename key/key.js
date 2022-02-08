$(function () {
$('#btnCheck').click(function () {
if ($('#txtword').val().indexOf('how') != -1) {
alert('String Contains Word');
return true;
} else {
alert('String Does not contains word');
return false;
}
});
})
