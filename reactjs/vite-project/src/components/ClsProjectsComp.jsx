import colors from '../color.module.css'
import layout from '../layout.module.css'
import React from 'react'

class ClsProjectsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row2">
                <h3 className={colors.redColor}>Projects / Experiences - {this.props.name}</h3>
                <div className="row2section1">
                    {
                        this.props.details?.map((v, i) => {
                            return (
                                <div key={i} className='temp'>
                                    <img src={v.image} alt={v.name} />
                                    <p>{v.name}</p>
                                    <div>{v.description}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ClsProjectsComponent;