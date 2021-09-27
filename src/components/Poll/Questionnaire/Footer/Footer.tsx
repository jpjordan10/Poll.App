import React from 'react'
import { Button } from '@mui/material'
import FooterSection from 'components/shared/Section/Footer'

interface FooterProps {
  handleSubmit: () => void
  actionDisabled: boolean
  actionDisplayed: boolean
}

const Footer: React.FC<FooterProps> = ({
  handleSubmit,
  actionDisplayed,
  actionDisabled
}: FooterProps) => {
  const action = actionDisplayed && (
    <Button
      variant="contained"
      onClick={handleSubmit}
      color="primary"
      disabled={actionDisabled}
    >
      Vote
    </Button>
  )

  return <FooterSection action={action} />
}

export default Footer
