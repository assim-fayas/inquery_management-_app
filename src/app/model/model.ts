 export interface Status{
    customerName:string,
    enquirySubject:string

}
export interface Enquiry{
    message:string,
    result:boolean,
    data:Status[]
}

 export interface EnqueryStatus{
    enquiryStatusId:number,
    enquiryStatus:string

}

export interface EnquiryStatuses{
    message:string,
    result:boolean,
    data:EnqueryStatus[]
}

export interface subjectStatus{
    enquirySubjectId:number,
    enquirySubject:string

}
export interface EnquerySubject{
    message:string,
    result:boolean,
    data:subjectStatus[]
}

export interface EnquiryModel{
    
  enquiryId: number,
  customerName: string,
  contactNo: string,
  altContactNo: string,
  email: string,
  enquiryStatusId: number,
  enquirySubjectId: number,
  createdDate:Date,
  naration: string
}


export interface EnquiryModelResponse{
    message:string,
    result:boolean,
    data:Enquiry[]
}