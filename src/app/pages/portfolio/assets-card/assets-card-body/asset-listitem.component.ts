import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { AssetList } from '../../../../@core/data/asset-list';

@Component({
  selector: 'asset-card-body',
  styleUrls: ['./asset-listitem.component.scss'],
  templateUrl: './asset-listitem.component.html',
})
export class AssetListItemComponent implements OnDestroy {

  private alive = true;

  @Input() frontCardData: AssetList;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  trackByDate(_, item) {
    return item.date;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
