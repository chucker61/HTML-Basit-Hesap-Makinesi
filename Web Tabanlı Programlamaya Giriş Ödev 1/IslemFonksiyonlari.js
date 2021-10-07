function toplama()
{
        sayi1 = document.getElementById("birinciSayi").value;
        sayi2 = document.getElementById("ikinciSayi").value;
        document.getElementById("sonuc").innerHTML = sayi1 - (-sayi2);
}
function cikarma()
{
        sayi1 = document.getElementById("birinciSayi").value;
        sayi2 = document.getElementById("ikinciSayi").value;
        document.getElementById("sonuc").innerHTML = sayi1 - sayi2;
}
function carpma()
{
        sayi1 = document.getElementById("birinciSayi").value;
        sayi2 = document.getElementById("ikinciSayi").value;
        document.getElementById("sonuc").innerHTML = sayi1 * sayi2;
}
function bolme() 
{ 
        sayi1 = document.getElementById("birinciSayi").value;
        sayi2 = document.getElementById("ikinciSayi").value;
	document.getElementById("sonuc").innerHTML = sayi1 / sayi2;
}