import React, { ChangeEvent, useState } from 'react'
import {
  Button,
  createStyles,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { StepperActions } from '../components/StepperActions'

import backbone from '../../main/IpcService'
import { SetConfig } from '../Types/SetConfig'
import { SetBackgroundConfig } from '../Types/SetBackgroundConfig'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    browseContainer: {
      display: 'flex',
      flexFlow: 'column',
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    formControl: {
      margin: theme.spacing(3),
    },
    colorPicker: {
      padding: theme.spacing(1),
    },
  })
)

const defaultBackgroundConfig: SetBackgroundConfig = {
  mask: 'mask.jpg',
  color: '#FFFFFF',
  threshold: 20,
}

const defaultConfig: SetConfig = {
  src: '',
  dest: '',
  background: defaultBackgroundConfig,
}

export const HomePage: React.FC = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const [config, setConfig] = useState(defaultConfig)
  const [bgMode, setBgMode] = useState('auto')

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(1)
  }

  const handleSubmit = () => {
    backbone.call('processSet', config)
  }

  const selectSourceDirectory = () => {
    backbone
      .call('selectFolder')
      .then((path) => setConfig({ ...config, src: path }))
  }

  const selectExportPath = () => {
    backbone.call('selectFolder').then((path) => {
      setConfig({ ...config, dest: path })
    })
  }

  const handleBgModeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBgMode(event.target.value)
  }

  return (
    <>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step key={1}>
            <StepLabel>Select Image Source Directory</StepLabel>
            <StepContent>
              <div className={classes.browseContainer}>
                {config.src != '' ? (
                  <Typography>{config.src}</Typography>
                ) : null}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={selectSourceDirectory}
                  className={classes.button}
                >
                  Browse
                </Button>
              </div>
              <StepperActions handleNext={handleNext} />
            </StepContent>
          </Step>
          <Step key={2}>
            <StepLabel>Configure</StepLabel>
            <StepContent>
              <div className={classes.browseContainer}>
                <form>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="h3">Background</FormLabel>
                    <FormGroup>
                      <RadioGroup
                        name="background"
                        value={bgMode}
                        onChange={handleBgModeChange}
                      >
                        <FormControlLabel
                          value="auto"
                          control={<Radio />}
                          label="Auto"
                        />
                        <FormControlLabel
                          value="manual"
                          control={<Radio />}
                          label="Manual"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </FormControl>
                  {bgMode === 'manual' ? (
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormLabel component="h3">Advanced</FormLabel>
                      <FormControl>
                        <TextField
                          value={config.background.mask}
                          label="Mask Filename"
                          onChange={(event) =>
                            setConfig({
                              ...config,
                              background: {
                                ...config.background,
                                mask: event.target.value,
                              },
                            })
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <TextField
                          label="Color"
                          type="color"
                          value={config.background.color}
                          onChange={(event) =>
                            setConfig({
                              ...config,
                              background: {
                                ...config.background,
                                color: event.target.value,
                              },
                            })
                          }
                        />
                      </FormControl>
                    </FormControl>
                  ) : null}
                </form>
              </div>
              <StepperActions handleBack={handleBack} handleNext={handleNext} />
            </StepContent>
          </Step>
          <Step key={3}>
            <StepLabel>Export</StepLabel>
            <StepContent>
              <div className={classes.browseContainer}>
                {config.src != '' ? (
                  <Typography>{config.dest}</Typography>
                ) : null}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={selectExportPath}
                  className={classes.button}
                >
                  Browse
                </Button>
              </div>
              <StepperActions handleNext={handleSubmit} />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    </>
  )
}
