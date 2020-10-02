import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router';
import App from './App';
import Resume from './Resume';
import NotFound from './NotFound'

const root = document.createElement('div');
document.body.appendChild(root);

it('should show <App> component for "/" route.', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
    root
  );
});

it('should show <Resume> component for "/resume" route.', () => {
  render(
    <MemoryRouter initialEntries={["/resume"]}>
      <Resume />
    </MemoryRouter>,
    root
  );
});

it('should show <NotFound> component for "/*" routes.', () => {
  render(
    <MemoryRouter initialEntries={["/test", "/test2", "/fantasytracker"]}>
      <NotFound />
    </MemoryRouter>,
    root
  );
});