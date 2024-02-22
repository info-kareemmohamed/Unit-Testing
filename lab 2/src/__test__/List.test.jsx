import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import List from '../components/List/List.jsx';

describe('List component', () => {
      beforeEach(()=>{
        render(<List />);
    })

    it('renders the component', () => {
        expect(screen.getByPlaceholderText('Add Item')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    it('the add new list works as expected', async () => {

        fireEvent.change(screen.getByPlaceholderText('Add Item'), { target: { value: 'add Item' } });

        fireEvent.click(screen.getByText('Add'));

        await waitFor(() => {
            expect(screen.getByText('add Item')).toBeInTheDocument();
        });
    });

    it('that when we click on remove button the item should be removed', async () => {

        const removeButton = screen.getByText('Remove', { selector: 'li:first-of-type button' });

        fireEvent.click(removeButton);

        await waitFor(() => {
            expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        });
    });
});