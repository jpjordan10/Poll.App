import { PollState } from './definitions'
import {
  PollActionProps,
  PollActionTypes
} from '../action-creators/poll.actionCreator'
import { ReducerDefinitions } from 'store/reducers'

export const initialState: PollState = {
  title: '',
  options: []
}

const findIndexById = (array: { id: number }[], id: number) =>
  array.findIndex(option => option.id === id)

export const pollReducer = (draft: PollState, action: PollActionProps) => {
  switch (action.type) {
    case PollActionTypes.UpdateTitle:
      draft.title = action.payload.title
      return

    case PollActionTypes.AddOption:
      const newOption = {
        id: new Date().getTime(),
        value: action.payload.option,
        count: 0
      } as ReducerDefinitions.Option
      draft.options = [...draft.options, newOption]
      return

    case PollActionTypes.UpdateOption: {
      const index = findIndexById(draft.options, action.payload.id)
      if (index !== -1) draft.options[index].value = action.payload.option
      return
    }

    case PollActionTypes.RemoveOption: {
      const index = findIndexById(draft.options, action.payload.id)
      if (index !== -1) draft.options.splice(index, 1)
      return
    }

    case PollActionTypes.IncrementCountOption: {
      const index = findIndexById(draft.options, action.payload.id)
      if (index !== -1) {
        draft.options[index].count = draft.options[index].count + 1
      }
      return
    }

    case PollActionTypes.ResetPoll:
      draft.title = ''
      draft.options = []
      return

    default:
      return
  }
}
