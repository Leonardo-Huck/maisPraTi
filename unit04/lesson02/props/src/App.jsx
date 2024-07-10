import Props from "./components/props";
import Footer from "./components/footer";

const item = {
  nav1: "Home",
  nav2: "Features",
  nav3: "Pricing",
  nav4: "FAQs",
  nav5: "About"
}

function App() {
  return (
    <div>
      <Footer props={item} />
    </div>
  )
}

export default App