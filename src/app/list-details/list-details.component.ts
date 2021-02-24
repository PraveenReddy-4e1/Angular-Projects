import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-details', 
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {
  userList=[];
  updateUser:any;
  modalRef: BsModalRef;
  modalRefDel: BsModalRef
  delUserId: any;

  constructor(private restservice : RestService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getUsersList();

  }

  getUsersList(){
    this.restservice.getUsers().subscribe((res:any)=>{
      this.userList=res;
    })
  }

  deleteUser(id:any){
  
    this.restservice.deleteUsers(id).subscribe((res:any)=>{
      this.getUsersList();
    })
  }

  confirmDelete(template,id){
    this.delUserId = id;
    this.modalRefDel = this.modalService.show(template, { class: 'modal-md modal-dialog-centered'});
  }

  

open(template,userObj){
  this.modalRef = this.modalService.show(template, { class: 'modal-md modal-dialog-centered'});
  this.updateUser =JSON.parse(JSON.stringify(userObj));
}
onEditSubmit(form){

  let newObj={
    address: form.value.address,
    email: form.value.email,
    fname: form.value.fname,
    lname: form.value.lname,
    phone: form.value.phone

  }

  this.restservice.updateUsers(newObj,this.updateUser.id).subscribe((res:any)=>{
    this.getUsersList();
    this.modalRef.hide();
    })
}

confirm(): void {
  this.modalRefDel.hide();
  this.deleteUser(this.delUserId);
}

decline(): void {
  this.modalRefDel.hide();
}
}
