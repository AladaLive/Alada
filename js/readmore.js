function toggleReadMore() {
    const content = document.querySelector('.read-more-content');
    const button = document.querySelector('.read-more-button');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      button.textContent = 'Прочетете по-малко';
    } else {
      content.style.display = 'none';
      button.textContent = 'Прочетете още';
    }
}