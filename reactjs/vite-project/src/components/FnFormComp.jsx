import { useRef, useState, useEffect } from "react";

export default function FnFormComponent() {
    let usernameRef = useRef();
    let passwordRef = useRef();

    const [username2, setUsername2] = useState("");
    const [password2, setPassword2] = useState("");

    const handleForm = () => {
        // Impure Component (because it is going to use DOM methods)
        let username = document.getElementById('txtUsername').value;
        let password = document.getElementById('paPassword').value;
        console.log("DOM Way....");
        console.log(username, password);

        // useRef way (half react and half javascript/html)
        let username1 = usernameRef.current.value;
        let password1 = passwordRef.current.value;
        console.log("useRef Way....");
        console.log(username1, password1);

        // proper pure component way
        console.log("useState Way....");
        console.log(username2, password2);
    }

    // console.log(username2, password2);

    const handleUsername = (e) => {
        // console.log(e);
        setUsername2(e.target.value)
        // console.log(e.target.getAttribute("class"));
    }

    const [catFactData, setCatFactData] = useState("Default Fact");
    const [count, setCount] = useState(0);

    // useEffect(() => { // is equal to "componentDidUpdate of class lifecycle"
    //     // console.log("useEffect...");
    //     fetch('https://catfact.ninja/fact')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // catFactData.fact = data.fact;
    //             // console.log(catFactData.fact)
    //             setCatFactData(data.fact);
    //         })
    // },[catFactData]); 
    // if there is empty array as dependency then its equal to "componentDidMount of class lifecycle"
    // if there is state variable as array as dependency then its equal to "componentDidUpdate of class lifecycle"

    const [name, setName] = useState("Initial Name");

    const handleCount = () => {
    //     // setCount(count => count+1);
    //     setName("New Name");
        let newName = "New Name";
        if(newName !== name) setName(newName);
    }

    useEffect(() => {
        let newName = "New Name";
        if(newName !== name) setName(newName);
    }, [name]);

    console.log("render...");

    return (
        <>
            <h1>Form</h1>

            Fact: {catFactData}<br />
            Count: {count}<br />
            Name: {name}<br />
            <p><button onClick={handleCount}>Update Count</button></p>
            <p><input type="text" id="txtUsername" ref={usernameRef} placeholder="Username:" className="clsInput" onChange={handleUsername} /></p>
            <p><input type="password" id="paPassword" ref={passwordRef} placeholder="Password:" onChange={(e) => setPassword2(e.target.value)} /></p>
            <p><input type="button" value="Login" onClick={handleForm} /></p>
        </>
    )
}