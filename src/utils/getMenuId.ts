export const getID = (id: string) => {
  if (id === "About Me") {
    return "aboutMe";
  } else if (id === "My works") {
    return "myWorks";
  } else {
    return id.toLowerCase();
  }
};
