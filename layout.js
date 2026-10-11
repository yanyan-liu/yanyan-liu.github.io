// Render navigation bar (shared by all pages)
const navList = document.getElementById('nav-list');
siteConfig.links.forEach(link => {
    const a = document.createElement('a');
    a.className = 'nav-item' + (link.highlight ? ' highlight' : '');
    a.textContent = link.text;
    a.href = link.url;
    navList.appendChild(a);
});

// Render footer year
document.getElementById('footer-text').textContent =
    `© ${new Date().getFullYear()} ${siteConfig.name}`;
