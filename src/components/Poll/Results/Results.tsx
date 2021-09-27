import React from 'react'
import SectionLayout from 'components/layout/SectionLayout'
import { usePollContext } from 'context/PollContext'
import Header from '../shared/Header'
import Chart from './Chart'
import FooterSection from 'components/shared/Section/Footer'

const Results: React.FC = () => {
  const {
    statePoll: { title, options }
  } = usePollContext()

  const totalVotes = options.reduce((acc, item) => acc + item.count, 0)
  const footerText = `Total votes: ${totalVotes}`

  return (
    <SectionLayout
      header={<Header title={title} />}
      main={<Chart answers={options} totalVotes={totalVotes} />}
      footer={<FooterSection text={footerText} />}
    />
  )
}

export default Results
