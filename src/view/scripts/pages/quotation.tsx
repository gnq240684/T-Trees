import * as React from 'react'
import {QuotationProps, QuotationState} from '../../../common/protocols/quotation'

interface InfoLabelProps {
    label: string;
    value: string;
}

class InfoLabel extends React.Component<InfoLabelProps, any> {
    constructor() {
        super()
    }

    render() {
        return  <div>
                    <div>{this.props.label}</div>
                    <div>{this.props.value}</div>
                </div>
    }
}

export class Quotation extends React.Component<QuotationProps, QuotationState> {
    constructor() {
        super()
        this.state = {carInfo: {id: -1}, serviceInfo: {}}
    }

    render() {
        return  <div>
                    <InfoLabel label={"车辆ID:"} value={this.props.carInfo.id.toString()}/>
                </div>
    }
}