import * as React from "react"
import * as ReactDOM from "react-dom"
import {Quotation} from "./pages/quotation"
import {DatePicker} from 'antd'

interface IndexProps {

}

interface IndexState {

}

class IndexPage extends React.Component<IndexProps, IndexState> {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return<Quotation carInfo={{id: -1}} serviceInfo={{}}/>
    }
}

ReactDOM.render(<DatePicker/>, document.getElementById("content"))