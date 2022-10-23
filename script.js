window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card')

  cards.forEach(async (card) => {
    const cardTitle = card.firstElementChild;

    card.addEventListener('click', () => {
      const currentActiveCard = document.querySelector('.active');
      const currentActiveTitle = currentActiveCard?.firstElementChild;
      
      if (currentActiveCard !== card) {
        currentActiveCard?.classList.remove('active')
        currentActiveTitle?.classList.remove('show')
        card.classList.add('active')
        cardTitle.classList.add('show')
      }
    })

    const response = await fetch('https://picsum.photos/1920/1080?a')
    card.style.backgroundImage = `url(${response.url})`
    cardTitle.href = response.url
  });

})