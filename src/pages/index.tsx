import "bootstrap/dist/css/bootstrap.min.css";
import  Navbar  from "../../components/Navbar";
import Carosel from "../../components/Carosel";
import Cards from "../../components/Cards";
export default function Home() {
  return (
    <main className="container-fluid">
      <div className="container-fluid">
      <Navbar/>
      <Carosel/>,
      <Cards/>
      
      </div>
    </main>
  );
}