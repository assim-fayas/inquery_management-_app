import { Injectable, inject } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { environment } from '../environments/environment';
import { catchError, map, throwError } from 'rxjs';
import { EnquerySubject, Enquiry, EnquiryModel, EnquiryModelResponse, EnquiryStatuses, FIlterModel, FIlterModelResponse} from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http:HttpClient=inject(HttpClient)

api:string=environment.api


getAllEnquiries(){
  return this.http.get<Enquiry>(`${this.api}/GetAllEnquries`).pipe(
    map((res)=>{
      return res
    }),
    catchError((err)=>{
      return throwError(()=>new Error(err))
    })
  )
}

getAllEnquiriesStatus(){
  return this.http.get<EnquiryStatuses>(`${this.api}/GetAllEnquiryStatus`).pipe(
    map((res)=>{
      return res
    }),
    catchError((err)=>{
      return throwError(()=>new Error(err))
    })
  )
}

getAllEnquiriesSubject(){
  return this.http.get<EnquerySubject>(`${this.api}/GetAllEnquirySubject`).pipe(
    map((res)=>{
      return res
    }),
    catchError((err)=>{
      return throwError(()=>new Error(err))
    })
  )
}


addEnquiry(enqData:EnquiryModel){
  return this.http.post<EnquiryModelResponse>(`${this.api}/AddNewEnquiry`,enqData).pipe(
    map((res)=>{
      return res
    }),
  catchError((err)=>{
    return throwError(()=>new Error(err))
  })

)}


filterEnquiry(filterObj:FIlterModel){
return this.http.post<FIlterModelResponse>(`${this.api}/FilterEnquries`,filterObj).pipe(
  map((res)=>{
    return res
  }),
  catchError((error)=>{
    return throwError(()=>error)
  })
)
}



}
