import ThemeToggle from "./ThemeToggle";
function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 z-10">
      <h1 className="text-xl font-bold">Task Management</h1>
      <ThemeToggle />
    </header>
  );
}

export default Navbar;
