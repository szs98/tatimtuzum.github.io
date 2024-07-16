//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <BrowserRouter basename={process.env.PUBLIC_URL}>
//    <App />
//  </BrowserRouter>
//);
var data=fetch("tarifveri.json");
then=(response=>response.json);
then(veri=>{
  console.log(veri.tarif);
});
function a(){
  const msg = document.getElementById("msj");
  const ptext= document.getElementByID("yazi");
  try {
    p.innerHTML = veri.tarif.msj.value
  }
  catch {
    alert("Tarif bulunamadı")
  }
}
a()
