export const handleElementOnScroll = (section: any) => {
  if (section) {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    return isVisible;
  }
};
