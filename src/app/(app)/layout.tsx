import "../styles/ui/static-background.css";
import "../styles/ui/glass-layout.css";
import Navbar from "@/components/Navbar/Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="static-bg-layout">
      <Navbar />
      <div className="glass-container">
        {children}
      </div>
    </div>
  );
}