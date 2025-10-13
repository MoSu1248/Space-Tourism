
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.link-styling');
const wrapper = document.querySelector('.content-wrapper');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);

    wrapper.className = `content-wrapper ${targetId}-bg`;

    links.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');

    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  });
});