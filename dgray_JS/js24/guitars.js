// Different ways to export functions

// in-line exports
export default function playGuitar() {
  return "Playing guitar!";
}

export const shredding = () => {
  return "Shredding some licks!";
};

export const plucking = () => {
  return "Plucking the strings...";
};

// external exports
// export default playGuitar;
// export { shredding, plucking };
