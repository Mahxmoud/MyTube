import React from 'react';
import profile from '../profile.png'

const VideoDetails = () => {
    return (
        <div>
            <ul className='comments'>
                <ui className='commentsec'>
                    <div>
                        <img className='userimg' src={profile} />
                    </div>
                    <div className='comment'>Wow this is the best vedio eveeeer I like it so much I watched it a thousend times already</div>
                </ui>
                <hr />
                <ui className='commentsec'>
                    <div >
                        <img className='userimg' src={profile} />
                    </div>
                    <div className='comment'>Wow this is the best vedio eveeeer I like it so much I watched it a thousend times already</div>
                </ui>
                <hr /> <ui className='commentsec '>
                    <div >
                        <img className='userimg' src={profile} />
                    </div>
                    <div className='comment'>Wow this is the best vedio eveeeer I like it so much I watched it a thousend times already</div>
                </ui>
                <hr /> <ui className='commentsec '>
                    <div >
                        <img className='userimg' src={profile} />
                    </div>
                    <div className='comment'>Wow this is the best vedio eveeeer I like it so much I watched it a thousend times already</div>
                </ui>
            </ul>
        </div>
    );
}

export default VideoDetails;