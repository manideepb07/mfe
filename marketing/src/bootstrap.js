import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({pathname:nextPathName}){
        console.log(history.location);
        const { pathName } = history.location;
        if(pathName !== nextPathName){
            history.push(nextPathName);
        }   
    }
  }
};

//If we are in development and in isolation,
//call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#marketingApp");

  if (devRoot) {
    mount(devRoot, {defaultHistory : createBrowserHistory()});
  }
}

//If we are running through container
//and we should export the mount function

export { mount };
