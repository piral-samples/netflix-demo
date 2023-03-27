import * as React from "react";
import { render } from "react-dom";
import { createInstance, Piral } from "piral-core";
import { createMenuApi } from "piral-menu";
import { home, layout, errors } from "./layout";

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      '/': home,
    },
  },
  plugins: [createMenuApi()],
  requestPilets() {
    return fetch("https://feed.piral.cloud/api/v1/pilet/notflix-demo")
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

render(<Piral instance={instance} />, document.querySelector("#app"));
