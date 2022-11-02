const getStyles = (styles) => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 480 && styles.mobile) {
    return styles.mobile;
  } else if (windowWidth <= 768 && styles.tablet) {
    return styles.tablet;
  } else if (windowWidth > 768 && styles.desktop) {
    return styles.desktop;
  } else {
    return {};
  }
};

export default getStyles;
