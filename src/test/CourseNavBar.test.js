import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import { CourseNavBar } from '../components/CourseNavBar';

describe('CourseNavBar', () => {
    test('renders CourseNavBar correctly', () => {
        // Mock function to pass as setCoursePage prop
        const mockSetCoursePage = jest.fn();

        render(<CourseNavBar setCoursePage={mockSetCoursePage} />);

        // Add expectations based on your UI, e.g., check if the menu items are present
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Materials')).toBeInTheDocument();
        // Add more expectations based on your specific UI
    });

    test('handles menu item click correctly', () => {
        // Mock function to pass as setCoursePage prop
        const mockSetCoursePage = jest.fn();

        render(<CourseNavBar setCoursePage={mockSetCoursePage} />);

        // Simulate a menu item click
        fireEvent.click(screen.getByText('Assignments'));

        // Add expectations based on how your component should behave when a menu item is clicked
        // For example, check if the setCoursePage function is called with the correct argument
        expect(mockSetCoursePage).toHaveBeenCalledWith('3');
    });

    // Add more tests as needed
});
