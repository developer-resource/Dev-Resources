import React from 'react'
import './tab.css'

import { Home, Resource, Chat, MySpace } from '../../assets/tabIcons'


const Tab = () => {

    const tabInfo = [
        {
            tabIcon: Home,
            tabLabel: 'Home'
        },
        {
            tabIcon: Chat,
            tabLabel: 'Chat'
        },
        {
            tabIcon: MySpace,
            tabLabel: 'MySpace'
        },
        {
            tabIcon: Resource,
            tabLabel: 'Resource'
        }
    ]

    return (
        <div className="container border tabContainer text-center w-100">
            <div className="row tabIcon">
                {tabInfo.map((val, index) => {
                    return (
                        <div key={index} className="col-3 tabLink p-0 d-flex flex-column">
                            
                                <img src={val.tabIcon} className='iconTab mx-auto mb-1' alt={val.tabLabel} />
                                <a className='tabTxt w-100' href="/">{val.tabLabel}</a>
                            

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Tab