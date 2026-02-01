import { useState, useEffect } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Who can attend this event?",
      a: "Any student interested in Java, full-stack development, or coding in general is welcome.",
    },
    {
      q: "Do I need prior programming experience?",
      a: "No prior experience is mandatory. Basic programming knowledge is helpful but not required.",
    },
    {
      q: "Will certificates be provided?",
      a: "Yes, participation certificates will be given to all attendees.",
    },
    {
      q: "What should I bring to the event?",
      a: "Bring your laptop, charger, and notebook if you prefer taking notes.",
    },
    {
      q: "Will there be hands-on sessions?",
      a: "Yes, the event includes practical coding sessions and activities.",
    },
    {
      q: "How long is the event duration?",
      a: "The event runs for a full day with sessions, breaks, and activities.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Scroll reveal
  useEffect(() => {
    const items = document.querySelectorAll(".faq-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => obs.observe(el));
  }, []);

  return (
    <section
      id="faq"
      className="relative bg-[#f7f7f9] px-4 sm:px-6 md:px-12 py-16 md:py-20 overflow-hidden"
    >
      {/* ===== HEADING ===== */}
      <div className="text-center mb-14">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black tracking-tight">
          FAQs
        </h2>

        <div className="w-20 h-[3px] bg-black mx-auto mt-4"></div>

        <p className="text-gray-500 mt-4 text-sm sm:text-base tracking-widest">
          FREQUENTLY ASKED QUESTIONS
        </p>
      </div>

      {/* ===== FAQ LIST ===== */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="faq-item opacity-0 translate-y-6 transition-all duration-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md"
          >
            {/* QUESTION */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="font-semibold text-black text-base sm:text-lg">
                {item.q}
              </span>

              <span
                className={`text-xl font-bold text-gray-500 transition-transform duration-300 ${
                  openIndex === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`
                overflow-hidden transition-all duration-500 px-5
                ${
                  openIndex === i
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <p className="text-gray-600 text-sm sm:text-base">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== CSS ANIMATIONS ===== */}
      <style>{`
        .faq-item.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
