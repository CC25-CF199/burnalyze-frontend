const generateRandomFilename = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `captured-image-${timestamp}-${random}.jpg`;
};

export default generateRandomFilename;
