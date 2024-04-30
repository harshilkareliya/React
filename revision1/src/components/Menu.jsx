import React from 'react'
import { IoMenu } from "react-icons/io5";

function Menu() {
    return (
        <>
            <div>
                
                <span class="" type="" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" style={{ fontSize: '25px', marginTop: '-6px', cursor: 'pointer' }}>
                    <IoMenu /> <span style={{ fontSize: '16px' }}>Menu</span>
                </span>

                <div style={{ padding: '20px' }} class="offcanvas offcanvas-start" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header">
                        <button style={{ position: 'absolute', left: '22px' }} type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span style={{ marginLeft: '30px', position: 'absolute', top: '4px' }}>Close</span>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            I will not close if you click outside of me.
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Menu
