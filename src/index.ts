class CssStatsComponent {
  private api: string = 'http://localhost:8080';

  init(container: HTMLElement) {
    $('form').submit(() => {
      this.loadStats($('input').val());

      return false;
    });
  }

  loadStats(url: string) {
    return this.getStats(url).then((data) => {
      $('.data').html(Mustache.render('<pre>{{data}}</pre>', {
        data: JSON.stringify(data)
      }));
    });
  }

  private getStats(url) {
    return $.get(this.api + '/stats', { url });
  }
}

new CssStatsComponent().init(document.getElementById('css-stats'));
