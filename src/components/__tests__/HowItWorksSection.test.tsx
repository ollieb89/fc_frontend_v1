import { render, screen } from '@testing-library/react'
import HowItWorksSection from '../HowItWorksSection'

describe('HowItWorksSection', () => {
  it('renders the section title', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders all three steps', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('Connect Your Accounts')).toBeInTheDocument()
    expect(screen.getByText('Securely Sync Data')).toBeInTheDocument()
    expect(screen.getByText('See Consolidated Financial Overview')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorksSection />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })
})
