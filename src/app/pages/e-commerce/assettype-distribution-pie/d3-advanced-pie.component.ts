import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'slab-d3-distribution-pie',
  styleUrls: ['./d3.component.scss'],
  template: `
  <nb-card size='big'>
      <nb-card-header>Asset distribution</nb-card-header>
      <nb-card-body>
        <ngx-charts-advanced-pie-chart
          [scheme]="colorScheme"
          [results]="single"
          [valueFormatting]="currencyValueFormat"
          [percentageFormatting]="percentageValueFormat"
          [animations]="false">
        </ngx-charts-advanced-pie-chart>
      </nb-card-body>
  </nb-card>
  `,
})
export class AssetDistributionD3PieComponent implements OnInit, OnDestroy {

  private alive = true;

  single = [
    {
      name: 'Stock',
      value: 20473,
    },
    {
      name: 'ETF',
      value: 3516,
    },
    {
      name: 'Crypto',
      value: 9231,
    },
  ];
  colorScheme: any;
  themeSubscription: any;

  breakpoint: NbMediaBreakpoint = { name: '', width: 0 };
  breakpoints: any;

  constructor(private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {
    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnInit() {
    this.themeService.onMediaQueryChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  currencyValueFormat(c): any { return String(c) + '€'; }

  percentageValueFormat(c): number { return Math.round(c); }

  ngOnDestroy(): void {
    this.alive = false;
    this.themeSubscription.unsubscribe();
  }
}
