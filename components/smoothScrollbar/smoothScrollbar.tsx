'use client'

import Scrollbar from 'smooth-scrollbar'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import { useEffect, useRef } from 'react'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { useSelector } from "react-redux"
import { RootState } from '@/store/store'

type ScrollStatus = {
  // equal to `scrollbar.offset`
  offset: {
    x: number,
    y: number,
  },
  // equal to `scrollbar.limit`
  limit: {
    x: number,
    y: number,
  },
}

const overscrollOptions = {
  enable: true,
  effect: 'glow',
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: '#00f',
}
  
const options = {
    damping: 0.07,
    alwaysShowTracks: true,
    plugins: {
      overscroll: { ...overscrollOptions },
    },    
  } 

const Scroll = () => {
  const requestCallFormOpened = useSelector((state:RootState) => state.set.requestCallFormOpened)
  const requestCallFormIsUnmounting = useSelector((state:RootState) => state.set.requestCallFormIsUnmounting)
  const scrollbar = useRef<BaseScrollbar | null>(null)
  const offset = useRef<number>(0)

  /**
   * срабатывает один раз при первом скролле
   * delta - чтобы при пролистывании не оставалось слишком большого поля сверху
  */
  const skipFirstScreen = (status:ScrollStatus) => {
    const delta = 30
    if (status.offset.y > 50) {
      scrollbar.current?.removeListener(skipFirstScreen)
      scrollbar.current?.scrollTo(0, window.innerHeight - delta, 800)
    }
  }

  useEffect(() => {
    if (requestCallFormOpened) {
      offset.current = scrollbar.current?.offset.y ?? 0   
    }
  
    return () => {
      if (!requestCallFormIsUnmounting) {
        scrollbar.current?.setPosition(0, offset.current)
      }
    }
  }, [requestCallFormOpened, requestCallFormIsUnmounting])  

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin)
    const elem = document.querySelector('#scrollWrapper') as HTMLElement
    scrollbar.current = elem && Scrollbar.init(elem,  options)
    scrollbar.current.addListener(skipFirstScreen)
    return () => {
      if (Scrollbar) {
        Scrollbar.destroy(document.body)
      }
    }
  },[])

  return null;
}

export default Scroll