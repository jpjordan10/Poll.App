export enum PollActionTypes {
  UpdateTitle = 'POLL/UPDATE_TITLE',
  AddOption = 'POLL/ADD_OPTION',
  UpdateOption = 'POLL/UPDATE_OPTION',
  RemoveOption = 'POLL/REMOVE_OPTION',
  IncrementCountOption = 'POLL/INCREMENT_COUNT_OPTION',
  ResetPoll = 'POLL/RESET'
}

export interface UpdateTitleAction {
  type: PollActionTypes.UpdateTitle
  payload: {
    title: string
  }
}

export interface AddOptionAction {
  type: PollActionTypes.AddOption
  payload: {
    option: string
  }
}

export interface UpdateOptionAction {
  type: PollActionTypes.UpdateOption
  payload: {
    option: string
    id: number
  }
}

export interface RemoveOptionAction {
  type: PollActionTypes.RemoveOption
  payload: {
    id: number
  }
}

export interface IncrementCountOptionAction {
  type: PollActionTypes.IncrementCountOption
  payload: {
    id: number
  }
}

export interface ResetPoll {
  type: PollActionTypes.ResetPoll
}

export type PollActionProps =
  | UpdateTitleAction
  | AddOptionAction
  | UpdateOptionAction
  | RemoveOptionAction
  | ResetPoll
  | IncrementCountOptionAction
