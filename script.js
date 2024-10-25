function scrollToTop() {
  document.getElementById('top').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const tocList = document.getElementById('toc-list');
  const headers = document.querySelectorAll('h2, h3');

  headers.forEach((header) => {
    if (!header.id) {
      header.id = header.textContent
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/[^\w\-]+/g, '')
        .replace(/^-+|-+$/g, '');
    }

    const listItem = document.createElement('li');
    listItem.classList.add(header.tagName.toLowerCase());
    listItem.innerHTML = `<a href="#${header.id}">${header.textContent}</a>`;
    tocList.appendChild(listItem);
  });
});
