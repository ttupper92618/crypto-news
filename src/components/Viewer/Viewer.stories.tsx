/* eslint-disable */
import Viewer from "./Viewer";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Viewer",
};

export const Default = () => <Viewer />;

Default.story = {
  name: "default",
};
