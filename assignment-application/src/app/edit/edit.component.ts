import { Component } from '@angular/core';
import { Contactedit } from "../models/contactedit.module";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  contact: Contactedit[] = [
    {name:'ahmed', phone:'01023436754',isEdit:false},
    {name:'yasser', phone:'01123436547',isEdit:false},
    {name:'mohammed', phone:'01554326574',isEdit:false},
    {name:'alaa', phone:'01298765895',isEdit:false},
    {name:'mai', phone:'01154378923',isEdit:false},
    {name:'alaa ahmed', phone:'01092875347',isEdit:false},
    {name:'marwa yasser', phone:'01556234785',isEdit:false},
    {name:'khaled ', phone:'01154387659',isEdit:false},
  ];
  ngOnInit(){
    
  }

  EditContact(item:any){
    item.isEdit=true;
  }
}
