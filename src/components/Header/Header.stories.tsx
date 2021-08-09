/* eslint-disable */
import Header from "./Header";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Header",
};

export const Default = () => <Header />;

Default.story = {
  name: "default",
};
