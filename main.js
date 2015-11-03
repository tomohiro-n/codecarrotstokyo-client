var socket = io('safe-wave-6447.herokuapp.com:80');
$('form').submit(function(){
	socket.emit(
		'request',
		{
			name: $('#user-name').val(),
			year: '2015',
			month: '11',
			day: "04",
			starSign: $("#star-sign option:selected").text()
		}
	);
	return false;
});
socket.on('result', function(data){
	$('#messages').append($('<li>').text(
		data.name + "さんの" +
		data.year + "年" + data.month + "月" + data.day + "日の運勢は「" +
		data.result.content + "」でした"));
});