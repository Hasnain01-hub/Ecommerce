import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

import Layout from "./layouts";

import styles from "./styles/app.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta() {
  return {
    charset: "utf-8",
    title: "Medusa Remix StoreFront",
    viewport: "width=device-width,initial-scale=1",
  };
}

export default function App() {
const store = createStore(rootReducer, composeWithDevTools());

  return (
  <Provider store={store}>
    <Document>
      <Layout>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Layout>
    </Document>
    </Provider>
  );
}

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <div className="text-red-500">
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  );
}
