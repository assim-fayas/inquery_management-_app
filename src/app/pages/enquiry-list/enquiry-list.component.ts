import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry, Status } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit{
  router:Router=inject(Router)
apiservice:ApiService=inject(ApiService)
enquiries:Status[]=[]
ngOnInit(): void {
  this.getAllEnquiry()
}

getAllEnquiry(){
  this.apiservice.getAllEnquiries().subscribe({
    next:(res)=>{
    console.log(res);
     this.enquiries=res.data

    console.log(this.enquiries);
    
    },
    error:(err)=>{
    console.log(err); 
    }
  })
}






  navigaeToEnquiryList(){
    this.router.navigate(['newEnquiry'])
  }


  filteredResults(value:any){
const data=value.data
this.enquiries=data

  }

  filterValueReset(value:boolean){
    this.getAllEnquiry()
  }
}
