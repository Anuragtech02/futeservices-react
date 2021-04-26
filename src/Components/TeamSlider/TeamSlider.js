import React, { useState, useRef, useContext } from "react";
import Slider from "react-slick";
import styles from "./TeamSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamData } from "../../Static/AboutData";
import { motion } from "framer-motion";
import classNames from "classnames";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { WebpContextProvider } from "../../App";

const TeamSlider = () => {
  const [showAction, setShowAction] = useState(true);

  const settings = {
    fade: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    accessibility: true,
    // lazyload: true,
    slidesToShow: 1,
    swipeToSlide: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    ease: "ease-in",
    beforeChange: (current, next) => setShowAction(false),
    afterChange: (current, next) => setShowAction(true),
  };

  const slider = useRef(null);

  const gotoPrev = () => {
    slider.current.slickPrev();
  };

  const gotoNext = () => {
    slider.current.slickNext();
  };

  return (
    <div className={styles.container}>
      <IconButton onClick={() => gotoPrev()} className={styles.arrowLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      <Slider ref={slider} {...settings} className={styles.slider}>
        {teamData.map((item, i) => (
          <Content key={i} item={item} showAction={showAction} />
        ))}
      </Slider>
      <IconButton onClick={() => gotoNext()} className={styles.arrowRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default TeamSlider;

const Content = ({ item, showAction }) => {
  const [more, setMore] = useState(false);

  const { isWebpSupported } = useContext(WebpContextProvider);

  return (
    <div className={classNames(styles.flexRow, styles.about)}>
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: showAction ? 0 : -30, opacity: showAction ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: [0.49, 1.13, 0.48, 0.74],
        }}
        className={styles.title}
      >
        <h1>{item.name}</h1>
        <p>{item.position}</p>
      </motion.div>
      <motion.div className={styles.distortion}>
        <img src={isWebpSupported ? item.image : item.fallbackImg} alt="fute" />
      </motion.div>
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: showAction ? 0 : 30, opacity: showAction ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: [0.49, 1.13, 0.48, 0.74],
        }}
        className={classNames(styles.otherName)}
      >
        <p>
          {item?.desc?.slice(0, 100)}
          {".... "}
          <span onClick={() => setMore(!more)}>
            Read {more ? "Less" : "More"}
          </span>{" "}
        </p>
      </motion.div>
      <ReadMore
        open={more}
        setOpen={setMore}
        title={item.name}
        content={item.desc}
      />
    </div>
  );
};

const ReadMore = ({ open, setOpen, title, content }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      className={styles.readMoreDialog}
    >
      <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>

      <DialogContent dividers={false}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          className={styles.styledCloseBtn}
          onClick={handleClose}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
