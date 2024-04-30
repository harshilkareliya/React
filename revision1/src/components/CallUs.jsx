import React from 'react'

function CallUs() {
  return (
    <div>
            <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{fontSize : '16px',marginTop : '-6px'}}>
                Call Us      
            </a> 
            <div style={{padding : '80px',width : '680px'}} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">
                        Call Us</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you
                </div>
            </div>
    </div>
  )
}

export default CallUs
