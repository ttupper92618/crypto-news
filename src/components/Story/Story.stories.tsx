/* eslint-disable */
import Story from "./Story";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Story",
};

export const Default = () => <Story />;

Default.story = {
  name: "default",
};
