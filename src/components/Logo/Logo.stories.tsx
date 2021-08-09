/* eslint-disable */
import Logo from "./Logo";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Logo",
};

export const Default = () => <Logo />;

Default.story = {
  name: "default",
};
