function wrap(msg)
{
	var formatted = 
					'<div class="bubble">'+
					'<h3>'+msg['name']+'</h3>'+
					'<p>'+msg['address']+'</p>'+
					'<p><strong>Email: </strong><a href="mailto:'+msg['email']+'">'+msg['email']+'</a>;&nbsp;'+
					'<strong>Site: </strong><a target="_blank" href="http://'+msg['site']+'">'+msg['site']+'</a></p>'+
					'<p>'+msg['tel']+'</p>'+
					'</div>';
	return formatted;
}