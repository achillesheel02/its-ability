import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_timeline from '@amcharts/amcharts4/plugins/timeline';
import * as am4plugins_venn from '@amcharts/amcharts4/plugins/venn';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {fadeInAnimation} from '../../_animations/fade-in';

/* Chart code */
// Themes begin

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [fadeInAnimation],
  // tslint:disable-next-line:no-host-metadata-property
  host: { '[@fadeInAnimation]': '' }
})

export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  private chart: am4charts.XYChart;
  private vennChart: am4charts.XYChart;


  constructor(private zone: NgZone) { }
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;


  ngOnInit(): void {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            enable: true,
            nb_sides: 5
          }
        },
      },
    };

  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4plugins_timeline.SpiralChart);
// chart.curveContainer.padding(20,20,20,20);
      chart.levelCount = 2;
      chart.yAxisRadius = am4core.percent(25);
      chart.yAxisInnerRadius = am4core.percent(-25);
      chart.startAngle = -90;

      const colorSet = new am4core.ColorSet();

      chart.data = [ {
        category: 'Module #1',
        start: '2020-03-10',
        end: '2020-03-13',
        color: colorSet.getIndex(0),
        task: 'Gathering requirements'
      }, {
        category: 'Module #1',
        start: '2020-05-05',
        end: '2020-08-18',
        color: colorSet.getIndex(0),
        task: 'Development'
      }, {
        category: 'Module #2',
        start: '2020-03-08',
        end: '2020-03-10',
        color: colorSet.getIndex(5),
        task: 'Gathering requirements'
      }, {
        category: 'Module #2',
        start: '2020-03-12',
        end: '2020-03-15',
        color: colorSet.getIndex(5),
        task: 'Producing specifications'
      }, {
        category: 'Module #2',
        start: '2020-03-16',
        end: '2020-05-05',
        color: colorSet.getIndex(5),
        task: 'Development'
      }, {
        category: 'Module #2',
        start: '2020-05-10',
        end: '2020-05-18',
        color: colorSet.getIndex(5),
        task: 'Testing and QA'
      }, {
        category: '',
        task: ''
      }, {
        category: 'Module #3',
        start: '2020-03-03',
        end: '2020-03-19',
        color: colorSet.getIndex(9),
        task: 'Gathering requirements'
      }, {
        category: 'Module #3',
        start: '2020-05-03',
        end: '2020-05-10',
        color: colorSet.getIndex(9),
        task: 'Producing specifications'
      }, {
        category: 'Module #3',
        start: '2020-07-10',
        end: '2020-08-15',
        color: colorSet.getIndex(9),
        task: 'Development'
      }, {
        category: 'Module #3',
        start: '2020-08-20',
        end: '2020-08-30',
        color: colorSet.getIndex(9),
        task: 'Deployment'
      }, {
        category: 'Module #4',
        start: '2020-03-15',
        end: '2020-05-12',
        color: colorSet.getIndex(15),
        task: 'Gathering requirements'
      }, {
        category: 'Module #4',
        start: '2020-05-25',
        end: '2020-07-10',
        color: colorSet.getIndex(15),
        task: 'Development'
      }, {
        category: 'Module #4',
        start: '2020-07-23',
        end: '2020-08-29',
        color: colorSet.getIndex(15),
        task: 'Testing and QA'
      } ];

      chart.dateFormatter.dateFormat = 'yyyy-MM-dd';
      chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
      chart.fontSize = 11;

      // @ts-ignore
      const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'category';
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.paddingRight = 25;
      categoryAxis.renderer.minGridDistance = 10;
      categoryAxis.renderer.innerRadius = -60;
      categoryAxis.renderer.radius = 60;
      categoryAxis.renderer.labels.template.disabled = true;

      // @ts-ignore
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 70;
      dateAxis.baseInterval = { count: 1, timeUnit: 'day' };
      dateAxis.renderer.tooltipLocation = 0;
      dateAxis.startLocation = -0.5;
      dateAxis.renderer.line.strokeDasharray = '1,4';
      dateAxis.renderer.line.strokeOpacity = 0.7;
      dateAxis.tooltip.background.fillOpacity = 0.2;
      dateAxis.tooltip.background.cornerRadius = 5;
      dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
      dateAxis.tooltip.label.paddingTop = 7;

      const labelTemplate = dateAxis.renderer.labels.template;
      labelTemplate.verticalCenter = 'middle';
      labelTemplate.fillOpacity = 0.7;
      labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor('background');
      labelTemplate.background.fillOpacity = 1;
      labelTemplate.padding(7, 7, 7, 7);

      const series1 = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
      series1.columns.template.height = am4core.percent(20);
      series1.columns.template.tooltipText = '{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]';

      series1.dataFields.openDateX = 'start';
      series1.dataFields.dateX = 'end';
      series1.dataFields.categoryY = 'category';
      series1.columns.template.propertyFields.fill = 'color'; // get color from data
      series1.columns.template.propertyFields.stroke = 'color';
      series1.columns.template.strokeOpacity = 0;

      const bullet = new am4charts.CircleBullet();
      series1.bullets.push(bullet);
      bullet.circle.radius = 3;
      bullet.circle.strokeOpacity = 0;
      bullet.propertyFields.fill = 'color';
      bullet.locationX = 0;


      const bullet2 = new am4charts.CircleBullet();
      series1.bullets.push(bullet2);
      bullet2.circle.radius = 3;
      bullet2.circle.strokeOpacity = 0;
      bullet2.propertyFields.fill = 'color';
      bullet2.locationX = 1;


      const cursor = new am4plugins_timeline.CurveCursor();
      chart.cursor = cursor;
      cursor.xAxis = dateAxis;
      cursor.yAxis = categoryAxis;
      cursor.lineY.disabled = true;
      cursor.lineX.strokeDasharray = '1,4';
      cursor.lineX.strokeOpacity = 1;

      dateAxis.renderer.tooltipLocation2 = 0;
      categoryAxis.cursorTooltipEnabled = false;

      this.chart = chart;
    });
    this.zone.runOutsideAngular(() => {
      const pattern = new am4core.CirclePattern();
      pattern.radius = 20;
      pattern.height = 50;
      pattern.width = 50;
      pattern.fill = am4core.color('#ffffff');
      pattern.backgroundFill = am4core.color('#000000');
      pattern.backgroundOpacity = 1;

      const data = [{name: 'Medical Practitioners', value: 100, color: am4core.color('#FFFFFF')}, {name: 'Deaf Patients', value: 100, color: am4core.color('#000000')}, {name: 'It\'s Ability', value: 30, sets: ['Deaf Patients', 'Medical Practitioners'], color: pattern}];

      const chart = am4core.create('vennChart', am4plugins_venn.VennDiagram);
      const series = chart.series.push(new am4plugins_venn.VennSeries());

      series.dataFields.category = 'name';
      series.dataFields.value = 'value';
      series.dataFields.intersections = 'sets';
      series.data = data;
      series.slices.template.propertyFields.fill = 'color';
      series.slices.template.stroke = am4core.color('#000000');
      series.slices.template.strokeWidth = 2;
      series.slices.template.tooltipText = '';

      series.labels.template.padding(10, 14, 10, 14);
      series.labels.template.fill = am4core.color('#ffffff');

      const labelBackground = new am4core.RoundedRectangle();
      labelBackground.fillOpacity = 1;
      labelBackground.cornerRadius(8, 8, 8, 8);
      series.labels.template.background = labelBackground;

      labelBackground.fill = am4core.color('#000000');

      series.hoverSprite.stroke = am4core.color('#FFFFFF');
      series.hoverSprite.strokeDasharray = '10,10';
      series.hoverSprite.strokeWidth = 4;

      chart.legend = new am4charts.Legend();
      chart.legend.marginTop = 40;

    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }


}
