import Header from "./Header";
import Footer from "./Footer";

function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default SiteLayout;