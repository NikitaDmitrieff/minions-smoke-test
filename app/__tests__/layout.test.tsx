import { render, screen } from '@testing-library/react'
import RootLayout, { metadata } from '../layout'

describe('RootLayout', () => {
  it('renders with valid children', () => {
    render(
      <RootLayout>
        <div data-testid="test-child">Content</div>
      </RootLayout>
    )
    expect(screen.getByTestId('test-child')).toBeInTheDocument()
  })

  it('exports correct Metadata', () => {
    expect(metadata).toMatchObject({
      title: 'Minions Smoke Test',
      description: 'Minimal Next.js app for minions pipeline testing',
    })
  })

  it('handles missing children gracefully', () => {
    expect(() => render(<RootLayout>{null}</RootLayout>)).not.toThrow()
  })
})
