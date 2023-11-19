import { useState } from "react"
import { MultipleFuncClsComponent2 } from "./MultipleFuncClsComp";

// function FnStateComponent() {
//     return (
//         <>
//         </>
//     )
// }
// // export default FnStateComponent;
// // export { FnStateComponent };


// const FnStateComponent2 = () => {

// }
// // export default FnStateComponent2;
// // export { FnStateComponent2 };


// export default function FnStateComponent3() {
//     return (
//         <>
//         </>
//     )
// }


// export function FnStateComponent4() {
//     return (
//         <>
//         </>
//     )
// }


// export const FnStateComponent4 = () => {
//     return (
//         <>
//         </>
//     )
// }

export default function FnStateComponent(props) {
    // let name;
    const [name, modifyName] = useState("");
    const [count, setCount] = useState(0);
    const [usersList,setUsersList] = useState(["Name1", "Name2", "Name3"]);
    const [userObject, setUserObject] = useState({
        id: 1,
        name: "Name1"
    });

    const [logged, setLogged] = useState(false);
    
    const testFunc = () => {
        // console.log("before changing : ", name);
        // name = "New Name";
        if(name !== "New Name") modifyName("New Name");
        // setCount((count) => count+1);
        if(usersList.toString() !== "1,2,3") setUsersList([1, 2, 3]);
        // setUserObject({...userObject, name: "NewName1"});
        if(userObject.name !== "NewName2") setUserObject((prev) => ({...prev, name: "NewName2"}));
        // console.log("after changing : ", name);
    }

    console.log("render...")
    return (
        <>
            {
                logged
                    ?
                    <>
                        <MultipleFuncClsComponent2 />

                        <p>Props: {props.name}</p>
                        <p>State: {name}</p>
                        <p>Count: {count}</p>
                        <p>Users List: {usersList}</p>
                        <p>User Object: {userObject.id} - {userObject.name}</p>
                        <p><button onClick={testFunc}>Change Name</button></p>
                        <button onClick={() => setLogged(false)}>Logout</button>
                    </>
                    :
                    <p>
                        <button onClick={() => setLogged(true)}>Login</button>
                    </p>
            }
            
        </>
    )
}
