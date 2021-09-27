import React, { createContext, PropsWithChildren, useContext } from 'react'
import { PollActionProps } from 'store/action-creators/poll.actionCreator'
import PollActions from 'store/actions/poll.actions'
import {
  initialState as initialPollState,
  pollReducer,
  ReducerDefinitions
} from 'store/reducers'
import { useImmerReducer } from 'use-immer'

export interface PollContextProviderProps {
  statePoll: ReducerDefinitions.PollState
  dispatchPoll: React.Dispatch<PollActionProps>
}

export const PollStateContext = createContext<PollContextProviderProps>(
  undefined as any
)

interface PollProviderProps {
  value?: {
    initialPollState?: ReducerDefinitions.PollState
  }
}

export const PollContextProvider: React.FC<
  PropsWithChildren<PollProviderProps>
> = ({ children, value }) => {
  const [statePoll, dispatchPoll] = useImmerReducer(
    pollReducer,
    value?.initialPollState || initialPollState
  )

  const defaultValues = {
    statePoll,
    dispatchPoll
  }

  return (
    <PollStateContext.Provider value={defaultValues}>
      {children}
    </PollStateContext.Provider>
  )
}

export const usePollContext = (): PollContextProviderProps => {
  const props = useContext(PollStateContext)
  PollActions.__construct(props.dispatchPoll)
  return props
}
