import { test, expect, vi } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import FilterButton from './FilterButton'

test('FilterButton', async () => {
  const onClick = vi.fn()
  render(
    <FilterButton filter="all" allFilters={[]} onClick={onClick}>
      All
    </FilterButton>,
  )

  const button = screen.getByText('All')
  expect(button).toHaveClass('FilterBar-Filter')
  expect(button).not.toHaveClass('FilterBar-Filter-active')

  fireEvent.click(button)
  await waitFor(() => {
    expect(onClick).toHaveBeenCalledWith('all')
    // expect(button).toHaveClass('FilterBar-Filter-active')
  })
})