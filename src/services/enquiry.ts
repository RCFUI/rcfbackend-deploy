import {IEnquiry, IEnquiryData} from "../interfaces/enquiry";
import {Enquiry} from "../model/enquiry";


class EnquiryService {


    async create(payload:IEnquiry): Promise<IEnquiryData>{
        return await Enquiry.create(payload)
    }
}

export default new EnquiryService();