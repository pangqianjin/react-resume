import React, { Component } from 'react'
import MyTitleBar from '../MyTitleBar'
import MyRow from '../MyRow'


export default class MyModule extends Component {
    render() {
        const {title, color, rows} = this.props
        return (
            <div className='my-module'>
                <MyTitleBar title={title} color={color} />
                {
                    rows.map((row, index)=>(<MyRow key={index} items={row} />))
                }
            </div>
        )
    }
}
