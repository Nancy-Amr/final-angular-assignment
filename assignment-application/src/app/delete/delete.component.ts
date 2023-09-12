import { Component } from '@angular/core';
import { Contact } from "../models/contact.module";
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
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
  deletecontact(index: number) {
    this.contact.splice(index, 1);
  }


}
