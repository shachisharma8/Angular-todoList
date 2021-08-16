import { Component, OnInit } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Info[];
  firstName:string="";
  lastName:string="";
  phone:string="";
  address:string="";
  constructor() { }

  ngOnInit(): void{
    this.items=[
       { firstName: "Shachi",
      lastName: "Sharma",
      phone: "890809080",
      address: "112 H Shimla"},
    { firstName: "Prachi",
      lastName: "Sharma",
      phone: "12312080",
      address: "112 H Mumbai"}
    ]
    
  }

 

public addToList() {
         
        
            this.items.push(
              {
                firstName:this.firstName,
                lastName:this.lastName,
                phone:this.phone,
                address:this.address

              }
            );
            this.firstName="";
            this.lastName="";
            this.phone="";
            this.address="";
            
       }
        public deleteTask(index: number) {
        this.items.splice(index, 1);
    }

}
