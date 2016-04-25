class CssStatsComponent {
  private api: string = 'http://localhost:8080';
  
  public constructor(private elem: JQuery) {
  }

  render() {
    this.renderForm();
  }
  
  private renderForm() {
    const inputGroup = $('<div class="input-group"></div>')
      .append('<input type="text" class="form-control" value="http://twitter.com">')
      .appendTo(this.elem);
    
    $('<span class="input-group-btn"></span>')
        .append('<button class="btn btn-default" type="button">Analyze</button>')
        .click(() => this.loadStats($('input', this.elem).val()))
        .appendTo(inputGroup);
  }
  
  private renderResults(data) {
    $('<pre></pre>').text(JSON.stringify(data)).appendTo(this.elem);  
  }

  loadStats(url: string) {
    return $.get(this.api + '/stats', { url }).then((data) => this.renderResults(data));
  }
}

new CssStatsComponent($('#css-stats')).render();
