const profileResults = document.querySelector('.profile-results');

export function renderLoading() {
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function renderError(message) {
    alert(message);
    profileResults.innerHTML = "";
}

export function renderUser(userData) {
    profileResults.innerHTML = `
        <div class="profile-card">
            <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar">
            <div class="profile-info">
                <h2>${userData.name || userData.login}</h2>
                <p>${userData.bio || 'Não possui bio cadastrada 😢.'}</p>
            </div>
        </div>
        <div class="profile-counters">
            <div class="followers">
                <h4>👥Seguidores</h4>
                <span>${userData.followers}</span>
            </div>
            <div class="following">
                <h4>👥Seguindo</h4>
                <span>${userData.following}</span>
            </div>
        </div>
    `;
}

export function renderEmptyInput() {
    alert('Por favor, digite um nome de usuário do GitHub.');
    profileResults.innerHTML = "";
}
