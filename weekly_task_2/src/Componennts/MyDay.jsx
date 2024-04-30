import React, { useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.jpg'
import bg4 from './img/bg4.jpg'
import bg5 from './img/bg5.jpg'
import bg6 from './img/bg6.jpg'
import bg7 from './img/bg7.jpg'
import bg8 from './img/bg8.jpg'
import bg9 from './img/bg9.png'
import bg10 from './img/bg10.jpg'

function MyDay() {

    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[today.getDay()];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[today.getMonth()];

    const[themeShow, setThemeShow] = useState('none')
    function themeShowChange(){
        if(themeShow === 'none'){
            setThemeShow('block');
        }else{
            setThemeShow('none');
        }
    }
    

    const [theme, setTheme] = useState({})

    
    return (
        <div className='myDay' style={theme}>
            <div className='myDayHeader'>
                <h3>My Day</h3>
                <p>{dayName}, {monthName} {today.getDate()}</p>

                <span className='themeOption' onClick={themeShowChange}><CiMenuKebab /></span>
            </div>
            <div className='themePlate' style={{display : `${themeShow}`}} >
                <h5>Theme</h5>
                <div className='themeTable'>
                    <div className='tableRow'>
                        <div className='tableCol' style={{backgroundColor : '#10439F'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#FF76CE'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#1A4D2E'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#0C0C0C'}}></div>
                        <div className='tableCol' style={{backgroundColor : 'red'}}></div>
                    </div>
                    <div className='tableRow'>
                        <div className='tableCol' style={{backgroundColor : '#E1F7F5'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#FFCBCB'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#8DECB4'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#31363F'}}></div>
                        <div className='tableCol' style={{backgroundColor : '#DD5746'}}></div>
                    </div>
                    <div className='tableRow'>
                        <div className='tableCol' style={{backgroundImage : `url(${bg1})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg2})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg3})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg4})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg5})`}}></div>
                    </div>
                    <div className='tableRow'>
                        <div className='tableCol' style={{backgroundImage : `url(${bg6})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg7})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg8})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg9})`}}></div>
                        <div className='tableCol' style={{backgroundImage : `url(${bg10})`}}></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyDay
