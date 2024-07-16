//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <BrowserRouter basename={process.env.PUBLIC_URL}>
//    <App />
//  </BrowserRouter>
//);
var data=fetch("tarifveri.json");
then=(response=>response.json);
then(data=>{
  console.log(veri.tarif);
});
function a(){
  const msg = document.getElementById("msj");
  const ptext= document.getElementById("yazi");
  try {
    ptext.innerHTML = data.tarif.msj.value
  }
  catch {
    alert("Tarif bulunamadı")
  }
}

