const cart = [];
// players-cart
function addToCart() {
    const cartContainer = document.getElementById("players-cart");
    if ((cart.length > 5)) {
        alert("You can't add more than 5 Players")
        return;
    }
    cartContainer.textContent = '';
    for (let i = 0; i < cart.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${cart[i].playerName}</td>
        `;
        cartContainer.appendChild(tr);
    }
    const tr = document.createElement('tr');
    cartContainer.appendChild(tr);
}

function addToCart(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const player = {
        playerName: playerName,
    }
    cart.push(player);
    console.log(player)
    displayplayer();
}


