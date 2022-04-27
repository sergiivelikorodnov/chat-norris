export const chuckReply = "/jokes/random";

export const backDrop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
