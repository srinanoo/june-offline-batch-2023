function MutipleFunction1() {
    return (
        <h2>Function 1</h2>
    )
}

function MutipleFunction2() {
    return (
        <h2>Function 2</h2>
    )
}

function MutipleFunction3() {
    return (
        <>
            <h2>Function 3</h2>

            <MutipleFunction4 name="Dinesh" />
        </>
    )
}

function MutipleFunction4(props) {
    return (
        <h2>Function 4 - {props.name}</h2>
    )
}

export { MutipleFunction1, MutipleFunction2, MutipleFunction3 };