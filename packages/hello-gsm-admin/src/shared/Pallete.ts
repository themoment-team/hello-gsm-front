type ColorToken = 'white';

type ColorTheme = {
  scheme: Record<ColorToken, string>;
};

const pallete: Readonly<ColorTheme> = {
  scheme: {
    white: "#fff",
  },
};

export default pallete;