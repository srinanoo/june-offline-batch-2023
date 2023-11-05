import React from "react";

class ClsHeaderComponent extends React.Component {
    constructor() {
        super();
        // initialize all member variables...
        this.logged = true;

        this.name = "Dinesh - Class";

        this.details = {
            "role": "",
            "designation": "Web Developer",
            "email": "srinanoo@gmail.com",
        }

        this.menu = ["Projects", "About", "Contact"];

        this.output = this.menu.map((v, i) => <div key={i}>{v}</div>);
    }

    render() {
        return (
            <div className="row1">
                <div className="row1section1">
                    <div>
                        <img src="images/Dinesh.jpg" alt="" className="logo" />
                    </div>
                    <div>
                        <h3>{
                            (this.name!="") ? this.name : ""
                            }</h3>
                        <div>{this.details?.role}</div>
                        <div>{this.details?.designation}</div>
                        <div>{this.details?.email}</div>
                    </div>
                </div>
                {
                    this.logged &&
                        <>
                            <div className="row1section2">
                                {
                                    this.menu.map((v, i) => {
                                        return (
                                            <div key={i}>{v}</div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                {this.output}
                            </div>
                        </>
                }
                
            </div>
        )
    }
}

export default ClsHeaderComponent;