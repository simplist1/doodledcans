$(function () {
$('#btnCheck').click(function () {
if ($('#txtword').val().indexOf('6l3nMD5vjv0deAiRcxKGKMuLHb8hgA37') != -1) {
alert('String Contains Word');
return true;
} else {
alert('String Does not contains word');
return false;
}
});
})
