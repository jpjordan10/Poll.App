export interface Option {
  id: number
  value: string
  count: number
}

export interface PollState {
  title: string
  options: Option[]
}
