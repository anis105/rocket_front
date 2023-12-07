import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import TodoList from '../pages/TodoList/TodoList';

describe('TodoList', () => {
    test('renders TodoList correctly', () => {
        render(<TodoList />);

        // Add expectations based on your UI, e.g., check if the input fields are present
        expect(screen.getByPlaceholderText("What's next on your list?")).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Search tasks')).toBeInTheDocument();
        // Add more expectations based on your specific UI
    });


    test('marks a task as completed correctly', () => {
        render(<TodoList />);

        // Simulate marking a task as completed
        fireEvent.click(screen.getByText('Math Homework (Priority: High)'));

        // Add expectations based on how your component should behave when a task is marked as completed
        // For example, check if the completed class is applied to the task
        expect(screen.getByText('Math Homework (Priority: High)').classList.contains('completed')).toBe(true);
    });

    // Add more tests as needed
});
