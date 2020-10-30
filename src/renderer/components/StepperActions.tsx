import React from 'react'
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import { StepperActionsProps } from '../Types/StepperActionsProps'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    }
  })
)

export const StepperActions: React.FC<StepperActionsProps> = ({
  last,
  handleBack,
  handleNext,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.actionsContainer}>
      <div>
        <Button
          disabled={!handleBack}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className={classes.button}
        >
          {last ? 'Done' : 'Next'}
        </Button>
      </div>
    </div>
  )
}
