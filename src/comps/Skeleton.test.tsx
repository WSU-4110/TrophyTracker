import React from 'react';
import { render } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('Skeleton Component', () => {
  it('renders skeleton elements', () => {
    const { container } = render(<Skeleton />);
    const skeletonContainer = container.firstChild;
    expect(skeletonContainer).toHaveClass('flex');
    expect(skeletonContainer).toHaveClass('animate-pulse');
    expect(skeletonContainer).toHaveClass('space-x-4');

    const circle = skeletonContainer.querySelector('.rounded-full');
    expect(circle).toHaveClass('bg-gray-300');
    expect(circle).toHaveClass('h-12');
    expect(circle).toHaveClass('w-12');

    const rectangle1 = skeletonContainer.querySelector('.space-y-4 > div:nth-child(1)');
    expect(rectangle1).toHaveClass('bg-gray-300');
    expect(rectangle1).toHaveClass('h-4');
    expect(rectangle1).toHaveClass('w-3/4');
    expect(rectangle1).toHaveClass('rounded');

    const rectangle2 = skeletonContainer.querySelector('.space-y-4 > div:nth-child(2) > div:nth-child(1)');
    expect(rectangle2).toHaveClass('bg-gray-300');
    expect(rectangle2).toHaveClass('h-4');
    expect(rectangle2).toHaveClass('rounded');

    const rectangle3 = skeletonContainer.querySelector('.space-y-4 > div:nth-child(2) > div:nth-child(2)');
    expect(rectangle3).toHaveClass('bg-gray-300');
    expect(rectangle3).toHaveClass('h-4');
    expect(rectangle3).toHaveClass('w-5/6');
    expect(rectangle3).toHaveClass('rounded');
  });
});
