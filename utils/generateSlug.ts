export const generateSlug = (name: string) => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base 36
    const randomPart = Math.random().toString(36).substr(2, 5); // Take a random part

    return `${name}-${timestamp}-${randomPart}`;
}