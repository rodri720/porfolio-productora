import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import ReactDOM from "react-dom"

initScrollReveal(targetElements, defaultProps);
initTiltEffect();