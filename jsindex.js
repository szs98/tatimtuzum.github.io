var data=fetch("tarifveri.json");
then=(response=>response.json());
then(veri=>{
  console.log(veri.tarif);
});
