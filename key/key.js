$(function () {
$('#btnCheck').click(function () {
if ($('#txtword').val().indexOf('M3I9dZnANo') != -1) {
$(location).attr('href','/pages/mainsite.html');
return true;
} else {
alert('key is invalid');
return false;
}
});
})
