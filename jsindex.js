data={
  "icetea"={
    "şeftali","su","çay"
  }
};
function a(){
  const msg = document.getElementById("msj");
  const ptext= document.getElementById("yazi");
  try {
    ptext.innerHTML = data.msj
  }
  catch {
    alert("Tarif bulunamadı")
  }
}

