import React, { Component } from 'react'
import VideoDetails from './VideoDetails'

export default class VideoItem extends Component {
    render() {
        return (
            <div>
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title='Never Gonna Give You up'></iframe>
                <h1>Rick Astley - Never Gonna Give You Up (Video)</h1>
                <p>818,686,508 views•Oct 25, 2009</p>
                <hr style={{ width: '100%'}}/>
<VideoDetails/>
            </div>
        )
    }
}
