/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
		
		var nombre;
		nombre= prompt ("por favor ingrese un nombre");
		elNombre.value=nombre;
		document.getElementById('elNombre').value=nombre;
}

