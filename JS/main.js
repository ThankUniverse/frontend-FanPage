// function quantité de figurine + prix
function getQtFigurine(){
let qtFigurine = document.getElementById('figurineInput').value;
document.getElementById('inPanier').innerHTML = qtFigurine + " Figurine(s)";
let total = qtFigurine * 7.99;
document.getElementById("total").innerHTML = "Total: " + total;
};

//function qte batte + prix
function getQtBatte(){
  let qtFigurine = document.getElementById('figurineInput').value;
  let qtBatte = document.getElementById('batteInput').value;
if (qtFigurine == 0) {
  document.getElementById('inPanier').innerHTML = qtBatte +" Batte(s)";
}
else {

  document.getElementById('inPanier').append("<\br>" + qtBatte + " Batte(s)");
}
}
