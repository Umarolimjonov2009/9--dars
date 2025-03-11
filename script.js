

 const ism=document.getElementById("ism");
 const familya=document.getElementById("familya");
 const yosh=document.getElementById("yosh");
 


 let i=prompt("Ism kiriting");
 let f=prompt("Familya kiriting");
 let y=prompt("Yosh kiriting");
 let javob=+prompt("Katta yoki Kichik harfda: \n1)Katta \n2)Kichik");

 if(javob==1){
    ism.textContent="Ism: "+ i.toUpperCase();
    familya.textContent="Familya: "+ f.toUpperCase();
    yosh.textContent="Yosh: "+ y;
 }else if(javob==2){
    ism.textContent="Ism: "+ i.toLowerCase();
    familya.textContent="Familya: "+ f.toLowerCase();
    yosh.textContent="Yosh: "+ y;
 }else{
    alert("1 yoki 2 tanlang bo'lmasa qaytadan urining!")
 }