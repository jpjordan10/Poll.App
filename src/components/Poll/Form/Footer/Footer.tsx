import React from 'react'
import { Button } from '@mui/material'
import { usePollContext } from 'context/PollContext'
import PollActions from 'store/actions/poll.actions'
import FooterSection from 'components/shared/Section/Footer'

const Form: React.FC = () => {
  const {
    statePoll: { options }
  } = usePollContext()

  const text = `${options.length}/10 possible answers`

  const handleReset = (): void => {
    PollActions.resetPoll()
  }

  const action = (
    <Button variant="outlined" onClick={handleReset} color="error">
      Reset
    </Button>
  )

  return <FooterSection text={text} action={action} />
}

export default Form
