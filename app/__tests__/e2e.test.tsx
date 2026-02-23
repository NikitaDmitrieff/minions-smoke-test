import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'
import Home from '../page'

describe('Full page load and interactive rendering', () => {
  it('renders full page with layout and home content', () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    )
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Minions Smoke Test')
  })

  it('renders all pipeline stages', () => {
    render(<Home />)
    expect(screen.getByText(/Scout analyzes/i)).toBeInTheDocument()
    expect(screen.getByText(/Strategist proposes/i)).toBeInTheDocument()
    expect(screen.getByText(/Builder implements/i)).toBeInTheDocument()
    expect(screen.getByText(/Reviewer checks/i)).toBeInTheDocument()
  })
})
