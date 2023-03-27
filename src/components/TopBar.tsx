import React from 'react'
import Image from 'next/image'
import style from '@/components/top_bar/TopBar.module.css'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks'


const TopBar = () => {

  const workspaces = useAppSelector(state => state.reducer);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        backgroundColor: "#565AD7",
        width: "100vw",
        height: 150
      }}
    >
      <div>
        <Image alt='' src='' />
      </div>
    </div>
  )
}

export default TopBar