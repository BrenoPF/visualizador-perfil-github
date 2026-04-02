import { fetchGithubUser, fetchGithubUserRepos } from './services/githubApi.js';
import { renderProfile, renderError } from './ui/profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function getUserProfile() {
    const userName = inputSearch.value.trim();
    if (!userName) {
        renderError('Por favor, digite um nome de usuário.', profileResults);
        return;
    }
    
    // Configura os estados de loading
    btnSearch.disabled = true;
    inputSearch.disabled = true;
    if(btnSearch.tagName === 'BUTTON') btnSearch.textContent = 'Buscando...';
    
    profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    
    try {
        const userData = await fetchGithubUser(userName);
        const userRepos = await fetchGithubUserRepos(userName, 10);
        renderProfile(userData, userRepos, profileResults);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        renderError('Usuário não encontrado. Verifique o nome e tente novamente.', profileResults);
    } finally {
        // Restaura estados do botão e input
        btnSearch.disabled = false;
        inputSearch.disabled = false;
        if(btnSearch.tagName === 'BUTTON') btnSearch.textContent = 'Buscar';
    }
}

btnSearch.addEventListener('click', getUserProfile);

inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getUserProfile();
    }
});