



function addQuantity(){
  var q = document.getElementById("quantity");
  var num = q.innerHTML;
  num++;
  document.getElementById("quantity").innerHTML = num;
  updatePrice(num);
}
function subtractQuantity(){
    var q = document.getElementById("quantity");
    var num = q.innerHTML;
    num--;
    if( num > 0){
        document.getElementById("quantity").innerHTML = num;
        updatePrice(num);
    }

}
function updatePrice(num){
    var c = document.getElementById("price");
    var p = c.innerHTML;
    p = num * 100;
    document.getElementById("price").innerHTML = p;
}