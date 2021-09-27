import { IconType } from 'enums/IconType'
import {
  AddCircleOutline as AddIcon,
  DeleteForeverOutlined as RemoveIcon,
  CheckCircleOutlineRounded as AcceptIcon,
  CancelOutlined as CancelIcon
} from '@mui/icons-material'

type ColorButton = 'default' | 'primary' | 'error' | 'success'

export const MAX_OPTIONS_LIMIT = 10
export const INPUT_MAX_LENGTH = 80
export const MINIMUN_OPTIONS_COUNT = 2

export const QUESTION_MARK = '?'

export const CHART_CONFIGURATION = {
  DATA_SET: {
    label: 'Chart Label',
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  },
  OPTIONS: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
}

export const ICON_BUTTON_CONFIGURATION = {
  [IconType.Add]: {
    icon: AddIcon,
    title: 'Add question',
    color: 'primary' as ColorButton
  },
  [IconType.Accept]: {
    icon: AcceptIcon,
    title: 'Update option',
    color: 'success' as ColorButton
  },
  [IconType.Cancel]: {
    icon: CancelIcon,
    title: 'Cancel',
    color: 'default' as ColorButton
  },
  [IconType.Remove]: {
    icon: RemoveIcon,
    title: 'Remove option',
    color: 'error' as ColorButton
  }
}
