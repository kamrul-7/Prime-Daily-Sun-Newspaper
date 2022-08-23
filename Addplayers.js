const cart = [];
// players-cart

function displayplayer() {
    const cartContainer = document.getElementById("players-cart");
    if ((cart.length > 5)) {
        alert("You can't Select more than 5 players")
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
function player(element) {
    element.disabled = true;
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const player = {
        playerName: playerName,
    }
    cart.push(player);
    displayplayer();
}

