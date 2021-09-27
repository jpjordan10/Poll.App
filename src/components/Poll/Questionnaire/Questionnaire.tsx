import React, { useState } from 'react'
import SectionLayout from 'components/layout/SectionLayout'
import Header from '../shared/Header'
import Options from './Options'
import Footer from './Footer'
import { usePollContext } from 'context/PollContext'
import PollActions from 'store/actions/poll.actions'
import { MINIMUN_OPTIONS_COUNT } from 'consts/pollConsts'

const Questionnaire: React.FC = () => {
  const [value, setValue] = useState('')
  const {
    statePoll: { options, title }
  } = usePollContext()

  const actionDisabled = !!!value
  const actionDisplayed = options.length >= MINIMUN_OPTIONS_COUNT

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue((event.target as HTMLInputElement)?.value)
  }

  const handleSubmit = (): void => {
    PollActions.incrementCount(Number(value))
    setValue('')
  }

  return (
    <SectionLayout
      header={<Header title={title} />}
      main={
        <Options value={value} handleChange={handleChange} options={options} />
      }
      footer={
        <Footer
          handleSubmit={handleSubmit}
          actionDisabled={actionDisabled}
          actionDisplayed={actionDisplayed}
        />
      }
    />
  )
}

export default Questionnaire
