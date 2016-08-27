import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChartCommonClass } from './core/chart-common.class';
import { ChartConfiguration, Brush, Axis, AxisData, Widget } from './core/chart-config.type';

@Component({
  moduleId: module.id,
  selector: 'jm-chart',
  template: `
      <div class="{{ uuid }}" style="height: 100%;">
      </div>
  `
})
export class ChartComponent extends ChartCommonClass {
  constructor() {
    super();
  }

  uuid: string;

  @Input() configBrush: Array<Brush>;
  @Input() configAxisX: Axis;
  @Input() configAxisY: Axis;
  @Input() configData: Array<Object>;
  @Input() configWidget: Array<Widget>;

  ngOnInit() {
    console.log('ngOnInit', 'ChartComponent');

    // TODO: uuid 생성 
    let uuidNumber: string = (Math.random() * 10000).toString().replace('.', '').substr(0, 10);
    this.uuid = 'chart' + uuidNumber;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit', 'ChartComponent');

    let configuration: ChartConfiguration = {};
    configuration.brush = this.configBrush;
    configuration.axisX = this.configAxisX;
    configuration.axisY = this.configAxisY;
    configuration.data = this.configData;
    configuration.widget = this.configWidget;

    this.init('.'+this.uuid, configuration);
    this.draw(configuration);
  }
}