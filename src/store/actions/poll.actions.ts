import {
  PollActionProps,
  PollActionTypes
} from '../action-creators/poll.actionCreator'

export class PollActions {
  private static dispatch: React.Dispatch<PollActionProps>

  public static __construct(dispatch: React.Dispatch<PollActionProps>): void {
    PollActions.dispatch = dispatch
  }

  public static onChangeTitle = (title: string): void => {
    PollActions.dispatch({
      type: PollActionTypes.UpdateTitle,
      payload: { title }
    })
  }

  public static addOption = (option: string): void => {
    PollActions.dispatch({
      type: PollActionTypes.AddOption,
      payload: { option }
    })
  }

  public static removeOption = (id: number): void => {
    PollActions.dispatch({
      type: PollActionTypes.RemoveOption,
      payload: { id }
    })
  }

  public static updateOption = (id: number, option: string): void => {
    PollActions.dispatch({
      type: PollActionTypes.UpdateOption,
      payload: { id, option }
    })
  }

  public static incrementCount = (id: number): void => {
    PollActions.dispatch({
      type: PollActionTypes.IncrementCountOption,
      payload: { id }
    })
  }

  public static resetPoll = (): void => {
    PollActions.dispatch({
      type: PollActionTypes.ResetPoll
    })
  }
}

export default PollActions
