import React from 'react'
import FollowerCard from '../FollowerCard/FollowerCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
  <div className="profileSide">
     <LogoSearch></LogoSearch>
     <ProfileCard></ProfileCard>
     <FollowerCard></FollowerCard>
  </div>
  )
}

export default ProfileSide