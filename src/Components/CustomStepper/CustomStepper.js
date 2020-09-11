import React from 'react'
import { 
  Stepper,
  Step, 
  withStyles, 
  StepConnector, 
  StepLabel, 
  makeStyles
} from '@material-ui/core/'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './CustomStepper.module.css'
import classNames from 'classnames'

const lineWidth = (steps, activeStep) => (steps[(activeStep+1)%steps.length]-steps[activeStep])

const CustomConnectorStyles = makeStyles({
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        borderColor: '#fff',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#fff',
      },
    },
    line: {
      //width: (props) => props.lineWidth*50,
      left: 0,
      margin: 0,
      padding: 0,
      borderColor: '#999',
      borderTopWidth: 1,
      borderRadius: 1,
    },
  })

 function CustomConnector(props) {
   const { lineWidth, ...other } = props
   const classes = CustomConnectorStyles(props)
   return (
      <StepConnector 
        classes={{ 
          alternativeLabel: classes.alternativeLabel,
          line: classes.line,
          active: classes.active,
          completed: classes.completed
         }}

         {...other}
      />
    )
 }

 const CustomStepBase = withStyles({
   root: {
     width: (props) => props.flex,
   },
   alternativeLabel:{
     flex: 0,
   }
 })

 function CustomStep(props){
   const { flex, ...other } = props
   const classes = CustomStepBase(props)
  return(
    <Step 
      classes={{
        root: classes.root,
        alternativeLabel: classes.alternativeLabel,
      }}

      {...other}
    />
  )
 }

  const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#999',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#fff',
    },
    circle: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: '#fff',
    }
  });

  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? 
          <div className={classes.completed} > 
          </div>
          : 
          <div className={classes.circle} > 
          </div>
        }
      </div>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
  };


export const CustomStepper = ({steps, content}) => {

    const [activeStep, setActiveStep] = React.useState(0)
    const [completed, setCompleted] = React.useState({})

    const handleStep = (step) =>{
      setActiveStep(step)
       const newCompleted = {}
       for(var i=0; i<=step; i++){
         newCompleted[i] = true;
       }
       setCompleted(newCompleted);
    }

    return(
        <div className={style.container}>
            <Stepper 
                className={style.stepper} 
                alternativeLabel 
                completed={completed[activeStep]}
                activeStep={activeStep}
                connector={<CustomConnector />}
            >
                {steps.map((label, index) => {
                        const stepProps = {}
                        const buttonProps = {}
                    return(
                        <CustomStep key={index}  flex={lineWidth(steps, index)} {...stepProps}>
                            <StepLabel
                                completed={completed[index]}
                                onClick={() => handleStep(index)}
                                {...buttonProps}
                                className={style.button}
                                StepIconComponent={QontoStepIcon}
                            >
                                <span className={style.labelText}>{label}</span>
                            </StepLabel>
                        </CustomStep>
                    )
                })}
            </Stepper>
            <div className={style.content}>
                <img src={content[activeStep].img} alt="" />
                <div className={style.text}>
                    <h1>{`"${content[activeStep].heading}"`}</h1>
                    <p>{content[activeStep].para}</p>
                    <a style={{opacity:1}} className={style.btnLight} href={content[activeStep].link}>Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default CustomStepper