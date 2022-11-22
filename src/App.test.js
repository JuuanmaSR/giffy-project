import { ThemeProvider } from '@emotion/react';
import { render, screen } from '@testing-library/react';
import { theme } from 'styles';
import App from './App';

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  const title = screen.getByText(/última busquedas/i);
  expect(title).toBeInTheDocument();
});
