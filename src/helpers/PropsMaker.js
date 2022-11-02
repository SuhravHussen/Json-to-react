import getStyles from "./GetStyles";

const propsMaker = (styles, className, settings, type) => {
  let props = {};

  if (styles) {
    props.style = getStyles(styles);
  }
  if (className) {
    props.className = className;
  }

  if (type === "Column") {
    props.xs = 6;
    props.md = Number(settings?.colSize?.tablet);
    props.lg = Number(settings?.colSize?.desktop);
  }
  if (type === "Img") {
    props.src = settings.general.img.src;
  }
  if (type === "Icon") {
    props.icon = settings.general.icon.type;
    props.style = getStyles(settings.general.icon.style);
  }

  return props;
};

export default propsMaker;
