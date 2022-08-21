export const cleanedData = (data) => {
  return data.map((el) => {
    const {
      id,
      description: main_description,
      alt_description,
      urls: { small: ulr },
      user: { main_name, first_name },
    } = el;
    const userName = main_name || first_name;
    const description = main_description;
    const altForImg = alt_description || `photo by ${userName}`;

    const makeimgName = () => {
      if (!description) {
        return `no name`;
      }
      if (description.split(" ").length < 3) {
        return `${description.split(" ").join(" ")}`;
      }
      return `${description.split(" ").slice(0, 4).join(" ")}...`;
    };
    return { id, ulr, imgName: makeimgName(), altForImg, userName };
  });
};

export const loadingSetState = (prevState) => ({
  ...prevState,
  loading: true,
  error: false,
});
export const errorSetState = (prevState, error) => ({
  ...prevState,
  loading: false,
  error: true,
});
