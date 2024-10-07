import anime from "animejs";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Primary from "./Components/Primary";

function App() {
  let duration = 1000;
  anime({
    targets: ".card",
    delay: anime.stagger(duration / 2),
    duration: duration,
    easing: "easeOutExpo",
    opacity: [0, 1],
    translateX: [-15, 0],
  });


  return (
    <>
      <NavBar />
      <div className="flex w-[300vw] h-screen">
        <div id="home" className="flex justify-center content-center items-center relative w-full h-full top-12">
          <div className="grid grid-cols-2 gap-y-20 gap-x-10">
            <Card className="rounded-lg text-white bg-black">
              <Header>
                Woah.
              </Header>
              <Primary
                className="text-white"
              >
                A day in the life of a web developer is always
                exciting. From dawn till dusk, I'll be typing away
                in my editor, switching between multiple projects
                and trying to keep my sanity when dealing with
                those pesky bugs. I'll be sipping on a piping hot
                cup of coffee, and eating a whole pizza by myself
                (no judgments, please). I'll be learning new
                technologies, and teaching myself new tricks.
                And, of course, I'll be procrastinating on YouTube
                for a bit (don't tell anyone). But, hey, at the end
                of the day, I get to see my creations come to life,
                and that's the best feeling in the world.
              </Primary>
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
          </div>
        </div>
        <div id="about" className="flex relative w-full h-fit top-12">
          <div className="grid grid-cols-2 gap-4 w-fit h-fit">
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
          </div>
        </div>
        <div id="contact" className="flex relative w-full h-fit top-12">
          <div className="grid grid-cols-2 gap-4 w-fit h-fit">
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
            <Card className=" rounded-lg text-white bg-black p-4">
              lmao?
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
