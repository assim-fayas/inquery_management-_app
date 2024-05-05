import { Component, OnInit, inject } from '@angular/core';
import { EnquerySubject, subjectStatus } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-enquiry',
  templateUrl: './new-enquiry.component.html',
  styleUrls: ['./new-enquiry.component.css']
})
export class NewEnquiryComponent implements OnInit {
ngOnInit(): void {
  this.getAllSubject()
  this.getAllStatus()
}

apiService:ApiService=inject(ApiService)
enquirySub:subjectStatus[]=[]


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
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
