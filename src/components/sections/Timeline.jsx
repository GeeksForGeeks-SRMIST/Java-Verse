import { useEffect } from "react";

export default function Timeline() {
  const events = [
    { time: "08:30 AM", title: "Event Start" },
    { time: "09:30 AM", title: "Speaker Session 1" },
    { time: "12:30 PM", title: "Lunch Break" },
    { time: "01:30 PM", title: "Fun Activity" },
    { time: "02:30 PM", title: "Speaker Session 2" },
    { time: "04:30 PM", title: "Wrap Up" },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".flow-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((i) => observer.observe(i));
  }, []);

  return (
    <section
      id="timeline"
      className="relative bg-[#f7f7f9] px-6 md:px-12 py-16 overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* HEADING */}
    <div className="text-center mb-12 relative z-10">
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black tracking-tight">
      TIMELINE
  </h2>
    {/* UNDERLINE BAR */}
  <div className="w-20 h-1 bg-black mx-auto mt-4 rounded"></div>

  <p className="text-gray-500 mt-3 text-sm sm:text-base tracking-widest">
    11th February 2026
  </p>
</div>


      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-44 bottom-8 w-[1.5px] bg-gray-300 -translate-x-1/2 z-10"></div>

      <div className="relative max-w-5xl mx-auto flex flex-col gap-8 md:gap-10 z-10">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flow-item opacity-0 translate-y-6 transition-all duration-700 flex items-center ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* CARD */}
              <div
                className={`
                  relative w-full md:w-[40%]
                  bg-white border border-gray-200
                  rounded-xl px-5 py-3
                  shadow-sm hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                  ${isLeft ? "mr-auto" : "ml-auto"}
                `}
              >
                {/* SIDE BAR */}
                <div
                  className={`absolute top-0 bottom-0 w-1 ${
                    isLeft ? "left-0" : "right-0"
                  } bg-black/70 rounded`}
                ></div>

                <p className="text-xs text-gray-500 font-semibold">
                  {event.time}
                </p>
                <h3 className="text-base md:text-lg font-bold text-black mt-1">
                  {event.title}
                </h3>
              </div>

              {/* BADGE */}
              <div className="absolute left-1/2 -translate-x-1/2 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS */}
      <style>{`
        .flow-item.show {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }

        .blob {
          position: absolute;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(0,0,0,0.05), transparent);
          border-radius: 50%;
          filter: blur(40px);
          animation: float 18s ease-in-out infinite;
        }

        .blob1 {
          top: 10%;
          left: 5%;
        }

        .blob2 {
          bottom: 15%;
          right: 8%;
          animation-duration: 22s;
        }

        .blob3 {
          top: 50%;
          left: 60%;
          animation-duration: 26s;
        }
      `}</style>
    </section>
  );
}
