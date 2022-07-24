import React from 'react'
import './Widget.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
export default function Widget() {
  return (
    <div className='widget'>
      <div className='widget-input'>
        <SearchIcon className='widget-searchicon' />
        <input placeholder='Search Twitter' type="text" />
      </div>
      <div className='widget-widgetcontainer'>
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='Camilla_rhi'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url='https://google.com'
          options={{ text: "Check out google!!!", via: "Camilla_rhi" }}
        />
      </div>
    </div>
  )
}
