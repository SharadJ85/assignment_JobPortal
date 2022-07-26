import ThemeLayout from "./Layouts/ThemeLayout";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <ThemeLayout>
        <AppRoutes />
      </ThemeLayout>
    </div>
  );
}

export default App;
