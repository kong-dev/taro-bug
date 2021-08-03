import { Image, Swiper, SwiperItem, View } from '@tarojs/components'
import { memo, useEffect, useMemo, useState } from 'react'

import './test.scss'


export interface P {
  data: any
}

const FC: React.FC<P> = props => {
  const { data } = props
  const length = data.sub_entry?.length || 0

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (length < currentIndex) {
      setCurrentIndex(0)
    }
  }, [length, currentIndex])

  const content = useMemo(() => {
    return data.sub_entry?.map((it, i) => {
      return <SwiperItem className={'item ' + (i == currentIndex ? 'checked' : '')} key={it.id}>
        <Image className='image' src={it.image} mode='aspectFill' />
      </SwiperItem>
    })
  }, [data.sub_entry, currentIndex])

  return <View className='wrapper'>
    <Swiper className='swiper' previousMargin='34px' nextMargin='34px'
            circular autoplay duration={300} interval={5000} current={currentIndex}
            onChange={(e) => {
              // fixme: 当 circular=true 时，轮播一圈重新回到 index=0 后，回调中的 current 值错误。应为 0，但是实际返回的是 length + 1
              console.log(`onChange, current index: ${e.detail.current}, length: ${length}`)
              setCurrentIndex(e.detail.current)
            }}
    >
      {content}
    </Swiper>
  </View>
}

export const Test = memo(FC)
