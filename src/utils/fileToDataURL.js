const fileToDataURL = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = () => {
      reject(new Error('Failed to convert file to Data URL'));
    };

    reader.readAsDataURL(file);
  });
};

export default fileToDataURL;
