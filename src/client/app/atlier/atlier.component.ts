import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../vdk';
import { GridOptionService } from '../../vdk';

import { ChartComponent } from '../../vdk/charts/chart.component';
import { ChartConfiguration, OrientType, BrushType, AxisType } from '../../vdk/charts/core/chart-config.type';
import { NgGrid, NgGridItem } from 'angular2-grid';

@Component({
  moduleId: module.id,
  selector: 'atlier',
  templateUrl: 'atlier.component.html',
  styles: [`
    .navbar {
      text-align : center;
    }

    .grid {
      position: relative;
    }

    .grid-item {
        position: absolute;
        border: 1px solid black;
    }

    .grid-item.moving {
        z-index: z-index + 1;
    }

    .placeholder {
        position: absolute;
    }
    
  `],
  directives: [ChartComponent, NgGrid, NgGridItem]
})
export class AtlierComponent implements OnInit {
  components: any;
  dropdown:any;
  gridOptions: any;

  constructor(private formsService: FormsService, private gridOptionService: GridOptionService) { }

  chartConfigs: Array<ChartConfiguration> = [];

  ngOnInit() {
    this.gridOptions = this.gridOptionService.getGridOption();
    this.components = this.formsService.getComponents();
    jui.ready([ "ui.dropdown" ], (dropdown: any) => {
    this.dropdown = dropdown("#componentList", {
        event: {
            change: (data: any) => {
            alert(data.value + ", " + data.text);
          }
        }
      });
    });

    let chartConfig:ChartConfiguration = {};
    chartConfig.brush = [{
      type: BrushType.Scatter,
      target: ["sales", "profit"]
    }];
    chartConfig.axisX = {
      type: AxisType.Range,
      domain: [-40, 60],
      step: 10,
      line: true
    };
    chartConfig.axisY = {
      type: AxisType.Block,
      domain: "quarter",
      line: true
    };
    chartConfig.data = [
      { quarter: "1Q", sales: 50, profit: 35 },
      { quarter: "2Q", sales: -20, profit: -30 },
      { quarter: "3Q", sales: 10, profit: -5 },
      { quarter: "4Q", sales: 30, profit: 25 }
    ];
    chartConfig.widget = [
      { type: "title", text: "Bar Sample" },
      { type: "tooltip", orient: OrientType.Left },
      { type: "legend" }
    ];

    this.chartConfigs.push(chartConfig);

    let chartConfig2:ChartConfiguration = {};
    chartConfig2.brush = [{
      type: BrushType.Line,
      target: ["sales", "profit"]
    }];
    chartConfig2.axisX = {
      type: AxisType.Range,
      domain: [-40, 60],
      step: 10,
      line: true
    };
    chartConfig2.axisY = {
      type: AxisType.Block,
      domain: "quarter",
      line: true
    };
    chartConfig2.data = [
      { quarter: "1Q", sales: 50, profit: 35 },
      { quarter: "2Q", sales: -20, profit: -30 },
      { quarter: "3Q", sales: 10, profit: -5 },
      { quarter: "4Q", sales: 30, profit: 25 }
    ];
    chartConfig2.widget = [
      { type: "title", text: "Bar Sample" },
      { type: "tooltip", orient: OrientType.Left },
      { type: "legend" }
    ];

    this.chartConfigs.push(chartConfig2);
   }

   show(e: any) {
     this.dropdown.move(e.clientX,e.clientY)
     this.dropdown.show();
   }
}