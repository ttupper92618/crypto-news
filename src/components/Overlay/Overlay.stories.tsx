/* eslint-disable */
import Overlay from './Overlay';

export default {
  title: "Overlay",
};

export const Default = () => <Overlay loaderWidth={60} show={true} />;

Default.story = {
  name: 'default',
};
