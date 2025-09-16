let DateTime = () => {
  let time = new Date();

  return (
    <p>
      The current Date and Time of India is : {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default DateTime;
