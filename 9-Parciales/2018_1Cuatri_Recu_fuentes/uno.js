
function mostrar()
{

	var mascota1;
	var mascota2;
	var peso1;
	var peso2;
	var suma;

	 mascota1 = prompt ("ingrese el nombre de su mascota");
	 mascota2 = prompt ("ingrese el nombre de su otra mascota");
	 peso1 = prompt ("ingrese el peso de su mascota");
	 peso2 = prompt ("ingrese el peso de su otra mascota");



	 peso1=parseint(peso1);
	 peso2=parseint(peso2);


	 suma= peso1+peso2;

	 alert("tenes dos mascotas "+mascota1+ "y" +mascota2+", que pesan" +peso1+ "y" +peso2+ "kilos, la suma de los kilos es "+suma);




}
