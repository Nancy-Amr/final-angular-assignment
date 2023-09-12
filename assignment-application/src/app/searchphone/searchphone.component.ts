import { Component , EventEmitter, Output} from '@angular/core';
import { Contact } from '../models/contact.module';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-searchphone',
  templateUrl: './searchphone.component.html',
  styleUrls: ['./searchphone.component.scss']
  
})



export class SearchphoneComponent {
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
  
  phones = [this.contact[0].name +"@"+ this.contact[0].phone ,this.contact[1].name +"@"+ this.contact[1].phone , this.contact[2].name +"@"+ this.contact[2].phone,this.contact[3].name +"@"+ this.contact[3].phone,this.contact[4].name +"@"+ this.contact[4].phone,this.contact[5].name +"@"+ this.contact[5].phone,this.contact[6].name +"@"+ this.contact[6].phone,this.contact[7].name +"@"+ this.contact[7].phone];
  filterPhone!: string;
  phonesFiltered = [];

  constructor(){
  }
}

@Pipe({name:'filterByPhone' })
export class filterPhones implements PipeTransform {
  transform(listOfPhones: string[], phoneToFilter: string): string[] {
    
    if(!phoneToFilter) return listOfPhones;

    return listOfPhones.filter(n => n.indexOf(phoneToFilter) >= 0);
  }
}
