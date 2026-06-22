// src/components/Header.tsx
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-lg">
      <div className="mx-auto flex h-16 items-center px-6">
        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
          ATS Resume Builder
        </h1>
      </div>
    </header>
  );
};

export default Header;
