const appear = (dot) => {
  dot.style.display = "block";
  dot.style.backgroundColor = "black";

  const x_pos = Math.floor(Math.random() * 581);
  const y_pos = Math.floor(Math.random() * 381);

  dot.style.top = `${y_pos}px`;
  dot.style.left = `${x_pos}px`;
};

const disappear = (dot) => {
  dot.style.display = "none";
};

export { appear, disappear };
