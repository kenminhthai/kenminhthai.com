import { TweenLite } from "gsap";

const transitions = {
  "/works": {
    enter: pageTransitionEnter,
    "onExitTo:/": zoomTransitionExit,
    "onEnterFrom:/": pageTransitionEnter,
    "onExitTo:/works": projectTransitionExit,
    "onEnterFrom:/works": projectTransitionEnter
  }
};
function pageEnter(el) {
  TweenLite.set(el, { display: "block" });
}

function switchTransitionEnter(el) {
  const body = el.querySelector("data-body");
}

export default transitions;
