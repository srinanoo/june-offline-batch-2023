import React from "react";
import { MutipleFunction1 } from "./MultipleFuncComp";

function MultipleFuncClsComponent1() {
    return (
        <>
            <h2>Multiple Function 1</h2>

            <MutipleFunction1 />
        </>
    )
}

class MultipleFuncClsComponent2 extends React.Component {
    render() {
        return (
            <h2>Class 1</h2>
        )
    }
}

export { MultipleFuncClsComponent1, MultipleFuncClsComponent2 };