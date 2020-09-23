import React from 'react'
import { 
    Accordion, 
    AccordionDetails, 
    AccordionSummary,
    makeStyles, 
    Typography, 
    Collapse 
} from '@material-ui/core';    
import { FaqData } from '../../Static';
import style from './FAQ.module.css'
import { Add } from '@material-ui/icons';
import clsx from 'clsx';

export const FAQ = () => {
    return (
        <div className={style.container}>
            <section className={style.banner}>
                    <div style={{width: "100", backgroundColor: "rgba(0,0,0,0.5"}}>
                        <h1 className={style.bannerText}>FAQ</h1> 
                    </div>
            </section>
            <div className={style.faq}>
                <ControlledAccordions faqs={FaqData}  />
            </div>
        </div>
    )
}

const AccordionStyle = makeStyles({
    root: {
      '&:not(:last-child)': {
      },
      '&:before': {
      },
      '&$expanded': {
        color: '#fff',
      },
    },
    expanded: {
        color: '#fff',
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        borderBottom: '2px solid rgba(255, 255, 255, .25)',
        transition: 'all .5s ease-out'
    },
    heading: {
        "&$expanded": {
            color: '#fff',
        }
    },
    expandIcon: {
        color: 'rgba(255, 255, 255, .25)',
        transition: 'all .5s ease-out',
        "&$expanded": {
          transform: "rotate(135deg)",
          transformOrigin: 'center',
          transition: 'all .5s ease-out',
          color: 'rgba(255, 255, 255, 1)',
        }
      },
      expanded: {
        color: "#fff",
        borderColor: "#fff",
        transition: 'all .5s ease-out',

      }
  }));

const ControlledAccordions = (props) => {
    const classes = useStyles()
    const accordionClasses = AccordionStyle()
    const {faqs} = props
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const variant = {
        open : {rotate: 45},
        close : {rotate: 0},
    }

    return (
        <div className={style.accordationContainer}>
            {faqs.map((faq, index) => { 
                return(
                    <Accordion
                        classes={{
                            root: accordionClasses.root,
                            expandIcon: accordionClasses.expandIcon,
                            expanded: accordionClasses.expanded
                        }} 
                        TransitionProps={{ unmountOnExit: true }}
                        className={style.MuiAccordionRoot}
                        square={true}
                        expanded={expanded === `pannel${index}`}
                        onChange={handleChange(`pannel${index}`)}
                    >

                        <AccordionSummary 
                            classes={{
                                root: classes.root,
                                content: classes.content,
                                expandIcon: classes.expandIcon,
                                expanded: classes.expanded
                            }}  
                            expandIcon={<Add style={{fontSize: 30 }}/>}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                        >
                            <Typography 
                                style={{color : `${expanded === `pannel${index}` ? "#fff" : ""}`}} 
                                className={clsx(style.heading, classes.heading)}
                            >{faq.summary}</Typography>
                        </AccordionSummary>
                        <Collapse timeout={5} in={expanded} unmountOnExit>
                            <AccordionDetails>
                                <Typography className={style.summary}>{faq.details}</Typography>
                            </AccordionDetails>
                        </Collapse>

                    </Accordion>
            )})}
        </div>
    )

}

export default FAQ