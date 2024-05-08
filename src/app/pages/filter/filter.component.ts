import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import {  EnqueryStatus, EnquiryModel, FIlterModel, FIlterModelResponse, subjectStatus } from 'src/app/model/model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

apiService:ApiService=inject(ApiService)
enquirySub:subjectStatus[]=[]
enquiryStatus:EnqueryStatus[]=[]

ngOnInit(): void {
  this.getAllSubject()
  this.getAllStatus()
}
filterObj:FIlterModel={
  customerName: '',
  contactNo: '',
  email: '',
  enquiryStatus:null,
  enquirySubject: null,
  fromDate: null,
  toDate: null
}
@Output() filterValues=new EventEmitter<FIlterModelResponse>()
@Output() filterValuesReset=new EventEmitter<boolean>(false)


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


onSearch(){
  console.log(this.filterObj);
  this.apiService.filterEnquiry(this.filterObj).subscribe({
    next:(res)=>{

      console.log("filter result",res);
      this.filterValues.emit(res)
      
    },
    error:(err)=>{
      console.log(err);
      
    }

  })

}

onReset(){
 if( confirm("Changes not saved,Are you sure to reset??")){
  this.filterObj={
    customerName: '',
    contactNo: '',
    email: '',
    enquiryStatus:null,
    enquirySubject: null,
    fromDate: null,
    toDate: null
  }
  this.filterValuesReset.emit(true)
 }
return
  
}


}
