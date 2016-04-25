class CssStatsComponent {
  private api: string = 'http://localhost:8080';
  
  public constructor(private elem: JQuery) {
  }

  init() {
    this.elem.find('.analyze').click(() => this.loadStats($('input', this.elem).val()))
  }
  
  private renderResults(data: CssStatsData) {
    const {rules, selectors} = data.stats;
    
    this.elem.find('.results').removeClass('hidden');
    this.elem.find('.rules').text(rules.total);
    this.elem.find('.selectors').text(selectors.total);
  }

  loadStats(url: string) {
    return $.get(this.api + '/stats', { url }).then((data) => this.renderResults(data));
  }
}

interface CssStatsData {
  stats: {
    rules: {
      total: number;
    };
    selectors: {
      total: number;
    };
  }
}

new CssStatsComponent($('#css-stats')).init();
