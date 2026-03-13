function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App
