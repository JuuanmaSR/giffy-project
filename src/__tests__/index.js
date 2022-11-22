import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen, } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles';
import App from 'App';


test('search form render correctly', async () => {
    render(
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText('Buscar')).toBeInTheDocument()
    expect(screen.getByText('Reset')).toBeInTheDocument()
    expect(screen.getByText('Giffy')).toBeInTheDocument()
    expect(screen.getByText('Última busquedas')).toBeInTheDocument()
   

})
