import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Headliners } from "./components/Headliners";
import { Setlist } from "./components/Setlist";
import { Commons } from "./components/Commons";
import { WatchParty } from "./components/WatchParty";
import { Sponsors } from "./components/Sponsors";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="bg-background text-foreground min-h-screen"
      style={{ fontFamily: "'Figma Sans VF', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <Headliners />
        <Setlist />
        <Commons />
        <WatchParty />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
