/* eslint-disable */
import Sidebar from "./Sidebar";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Sidebar",
};

export const Default = () => <Sidebar />;

Default.story = {
  name: "default",
};
