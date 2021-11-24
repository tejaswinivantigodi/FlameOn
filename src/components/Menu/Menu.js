import MenuSummary from "./MenuSummary";
import AvailableMenu from "./AvailableMenu";

import { Fragment } from "react";

const Menu = () => {
  return (
    <Fragment>
      <MenuSummary />
      <AvailableMenu />
    </Fragment>
  );
};
export default Menu;
