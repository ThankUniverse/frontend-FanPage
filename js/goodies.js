// function quantité de figurine + prix
function getQtFigurine(){
let qtFigurine = document.getElementById('figurineInput').value;//prend valeur de l'input
let qtBatte = document.getElementById('batteInput').value;
let qtDentier = document.getElementById("dentierInput").value;
let qtTShirt = document.getElementById('tShirtInput').value;
document.getElementById('inPanier').innerHTML = qtFigurine + " Figurine(s)";//rajoute la quantité de figurine dans panier
let total = (qtBatte * 6.99 + qtFigurine * 7.99 + qtDentier * 3.99 + qtTShirt * 5.99).toFixed(2);
document.getElementById("total").innerHTML = "Total: " + total +"€";
};

//function qte batte + prix
function getQtBatte(){
  let qtFigurine = document.getElementById('figurineInput').value;
  let qtBatte = document.getElementById('batteInput').value;//prend valeur de l'input
  let qtDentier = document.getElementById("dentierInput").value;
  let qtTShirt = document.getElementById('tShirtInput').value;
  document.getElementById('inPanier2').innerHTML = qtBatte +" Batte(s)";
  let total = (qtBatte * 6.99 + qtFigurine * 7.99 + qtDentier * 3.99 + qtTShirt * 5.99).toFixed(2);
  document.getElementById("total").innerHTML = "Total: " + total +"€";
};
//function qte dentier + prix
function getQtDentier(){
  let qtFigurine = document.getElementById('figurineInput').value;
  let qtBatte = document.getElementById('batteInput').value;
  let qtDentier = document.getElementById("dentierInput").value;//prend valeur de l'input
  let qtTShirt = document.getElementById('tShirtInput').value;
  document.getElementById("inPanier3").innerHTML = qtDentier + " Dentier(s)";
  let total = (qtBatte * 6.99 + qtFigurine * 7.99 + qtDentier * 3.99 + qtTShirt * 5.99).toFixed(2);
  document.getElementById("total").innerHTML = "Total: " + total +"€";
};
//function qte t-shirt + prix
function getQtTShirt(){
  let qtFigurine = document.getElementById('figurineInput').value;
  let qtBatte = document.getElementById('batteInput').value;
  let qtDentier = document.getElementById("dentierInput").value;
  let qtTShirt = document.getElementById('tShirtInput').value;
  document.getElementById('inPanier4').innerHTML = qtTShirt + " T-shirt(s)";
  let total = (qtBatte * 6.99 + qtFigurine * 7.99 + qtDentier * 3.99 + qtTShirt * 5.99).toFixed(2);
  document.getElementById("total").innerHTML = "Total: " + total +"€";
};
function getPrice(){
  let qtFigurine = document.getElementById('figurineInput').value;
  let qtBatte = document.getElementById('batteInput').value;
  let qtDentier = document.getElementById("dentierInput").value;
  let qtTShirt = document.getElementById('tShirtInput').value;
  let total = (qtBatte * 6.99 + qtFigurine * 7.99 + qtDentier * 3.99 + qtTShirt * 5.99).toFixed(2);
  alert("Payer " + total + "€" );
  }
