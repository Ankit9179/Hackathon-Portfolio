import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
function App() {
  return (
    <>
      <div className="min-h-screen bg-center bg-cover p-4 bg-[url('https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30436.jpg?w=900&t=st=1693628859~exp=1693629459~hmac=89a5efd11b54d54de48a747da22a75871f748571615af8ba46ef15e1973baf1f')]">
        <Navbar />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
