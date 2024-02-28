const formatDate = (dateString) => {
  const formattedDate = new Date(dateString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };

  return formattedDate.toLocaleDateString("en-US", options);
};

export default formatDate;
