$(function () {
$('#btnCheck').click(function () {
if ($('#txtword').val().indexOf('how') != -1) {
$(location).attr('href','/pages/mainsite.html');
return true;
} else {
alert('key is invalid');
return false;
}
});
})
