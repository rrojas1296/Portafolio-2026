import BottomNav from "@/components/BottomNav/BottomNav";
import Header from "@/components/Header/Header";

const HomePage = () => {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: "var(--bg-hero)",
      }}
    >
      <Header />
      <BottomNav />
    </div>
  );
};

export default HomePage;
