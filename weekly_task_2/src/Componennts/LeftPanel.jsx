import React from 'react'
import logo from './img/user_logo.png'
import { TbHome } from "react-icons/tb";

function LeftPanel() {
    return (
        <div className='leftPanel'>
            <div className='user'>
                <img src={logo} alt="" className='user_logo' />
                <span style={{ lineHeight: '0px', marginTop: '-10px', marginLeft: '5px' }}><h5>User Name</h5><br />user@gmail.com</span>
            </div>
            <div class="input-group my-2">
                <input type="text" class="form-control" aria-label="Text input with radio button" />
                <div class="input-group-text">
                    <i class="bi bi-search"></i>
                </div>
            </div>
            <table class="table table-hover">
                <tbody >
                    <tr>
                         <td><i class="bi bi-brightness-high"></i> &nbsp;&nbsp; My Day</td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-star"></i> &nbsp;&nbsp;Important</td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-journal-bookmark"></i> &nbsp;&nbsp;Planned</td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-person"></i> &nbsp;&nbsp;Assign to me</td>
                    </tr>
                    <tr>
                        <td><i class="bi bi-house"></i> &nbsp;&nbsp;Tasks</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LeftPanel
