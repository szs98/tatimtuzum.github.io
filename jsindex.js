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
  var msg = Document.GetElementById("msj");
  var ptext= Document.GetElementByID("yazi");
  try {
    p.innerHTML = veri.tarif.msj.value
  }
  catch {
    alert("Tarif bulunamadı")
  }
}
