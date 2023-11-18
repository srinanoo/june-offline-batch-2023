import React from "react";

export default class ClsStateComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "Dinesh",
            count: 0,
            usersList: [1,2,3],
            usersObject: {
                id: 1,
                name: "Dinesh"
            }
        }

        this.testFunc = this.testFunc.bind(this);
    }

    testFunc() {
        console.log("Test");
        // this.setState({name: "Modified Name"}); // not recommended
        this.setState((prev) => ({...prev, name: "New Name"}));
    }

    render() {
        return (
            <>
                <p>Name: {this.state.name}</p>
                <p>Count: {this.state.count}</p>
                <p>Users List: {this.state.usersList}</p>
                <p>Users Object: {this.state.usersObject.id} - {this.state.usersObject.name}</p>
                <p><button onClick={this.testFunc}>Change Data</button></p>
            </>
        )
    }
}