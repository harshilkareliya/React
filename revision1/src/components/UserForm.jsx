import React from 'react'
import { FaRegUser } from "react-icons/fa6";

function UserForm() {
    return (
        <div >
            <span class="" type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" style={{ fontSize: '22px', marginTop: '-6px' }}>
                <FaRegUser />
            </span>

            <div style={{ padding: '80px', width: '680px' }} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        My Account</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    I already have an account
                </div>
            </div>
        </div>
    )
}

export default UserForm
