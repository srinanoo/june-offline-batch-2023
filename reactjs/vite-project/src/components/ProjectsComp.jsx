import colors from '../color.module.css'
import layout from '../layout.module.css'

function ProjectsComponent() {
    return (
        <div className="row2">
            <h3 className={colors.redColor}>Projects / Experiences</h3>
            <div className="row2section1">
                <div className={layout.redColor}>
                    <img src="images/background.jpeg" alt="" /><br />
                    Project 1<br />
                    Project Description goes here...
                </div>
                <div>
                    <img src="images/background.jpeg" alt="" /><br />
                    Project 2 Title<br />
                    Project Description goes here...
                </div>
                <div>
                    <img src="images/background.jpeg" alt="" /><br />
                    Project 3 Title<br />
                    Project Description goes here...
                </div>
                <div>
                    <img src="images/background.jpeg" alt="" /><br />
                    Project 1<br />
                    Project Description goes here...
                </div>
                <div>
                    <img src="images/background.jpeg" alt="" /><br />
                    Project 1<br />
                    Project Description goes here...
                </div>
                <div>
                    <img src="images/background.jpeg" alt="" /><br />
                    Project 1<br />
                    Project Description goes here...
                </div>
            </div>
        </div>
    )
}

export default ProjectsComponent;