import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  inputdata: any;
  custdata$!: Observable<Customer>;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<UserdetailComponent>,
    private service: MasterService) {


  }
  ngOnInit(): void {
    this.inputdata = this.data;

    if (this.inputdata.code > 0) {

      this.custdata$ = this.service.GetCustomerbycode(this.inputdata.code).pipe(map(res => res.data))
    }
  }

  closepopup(){
    this.ref.close('closing from detail');
  }


}
