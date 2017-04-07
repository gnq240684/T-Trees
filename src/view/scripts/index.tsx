import * as React from "react"
import * as ReactDOM from "react-dom"

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
        return  <div className="index">
                    HelloWorld
                </div>
    }
}

ReactDOM.render(<IndexPage />, document.getElementById("content"))