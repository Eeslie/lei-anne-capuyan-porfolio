export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-display text-sm font-medium text-navy-950">
          © {year} Lei Anne A. Capuyan, CFMA. All rights reserved.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
          This portfolio is provided for professional reference. Financial figures and role
          descriptions reflect documented experience; confidential employer information is omitted.
          Not intended as financial or legal advice.
        </p>
      </div>
    </footer>
  )
}
