import { fireEvent, render, screen, } from '@testing-library/react';
import App from 'App';

test('home work as expected', async () => {
    render(<App />)
    const gifLink = await screen.findAllByRole('link')
    gifLink.forEach((gif) => expect(gif).toBeInTheDocument())
    
})



test('search form could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    fireEvent.change(input, { target: { value: 'Matrix' } })

    fireEvent.submit(input)
    const title = await screen.findByText('Matrix')

    expect(title).toBeVisible()
})
