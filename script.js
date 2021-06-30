var user_experto="omar@upc.com"
var contra_experto="admin"

function login_expert(newColor) {

	var user_experto_input = document.getElementById('input_user_expert').value;
	var contra_experto_input = document.getElementById('input_contra_expert').value;
    
    if(user_experto_input==user_experto && contra_experto_input==contra_experto){
    	location.href ="../main_experto.html";
    }else{
    	alert('Datos incorrectos')
    }
}


var user_user="oma@upc.com"
var contra_user="1234"

function login_user(newColor) {

	var user_user_input = document.getElementById('input_user_user').value;
	var contra_user_input = document.getElementById('input_contra_user').value;
    
    if(user_user_input==user_user && contra_user_input==contra_user){
    	location.href ="../main_experto.html";
    }else{
    	alert('Datos incorrectos')
    }
}

//------------------------



function cambiar_contra(){
	var new_password= document.getElementById('new_password').value;
	var new_password_confirm = document.getElementById('new_password_confirm').value;

	if(new_password == new_password_confirm && new_password!=''){
		alert('Se cambio la contraseña correctamente')
		contra_experto=new_password
	}else{
		alert('Contraseñas no coinciden')
	}

}

//-----------------
function publicar_receta(){
	
	var text_receta= document.getElementById('text_receta').value;

	if (text_receta!='') {
		alert('Receta publicada')
	}else{
		alert('Ingrese receta')
	}
	
}