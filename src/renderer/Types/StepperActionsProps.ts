import { MouseEvent } from 'react'

export interface StepperActionsProps {
    first?: boolean
    last?: boolean
    handleBack?: (event: MouseEvent<HTMLButtonElement>) => void
    handleNext?: (event: MouseEvent<HTMLButtonElement>) => void
}