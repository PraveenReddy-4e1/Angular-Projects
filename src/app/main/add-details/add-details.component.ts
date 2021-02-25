import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { RestService } from '../../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.scss']
})
export class AddDetailsComponent implements OnInit {
  showLoader:boolean=false;
  addForm = new FormGroup({
    firstName : new FormControl (''),
    lastName:  new FormControl (''),
    address: new FormControl (''),
    email:  new FormControl (''),
    phone:  new FormControl (''),
  });

  constructor(private restservice : RestService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.showLoader=true;
    let newObj={
      address: this.addForm.value.address,
      email: this.addForm.value.email,
      fname: this.addForm.value.firstName,
      lname: this.addForm.value.lastName,
      phone: this.addForm.value.phone

    }

    this.restservice.addUsers(newObj).subscribe((res:any)=>{
      this.router.navigate(['/list']);
      })
  }
}
