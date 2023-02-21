import { Component, OnInit } from '@angular/core';
import { Filter } from './filter-type';

@Component({
  selector: 'angelscale-app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {


  filters: Filter[] = [];

  showOptions = false;

  constructor() { }


  ngOnInit() {
    this.filters = [{
      filterName: 'Category',
      filterSub: ['Bussiness Setup', 'Research', 'Marketing Plan', 'Social Media Plan', 'Website Development', 'Content Creation'],
      visible: true
    }, {
      filterName: 'Time of Day',
      filterSub: ['Bussiness Setup', 'Research', 'Marketing Plan', 'Social Media Plan', 'Website Development', 'Content Creation'],
      visible: false
    }, {
      filterName: 'Rate',
      filterSub: ['Bussiness Setup', 'Research', 'Marketing Plan', 'Social Media Plan', 'Website Development', 'Content Creation'],
      visible: false
    }, {
      filterName: 'Rating',
      filterSub: ['Bussiness Setup', 'Research', 'Marketing Plan', 'Social Media Plan', 'Website Development', 'Content Creation'],
      visible: false
    }, {
      filterName: 'Location',
      filterSub: ['Bussiness Setup', 'Research', 'Marketing Plan', 'Social Media Plan', 'Website Development', 'Content Creation'],
      visible: false
    }]
  }


  onToggle(index:number) {
    this.filters[index].visible = !this.filters[index].visible;
    console.log(`visible = ${index}`)
  }

}
