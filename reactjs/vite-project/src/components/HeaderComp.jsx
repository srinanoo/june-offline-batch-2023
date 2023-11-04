function HeaderComponent() {
    const login = true;

    const menu = ["Projects", "About Me", "Contact Me"];

    // let output = [];
    // menu.forEach((v, i) => {
    //     output.push(<div key={i}>{v}</div>)
    // });

    let output = menu.map((v, i) => <div key={i}>{v}</div>);

    const details = {
        "role": "Technical Trainer",
        "designation": "Web Developer",
        "email": "srinanoo@gmail.com",
    }

    return (
        <div className="row1">
            <div className="row1section1">
                <div>
                    <img src="images/Dinesh.jpg" alt="" className="logo" />
                </div>
                <div>
                    <h3>{(details.name) ? details.name : ""}</h3>
                    <h3>{details?.name}</h3>
                    <div>{details.role}</div>
                    <div>{details.designation}</div>
                    <div>{details.email}</div>
                </div>
            </div>
            {
                login ?
                    (
                    <>
                        <div className="row1section2">
                            {/* <div>Projects</div>
                            <div>About Me</div>
                            <div>Contact Me</div> */}
                            {
                                menu.map((v, i) => {
                                    return (
                                        <div key={i}>{v}</div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {output}
                        </div>
                    </>
                ) : (<h3>Not Logged In</h3>)
            }
            
        </div>
    )
}

export default HeaderComponent;