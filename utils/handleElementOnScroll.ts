export const handleElementOnScroll = (section: any) => {
  if (section) {
    const rect = section.getBoundingClientRect();
    console.log(rect)
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    return isVisible;
  }
};
