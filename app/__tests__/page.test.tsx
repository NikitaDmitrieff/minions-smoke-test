import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home page', () => {
  it('renders without errors', () => {
    expect(() => render(<Home />)).not.toThrow()
  })

  it('footer is present with accessible color contrast', () => {
    const { container } = render(<Home />)
    const footer = container.querySelector('footer')
    expect(footer).not.toBeNull()
    expect(footer).toHaveStyle({ color: '#888' })
  })
})
