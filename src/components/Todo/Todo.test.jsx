import { test, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { type } from '@testing-library/user-event'
import Todo from "./Todo"


test('renders correctly', () => {
  render(<Todo />)
})

test('adds a new todo', async () => {
  render(<Todo />)
  const addElement = screen.getByText('Add')
  const inputElement = screen.getByLabelText('Create new todo')

  // Type a new todo into the input
  await type(inputElement, 'New Todo')

  // Click the "Add" button
  // await addElement.click()

  // Click the "Add" button
  await act(async () => {
    addElement.click()
  })

  screen.debug()
  // Check if the new todo is added
  const addedTodo = screen.getByText('New Todo')
  expect(addedTodo).toBeInTheDocument()
})
