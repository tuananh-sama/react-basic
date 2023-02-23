import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Tuan Anh',
        address: 'Ho Chi Minh City'
    }

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        }

        )
    }
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChangeCapture={(event) => this.handleOnchangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                <div className="second">
                    My address is: {this.state.address}
                </div>
            </>
        )
    }
}

export default MyComponent;