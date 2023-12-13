import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-black">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam maiores, neque dolor alias facilis ipsum repudiandae
              quam eaque vitae, atque doloribus culpa nisi provident. Dolorum
              excepturi cumque reiciendis exercitationem quos.
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
