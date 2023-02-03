console.log('This clock is developed by Gaurav Sharma');
	var title = document.querySelector('[type="text"]');
	var notes = document.querySelector('[id="Notes"]');
	var btn   = document.getElementById('btn');
	var list  = document.getElementsByClassName('ul_list')[0];

document.body.onmouseenter = () => {
  	if(list.innerText == ""){
		var span = document.createElement('b');
		var textNode = document.createTextNode('NOTHING TO DO');
		span.appendChild(textNode);
		list.appendChild(span);
		span.style = 'color: green;';
		span.parentElement.style = 'text-align: center;';
  	}
}

btn.onclick = function add_list_fun(){
	if(title.value == "" || notes.value == "")
		alert('Write Some Text');
	else
	{
	list.querySelector('b').innerText = "";		
	list.insertAdjacentHTML('beforeend','<li class="li"><span>'+title.value+
	'</span><div>'+notes.value+'</div>'+
	'<button><i class="far fa-edit"></i>Edit</button>'+
	'<button><i class="fas fa-trash-alt"></i>Delete</button></li>');
	title.value = "";
	notes.value = "";
	var btns = document.querySelectorAll('li>button');
	for(var i = 0;i < btns.length; i+=2)
		btns[i].onclick = (event) => {
			notes.value = event.target.parentElement.querySelectorAll('div')[0].innerText;
			title.value = event.target.parentElement.querySelectorAll('span')[0].innerText;
			btn.style = 'display:none';
			document.getElementById("btn_Done").style = 'display:block; margin-left: auto;';
			event.target.parentElement.querySelectorAll('span')[0].innerText = '';
			event.target.parentElement.querySelectorAll('div')[0].innerText = '';
		}
	for(var i = 1;i < btns.length; i+=2)
		btns[i].onclick = (event) => {
			event.target.parentElement.remove();
		}		
	}
	for(i =0; i < document.querySelectorAll('li').length; i++)
	document.querySelectorAll('li')[i].onclick = (e) => {
		var span = e.target.parentElement.querySelector('span');
		var div  = e.target.parentElement.querySelector('div');
		
		console.log('Hello !');
	}

}

document.getElementById("btn_Done").style = 'display: none';
document.getElementById("btn_Done").onclick = () => {
	var i = 0;
	while(true)
	{
		if(document.querySelectorAll('span')[i].innerText === '')
		{
			document.querySelectorAll('span')[i].innerText = title.value;
			document.querySelectorAll('li>div')[i].innerText = notes.value;
			document.getElementById("btn_Done").style = 'display: none';				
			btn.style = 'display:block; margin-left: auto;';
			title.value = "";
			notes.value = "";
			break;
		}
		i++;
	}
}




	
	