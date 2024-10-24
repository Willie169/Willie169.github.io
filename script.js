function scrollToTop() {
  document.getElementById('top').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const tocList = document.getElementById('toc-list');
  const headers = document.querySelectorAll('h2, h3');

  headers.forEach((header, index) => {
    const id = `hd${index}`;
    header.id = id;

    const listItem = document.createElement('li');
    listItem.classList.add(header.tagName.toLowerCase());
    listItem.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
    tocList.appendChild(listItem);
  });
});
