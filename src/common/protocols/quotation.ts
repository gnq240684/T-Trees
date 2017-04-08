interface CarInfo {
    id: number;
    owner?: string;
    address?: string;
    phone?: string;
    plateNumber?: string;
    brand?: string;
    model?: string;
    mileage?: number;
    color?: string;
    insurer?: string;
    insuranceDueDate?: string;
    deskClerk?: string;
}

interface ServiceItem {

}

interface ServiceList {
    [index: number]: ServiceItem;
}

export interface QuotationProps {
    carInfo: CarInfo;
    serviceInfo: ServiceList;
}

export interface QuotationState {
    carInfo: CarInfo;
    serviceInfo: ServiceList;
}