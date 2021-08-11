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

export const Default = () => <Sidebar term="crypto" />;

Default.story = {
  name: "default",
};
