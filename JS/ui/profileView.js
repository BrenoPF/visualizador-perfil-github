export function renderProfile(userData, userRepos, container) {

  const repositoriesHTML = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
        <div class="repository-card">    
            <h3>${repo.name}</h3>
            <div class="repository-stats">
                <span>⭐Stars: ${repo.stargazers_count}</span>
                <span>🍴 Forks: ${repo.forks_count}</span>
                <span>👀 Watchers: ${repo.watchers_count}</span>
                <span>💻 Language: ${repo.language || 'Não informada'}</span>
            </div>
        </div>
    </a>
    `).join('') : `<p>Nenhum repositório encontrado.</p>`;

  const extraInfo = `
    <div class="profile-extra">
        ${userData.location ? `<span>📍 ${userData.location}</span>` : ''}
        ${userData.company ? `<span>🏢 ${userData.company}</span>` : ''}
        ${userData.twitter_username ? `<span>🐦 <a href="https://twitter.com/${userData.twitter_username}" target="_blank" rel="noopener noreferrer">@${userData.twitter_username}</a></span>` : ''}
        ${userData.blog ? `<span>🔗 <a href="${userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}" target="_blank" rel="noopener noreferrer">${userData.blog}</a></span>` : ''}
    </div>
  `;

  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name || userData.login}" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name || userData.login}</h2>
        <p>${userData.bio || "Não possui bio cadastrada 😢."}</p>
        ${extraInfo}
        <a href="${userData.html_url}" target="_blank" rel="noopener noreferrer" class="external-link-btn">Acessar Perfil no GitHub</a>
      </div>
    </div>

    <div class="profile-counters">
        <div class="followers">
            <h4>👥 Seguidores</h4>
            <span>${userData.followers}</span>
        </div>
        <div class="following">
            <h4>👥 Seguindo</h4>
            <span>${userData.following}</span>
        </div>
    </div>

    <div class="profile-repositories">
        <h2>Repositórios</h2>
        <div class="repositories">
            ${repositoriesHTML}
        </div>
    </div>
  `;
}

export function renderError(message, container) {
  container.innerHTML = `
    <div class="error-message">
        <p>⚠️ ${message}</p>
    </div>
  `;
}
