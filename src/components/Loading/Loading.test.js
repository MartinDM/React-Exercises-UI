import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {

  test('Loading screen shows message if API fails', () => {

    // Arrange / Act
    const success = false;
    const { container } = render(<Loading success={success} />)
    const exerciseList = container.querySelector('exercise-list')

    // Act
    
    // Assert
    expect(screen.getByText('Gymshark Central').closest('a')).toHaveAttribute('href', 'https://central.gymshark.com/category/conditioning');
    expect(exerciseList).toBeNull();

  });

});