import { View } from '@tarojs/components'
import VirtualList, { VirtualListProps } from '@tarojs/components/virtual-list'
import { ComponentProps, memo, useCallback } from 'react'

const list = Array(20).fill(0).map((_, i) => i)

export default () => {
  const fn = useCallback(() => {
    console.log('to bottom')
  }, [])

  return <View>
    <VirtualList
      width='100%'
      height='100%'
      itemCount={list.length}
      itemSize={100}
      item={Item}
      itemData={list}
      onScrollToLower={fn}
    />
  </View>
}

const Item = memo(
  (
    { data, index, id }: ComponentProps<VirtualListProps['item']>
  ) => {
    return <View id={id} style={{
      background: index % 2 === 0 ? 'red' : 'blue',
    }}
    >{data[index]}</View>
  }
)
