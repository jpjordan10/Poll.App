import React from 'react'
import { IconButton as MIconButton, Tooltip } from '@mui/material'
import { IconType } from 'enums/IconType'
import { ICON_BUTTON_CONFIGURATION } from 'consts/pollConsts'

interface IconButtonProps {
  disabled?: boolean
  onClick: () => void
  type: IconType
}

const IconButton: React.FC<IconButtonProps> = ({
  disabled = false,
  onClick,
  type
}: IconButtonProps) => {
  const MIcon = ICON_BUTTON_CONFIGURATION[type].icon
  const title = ICON_BUTTON_CONFIGURATION[type].title
  const color = ICON_BUTTON_CONFIGURATION[type].color

  return (
    <Tooltip title={title}>
      <MIconButton
        aria-label={`${type}-icon`}
        disabled={disabled}
        onClick={onClick}
        color={color}
      >
        <MIcon />
      </MIconButton>
    </Tooltip>
  )
}

export default IconButton
