import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
 
test("Shows correct app title", async () => {
  render(<App />);
  await waitFor(() => expect(document.title).toEqual("GS Exercises 🔥"));
 });