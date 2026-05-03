export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Testing
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          A/B Test AI Prompts<br />
          <span className="text-[#58a6ff]">with Real Metrics</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Compare prompt variations side-by-side. Track success rates, analyze costs, and get automated quality scores across OpenAI and Anthropic — all in one dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Testing — $25/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['99%', 'Uptime SLA'], ['10x', 'Faster Iteration'], ['2 mins', 'Setup Time']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt experiments',
              'OpenAI & Anthropic integrations',
              'Automated quality scoring',
              'Cost & latency analytics',
              'Team collaboration (up to 5)',
              'CSV export & API access',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which AI providers are supported?',
              a: 'Prompt Version Tester integrates with OpenAI (GPT-4o, GPT-4, GPT-3.5) and Anthropic (Claude 3.5, Claude 3). More providers are on the roadmap.',
            },
            {
              q: 'How does automated quality scoring work?',
              a: 'Each response is evaluated against configurable criteria — relevance, coherence, task completion — using a lightweight judge model. You can also define custom rubrics.',
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. You can cancel anytime from your billing portal. You keep access until the end of your billing period with no hidden fees.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Prompt Version Tester. All rights reserved.
      </footer>
    </main>
  )
}
