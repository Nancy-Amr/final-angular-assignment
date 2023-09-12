import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from "../models/contact.module";
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent  {
  contact: Contact[] = [
    {name:'ahmed', phone:'01023436754'},
    {name:'yasser', phone:'01123436547'},
    {name:'mohammed', phone:'01554326574'},
    {name:'alaa', phone:'01298765895'},
    {name:'mai', phone:'01154378923'},
    {name:'alaa ahmed', phone:'01092875347'},
    {name:'marwa yasser', phone:'01556234785'},
    {name:'khaled ', phone:'01154387659'},
  ];
  names = [this.contact[0].name +"@"+ this.contact[0].phone ,this.contact[1].name +"@"+ this.contact[1].phone , this.contact[2].name +"@"+ this.contact[2].phone,this.contact[3].name +"@"+ this.contact[3].phone,this.contact[4].name +"@"+ this.contact[4].phone,this.contact[5].name +"@"+ this.contact[5].phone,this.contact[6].name +"@"+ this.contact[6].phone,this.contact[7].name +"@"+ this.contact[7].phone];
  filterName!: string;
  namesFiltered = [];

  constructor(){
  }
}

@Pipe({name: 'filterByName'})
export class filterNames implements PipeTransform {
  transform(listOfNames: string[], nameToFilter: string): string[] {
    
    if(!nameToFilter) return listOfNames;

    return listOfNames.filter(n => n.indexOf(nameToFilter) >= 0);
  }
}




