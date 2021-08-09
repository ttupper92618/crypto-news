/* eslint-disable */
import Overlay from "./Overlay";

export default {
  parameters: {
    controls: {
      disabled: true,
    },
  },
  title: "Overlay",
};

export const Default = () => <Overlay loaderWidth={60} show={true} />;

Default.story = {
  name: "default",
};
