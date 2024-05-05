 export interface Status{
    customerName:string,
    enquirySubject:string

}
export interface Enquiry{
    message:string,
    result:boolean,
    data:Status[]
}

 interface EnqueryStatus{
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