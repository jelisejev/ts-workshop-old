class CssStatsComponent {
  init(container: HTMLElement) {
    container.getElementsByTagName('form')[0].addEventListener('submit', () => {
      alert('z');
    });
  }
}

new CssStatsComponent().init(document.getElementById('css-stats'));