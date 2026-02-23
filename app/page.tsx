import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <h1 className="page-heading">Minions Smoke Test</h1>
      <p className="page-description">A minimal Next.js site used to test the minions autonomous pipeline.</p>
      <ul>
        <li>Scout analyzes this repo for findings</li>
        <li>Strategist proposes improvements</li>
        <li>Builder implements them in PRs</li>
        <li>Reviewer checks the code</li>
      </ul>
      <Footer />
    </main>
  )
}
