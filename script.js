let isConfirmed = false;

function confirmAttendance() {
    if (!isConfirmed) {
        alert("¡Gracias por confirmar!");
        document.getElementById("confirmButton").classList.add("disabled");
        document.getElementById("confirmButton").disabled = true;
        isConfirmed = true;

        setTimeout(function() {
            alert("Se está reiniciando la tarjeta.");
            location.reload(); // Recarga la página para reiniciar la tarjeta
        }, 2000); // Reinicia después de 3 segundos
    }
}

function cancelAttendance() {
    alert("¡Lamentamos que no puedas asistir!");
}

function moveButton() {
    const button = document.getElementById('confirmButton');
    const randomX = Math.floor(Math.random() * 300) - 150;  // Movimiento horizontal aleatorio
    const randomY = Math.floor(Math.random() * 100) - 50;   // Movimiento vertical aleatorio
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function confirmAttendance() {
    alert('¡Gracias por confirmar tu asistencia!');
}

function cancelAttendance() {
    alert('Lo sentimos, esperamos verte en la próxima ocasión.');
}


