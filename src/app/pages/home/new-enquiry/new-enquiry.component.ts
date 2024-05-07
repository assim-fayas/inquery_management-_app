import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { EnqueryStatus, EnquerySubject, Enquiry, EnquiryModel, subjectStatus } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrls: ['./new-enquiry.component.css']
})
export class NewEnquiryComponent implements OnInit {
ngOnInit(): void {
  forkJoin([this.getAllSubject(), this.getAllStatus()])
}

apiService:ApiService=inject(ApiService)
enquirySub:subjectStatus[]=[]
enquiryStatus:EnqueryStatus[]=[]
enquiryObj:EnquiryModel={
  enquiryId: 0,
  customerName: '',
  contactNo: '',
  altContactNo: '',
  email: '',
  enquiryStatusId: 0,
  enquirySubjectId: 0,
  createdDate:new Date(),
  naration: ''
}

onFromSubmit(form:NgForm){
if(form.status=='INVALID'){
  return
}
console.log("valid");
this.enquiryObj.customerName=form.controls['customerName']?.value
this.enquiryObj.contactNo=form.controls['contactNo']?.value
this.enquiryObj.email=form.controls['email']?.value
this.enquiryObj.enquiryStatusId=form.controls['enquiryStatusId']?.value
this.enquiryObj.enquirySubjectId=form.controls['enquirySubjectId']?.value
this.enquiryObj.createdDate=form.controls['createdDate']?.value
this.enquiryObj.naration=form.controls['naration']?.value
console.log(this.enquiryObj);
;

  
}










getAllSubject(){
  this.apiService.getAllEnquiriesSubject().subscribe({
    next:(res)=>{
     console.log("subject",res.data);
     this.enquirySub=res.data

    },
    error:(err)=>{
     console.log(err);

    }
  })


}

getAllStatus(){
  this.apiService.getAllEnquiriesStatus().subscribe({
    next:(res)=>{
      console.log("status",res)
      this.enquiryStatus=res.data
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
