import { Component, OnInit } from '@angular/core';
import { sched1, sched2, sched3, sched4, legal } from './data';
import { dataJSON } from './datainterface';


@Component({
  selector: 'app-drug-polar-charts',
  templateUrl: './drug-polar-charts.component.html',
  styleUrls: ['./drug-polar-charts.component.scss']
})

export class DrugPolarChartsComponent implements OnInit {
  private interfacedata = dataJSON;
  private legendSelector: any;
  private polarView: any[] = [900, 700];
  private barView: any[] = [400, 400];

  private xAxisLabel = "Test Label";

  private dataselectList: Idataselect[] =[
    {
      id: 1,
      data: sched1,
      title: 'Schedule 1',
      schedule_description: 'Schedule I drugs, substances, or chemicals are defined as drugs with no currently accepted medical use and a high potential for abuse',
    },
    {
      id: 2,
      data: sched2,
      title: 'Schedule 2',
      schedule_description: 'Schedule II drugs, substances, or chemicals are defined as drugs with a high potential for abuse, with use potentially leading to severe psychological or physical dependence',
    },
    {
      id: 3,
      data: sched3,
      title: 'Schedule 3',
      schedule_description: 'Schedule III drugs, substances, or chemicals are defined as drugs with a moderate to low potential for physical and psychological dependence. Schedule III drugs abuse potential is less than Schedule I and Schedule II drugs but more than Schedule IV'
    },
    {
      id: 4,
      data: sched4,
      title: 'Schedule 4',
      schedule_description: 'Schedule IV drugs, substances, or chemicals are defined as drugs with a low potential for abuse and low risk of dependence'
    },
    {
      id: 5,
      data: legal,
      title: 'Legal',
      schedule_description: ''
    }
  ]
  
  dataselector = this.dataselectList[0];  
  constructor() { }

  ngOnInit() {
    console.log(this.dataselector)
  }
  onLegendSelect(event) {
    this.legendSelector = this.interfacedata.find(item => item.name === event);
  }
  onDataClick(item) {
    this.legendSelector = undefined;
    this.dataselector = item;
  }
}

export interface Idataselect {
  id: number;
  data:
  {
    name: string;
    series: {
      name: string;
      value: number;
    }[]
  }[]
  title: string;
  schedule_description: string;
}