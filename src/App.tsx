/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="gold-text">Fly Fitness</span>
          </h1>

          {/* Nav Links */}
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#amenities" className="hover:text-yellow-400 transition">Amenities</a>
            <a href="#pricing" className="hover:text-yellow-400 transition">Pricing</a>
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            className="premium-btn bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="hero-bg min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Indian Vibe Quote */}
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm mb-5">
              India's Premium Fitness Experience
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Elevate Your <span className="gold-text">Strength.</span><br />
              Experience Elite Fitness.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              “Body banega tabhi confidence dikhega.”
              <br /><br />
              Fly Fitness brings together luxury, discipline, and performance in one elite fitness destination crafted for modern India.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#pricing"
                className="premium-btn bg-yellow-500 text-black font-bold px-8 py-4 rounded-full"
              >
                Start Your Journey
              </a>

              <a
                href="#about"
                className="border border-white/20 px-8 py-4 rounded-full hover:border-yellow-400 transition"
              >
                Explore More
              </a>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="glass-effect rounded-3xl p-8 border border-yellow-500/20">
            <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3">
              Fly Fitness Philosophy
            </p>

            <h3 className="text-3xl font-bold mb-6">
              More Than A Gym.
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              At Fly Fitness, fitness is not just a routine —
              it is a lifestyle of discipline, confidence, and excellence.
              Every corner is designed to offer premium comfort,
              elite equipment, and an atmosphere that motivates greatness.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-bold gold-text">10K+</h4>
                <p className="text-gray-400 text-sm mt-2">Training Sessions</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold gold-text">5★</h4>
                <p className="text-gray-400 text-sm mt-2">Luxury Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[5px] text-yellow-400 text-sm mb-4">
            About Fly Fitness
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Crafted For The <span className="gold-text">Modern Indian Elite</span>
          </h2>

          <p className="text-gray-300 max-w-4xl mx-auto leading-8 text-lg">
            Fly Fitness is a premium luxury gym experience built for professionals,
            entrepreneurs, athletes, and individuals who value performance,
            hygiene, and sophistication.
            <br /><br />
            From international-standard equipment to a meticulously maintained
            luxury environment, every detail is curated to help you train with
            confidence, comfort, and pride.
          </p>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section id="amenities" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-yellow-400 text-sm mb-4">
              Premium Amenities
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Luxury Meets <span className="gold-text">Performance</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="premium-card glass-effect p-8 rounded-3xl">
              <div className="text-5xl mb-5">🏋️</div>

              <h3 className="text-2xl font-bold mb-4">
                International Equipment
              </h3>

              <p className="text-gray-400 leading-7">
                Imported world-class strength and cardio equipment for elite performance training.
              </p>
            </div>

            {/* Card 2 */}
            <div className="premium-card glass-effect p-8 rounded-3xl">
              <div className="text-5xl mb-5">💪</div>

              <h3 className="text-2xl font-bold mb-4">
                Elite Personal Trainers
              </h3>

              <p className="text-gray-400 leading-7">
                Certified fitness experts delivering customized transformation programs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="premium-card glass-effect p-8 rounded-3xl">
              <div className="text-5xl mb-5">🧖</div>

              <h3 className="text-2xl font-bold mb-4">
                Luxury Steam & Spa
              </h3>

              <p className="text-gray-400 leading-7">
                Recover and recharge with premium wellness and relaxation facilities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="premium-card glass-effect p-8 rounded-3xl">
              <div className="text-5xl mb-5">🥗</div>

              <h3 className="text-2xl font-bold mb-4">
                Customized Diet Plans
              </h3>

              <p className="text-gray-400 leading-7">
                Scientifically designed nutrition guidance tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section id="pricing" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-yellow-400 text-sm mb-4">
              Membership Plans
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Choose Your <span className="gold-text">Fitness Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Monthly Plan */}
            <div className="glass-effect rounded-3xl p-10 border border-white/10 relative overflow-hidden">
              <h3 className="text-3xl font-bold mb-3">
                Monthly Membership
              </h3>

              <p className="text-gray-400 mb-8">
                Flexible premium access for your monthly fitness goals.
              </p>

              <div className="text-5xl font-black mb-8">
                ₹10,000
                <span className="text-lg text-gray-400 font-medium">/month</span>
              </div>

              <ul className="space-y-4 text-gray-300">
                <li>✔ Full Gym Access</li>
                <li>✔ Cardio & Strength Zone</li>
                <li>✔ Premium Locker Facility</li>
                <li>✔ Steam & Recovery Access</li>
                <li>✔ Trainer Guidance</li>
              </ul>

              <button className="premium-btn mt-10 w-full py-4 rounded-full bg-white text-black font-bold">
                Join Monthly
              </button>
            </div>

            {/* Annual Plan */}
            <div className="relative glass-effect rounded-3xl p-10 border-2 border-yellow-500 overflow-hidden">
              {/* Badge */}
              <div className="absolute top-6 right-[-40px] bg-yellow-500 text-black font-bold px-12 py-2 rotate-45 text-sm">
                BEST VALUE
              </div>

              <h3 className="text-3xl font-bold mb-3">
                Annual Membership
              </h3>

              <p className="text-gray-400 mb-8">
                The complete Fly Fitness luxury experience with maximum savings.
              </p>

              <div className="text-5xl font-black mb-3 gold-text">
                ₹1,00,000
              </div>

              <p className="text-green-400 mb-8 font-medium">
                Save More With Long-Term Elite Access
              </p>

              <ul className="space-y-4 text-gray-300">
                <li>✔ Unlimited Premium Access</li>
                <li>✔ Priority Personal Training</li>
                <li>✔ Customized Diet Consultation</li>
                <li>✔ Steam & Spa Premium Access</li>
                <li>✔ Exclusive Member Events</li>
                <li>✔ Dedicated Transformation Support</li>
              </ul>

              <button className="premium-btn mt-10 w-full py-4 rounded-full bg-yellow-500 text-black font-bold">
                Become An Elite Member
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            “Fitness sirf body ka nahi, <span className="gold-text">mindset ka game hai.”</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10">
            Join Fly Fitness and experience India's next-generation premium fitness culture.
          </p>

          <a
            href="#pricing"
            className="premium-btn inline-block bg-yellow-500 text-black font-bold px-10 py-5 rounded-full"
          >
            Join Fly Fitness Today
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black gold-text mb-4">
              Fly Fitness
            </h2>

            <p className="text-gray-400 leading-7">
              Premium luxury fitness experience crafted for modern India.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Contact
            </h3>

            <p className="text-gray-400 leading-8">
              Fly Fitness Club,<br />
              South Delhi, New Delhi, India<br /><br />
              +91 98765 43210<br />
              flyfitness@email.com
            </p>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Timings
            </h3>

            <p className="text-gray-400 leading-8">
              Monday - Saturday<br />
              5:00 AM – 11:00 PM<br /><br />
              Sunday<br />
              7:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 Fly Fitness. Designed for Elite Performance.
        </div>
      </footer>
    </>
  );
}
