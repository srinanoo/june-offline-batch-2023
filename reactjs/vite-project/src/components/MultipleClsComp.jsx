import React from "react";

class MultipleClsComponent1 extends React.Component {
    render() {
        return (
            <h2>Class Component 1</h2>
        )
    }
}

class MultipleClsComponent2 extends React.Component {
    render() {
        return (
            <h2>Class Component 2</h2>
        )
    }
}

class MultipleClsComponent3 extends React.Component {
    render() {
        return (
            <>
                <h2>Class Component 3</h2>

                <MultipleClsComponent4 />
            </>
        )
    }
}

class MultipleClsComponent4 extends React.Component {
    render() {
        return (
            <h2>Class Component 4</h2>
        )
    }
}

export { MultipleClsComponent1, MultipleClsComponent2 , MultipleClsComponent3 };