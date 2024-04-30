import React from 'react'

function MainVideo() {
    return (
        <div class="mainVideo">
            <div class="content">
                <div style={{marginTop : '390px'}}>
                    <p>GIFT</p>
                    <h2>Mother's Day</h2>
                </div>
            </div>
            <video controls autoplay muted loop class="background-video">
                <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/zhhklHRpCA_HD.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default MainVideo
