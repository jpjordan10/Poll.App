import React from 'react'
import Question from './Question'
import Options from './Options'
import Footer from './Footer'
import SectionLayout from 'components/layout/SectionLayout'

const Form: React.FC = () => (
  <SectionLayout header={<Question />} main={<Options />} footer={<Footer />} />
)

export default Form
