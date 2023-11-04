import React from "react";

class ClsHeaderComponent extends React.Component {
    // constructor() {
    //     // initialize all member variables...
    // }

    render() {
        return (
            <div className="row1">
                <div className="row1section1">
                    <div>
                        <img src="images/Dinesh.jpg" alt="" className="logo" />
                    </div>
                    <div>
                        <h3>Dinesh</h3>
                        <div>Technical Trainer</div>
                        <div>Web Developer</div>
                        <div>Email Me</div>
                    </div>
                </div>
                <div className="row1section2">
                    <div>Projects</div>
                    <div>About Me</div>
                    <div>Contact Me</div>
                </div>
            </div>
        )
    }
}

export default ClsHeaderComponent;