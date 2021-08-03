import { View } from '@tarojs/components'
import { useState } from 'react'
import { Test } from './test'

export default () => {
  const [data] = useState({
    sub_entry: [
      { id: 1, image: 'https://picsum.photos/id/231/200/300' },
      { id: 2, image: 'https://picsum.photos/id/232/200/300' },
      { id: 3, image: 'https://picsum.photos/id/233/200/300' },
    ]
  })

  return <View>
    <Test data={data} />
  </View>
}
