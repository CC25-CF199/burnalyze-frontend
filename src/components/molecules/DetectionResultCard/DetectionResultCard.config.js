const getClassColor = burnClass => {
  switch (burnClass?.toLowerCase()) {
    case 'tingkat 1':
      return '#4CAF50'; // Green for mild
    case 'tingkat 2':
      return '#D4B200'; // Orange for moderate
    case 'tingkat 3':
      return '#FF0606'; // Red for severe
    default:
      return 'text.secondary'; // Default color
  }
};

export { getClassColor };
