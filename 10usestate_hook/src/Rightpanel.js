import React from 'react'
import { data2 } from './AllData'

function Rightpanel() {

    

    return (
        <div className='rightPanel'>
            {
                data2 && data2.map((val) => {
                    return (
                        <div className='RpBox' key={val.id} style={{ backgroundImage: `url(${val.img})` }}>
                            <div className='RpBoxfooter'>
                                <img src={val.authorImg}></img>
                                <p>
                                    <strong>{val.authorName}</strong><br></br>
                                    {val.authortext}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Rightpanel
