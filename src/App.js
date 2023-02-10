import './App.css';
import Header from "./components/Header.jsx"
import SmallHeader from "./components/SmallHeader.jsx"
import Showcase  from "./components/Showcase.jsx"
import Categories  from "./components/Categories.jsx"
import Deals  from "./components/Deals.jsx"

function App() {
  return (
    <div className="min-h-screen w-full font-['Montserrat'] bg-zinc-100 text-sm text-semibold relative pb-4">
    <div className="sticky top-0 left-0 z-10 w-full">
        <SmallHeader />
        <Header />
    </div>
        <Showcase />
        <Categories />
        <Deals />
        <Deals />
    </div>
  );
}

export default App;
