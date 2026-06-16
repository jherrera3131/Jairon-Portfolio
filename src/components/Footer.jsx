export default function Footer() {
    return (
      <footer className="border-t border-[#f4efe7]/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[#a9a092]/70 md:flex-row">
          <p>© 2026 Jairon Herrera. Built with React and Tailwind CSS.</p>
          <p className="inline-flex items-center gap-2">
            <span>{`</>`}</span>
            Designed for clarity, dashboards, and decision-support tools.
          </p>
        </div>
      </footer>
    );
  }