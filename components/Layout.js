import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient xl:px-0 px-[30px]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
