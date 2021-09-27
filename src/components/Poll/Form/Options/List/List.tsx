import React from 'react'
import { usePollContext } from 'context/PollContext'
import Item from './Item'

const List: React.FC = () => {
  const {
    statePoll: { options }
  } = usePollContext()

  return (
    <>
      {!!options.length &&
        options.map(option => <Item key={option.id} item={option} />)}
    </>
  )
}

export default List
