import { getUser } from './services/api.js';
import { renderLoading, renderUser, renderError, renderEmptyInput } from './ui/screen.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

async function handleSearch() {
    const userName = inputSearch.value.trim();

    if (!userName) {
        renderEmptyInput();
        return;
    }

    renderLoading();
    
    try {
        const userData = await getUser(userName);
        renderUser(userData);
    } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
        renderError('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
    }
}

btnSearch.addEventListener('click', handleSearch);

inputSearch.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});