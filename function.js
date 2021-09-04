document.getElementById('btn-8GB-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0';
    totalCalculate();
})
document.getElementById('btn-16GB-memory').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '180';
    totalCalculate();
})
document.getElementById('btn-256GB-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '0';
    totalCalculate();
})
document.getElementById('btn-512GB-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '100';
    totalCalculate();
})
document.getElementById('btn-1TB-storage').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    totalCalculate();
})
document.getElementById('btn-free-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '0';
    totalCalculate();
})
document.getElementById('btn-$20-delivery').addEventListener('click', function(){
    const deliveryCharge = document.getElementById('delivery-charge');
    deliveryCharge.innerText = '20';
    totalCalculate();
})

document.getElementById('btn-promo-apply').addEventListener('click', function(){
    const typed = document.getElementById('promo-field');
    const code= 'stevekaku';
    if(typed.value == code){
        const totalField = document.getElementById('total-price');
        const wholeTotal = document.getElementById('whole-total');
        totalField.innerText = parseInt(totalField.innerText)-(parseFloat(totalField.innerText)*.2)
        wholeTotal.innerText= totalField.innerText;
        typed.value="";
    }
    else
        alert('Invalid promo Code!');
        typed.value="";
})

function totalCalculate(){
    const memoryCost =(document.getElementById('memory-cost'));
    const storageCost = (document.getElementById('storage-cost'));
    const deliveryCharge =(document.getElementById('delivery-charge'));
    const totalField = document.getElementById('total-price');
    const wholeTotal = document.getElementById('whole-total');

    totalField.innerText = 1299 + parseInt(memoryCost.innerText)+ parseInt(storageCost.innerText)+ parseInt(deliveryCharge.innerText);
    wholeTotal.innerText =   totalField.innerText;
}

