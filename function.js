function btn1(){
    const totalPrice = document.getElementById('dam1');
    const totalPricePrase = parseFloat(totalPrice.innerText);

    const dam = document.getElementById('stor');
    const dam1prase = parseFloat(dam.innerText);

    // const uttam = dam1prase + totalPricePrase;
    // dam.innerText = uttam;
     dam.innerText = totalPricePrase + dam1prase;

     const phnn = document.getElementById('phn1');
     const addd = document.getElementById('add');
     const neww = document.createElement('li');
     neww.innerText = phnn.innerText;
     addd.appendChild(neww)



}
function btn2(){
    const totalPrice = document.getElementById('dam2');
    const totalPricePrase = parseFloat(totalPrice.innerText);

    const dam = document.getElementById('stor');
    const dam2prase = parseFloat(dam.innerText);

    // const uttam = dam1prase + totalPricePrase;
    // dam.innerText = uttam;
     dam.innerText = totalPricePrase + dam2prase;

     const phnn2 = document.getElementById('phn2');
     const addd2 = document.getElementById('add');
     const neww2 = document.createElement('li');
     neww2.innerText = phnn2.innerText;
     addd2.appendChild(neww2)

}
function btn3(){
    const totalPrice = document.getElementById('dam3');
    const totalPriceparse = parseFloat(totalPrice.innerText);

    const dam = document.getElementById('stor');
    const dam3parse = parseFloat(dam.innerText);

    dam.innerText = totalPriceparse + dam3parse;

     const phoon3 = document.getElementById('phn3');
     const aad3 = document.getElementById('add');
     const neew3 = document.createElement('li');
     neew3.innerText = phoon3.innerText;
     aad3.appendChild(neew3)
}