function toggleFrame() {
    const frame = document.getElementById('hidden_frame');
    frame.classList.toggle('show');
}

function resetPage() {
    location.reload();
}

function appendName() {
    const header = document.querySelector('.profile_header');
    const nameText = 'Adrianna Wnorowska';
    if (header.innerHTML.includes(nameText)) {
        header.innerHTML = header.innerHTML.replace(nameText, '');
    } else {
        header.innerHTML += nameText;
    }
}