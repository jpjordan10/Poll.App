import { QUESTION_MARK } from 'consts/pollConsts'

const formatQuestionTitle = (title: string): string => {
  if (title.length) {
    if (title.charAt(title.length - 1) !== QUESTION_MARK)
      return `${title}${QUESTION_MARK}`
  }
  return title
}

export default formatQuestionTitle
