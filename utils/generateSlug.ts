export const generateSlug = (name: any) => {
  const timestamp = Date.now().toString(36); // Convert timestamp to base 36
  const randomPart = Math.random().toString(36).substr(2, 5); // Take a random part
  const stringWithHyphens = name.replace(/\s+/g, "-");
  return `${stringWithHyphens}-${timestamp}-${randomPart}`;
};
