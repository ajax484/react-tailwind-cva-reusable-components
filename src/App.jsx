import Button from "./components/button";

function App() {
  return (
    <div className="h-screen space-y-8 px-4 flex flex-col justify-center items-center">
      <h1 className="text-slate-800 text-2xl font-bold">Reusuable Button Component</h1>
      <div className="space-y-2">
        <h2 className="text-slate-800 text-lg font-bold">Default</h2>
        <Button>Default</Button>
      </div>

      <div className="space-y-2">
        <h2 className="text-green-500 text-lg font-bold">Primary</h2>
        <div className="flex items-center gap-4">
          <Button intent="primary" size="small" roundness="square">Small</Button>
          <Button intent="primary" size="medium" roundness="round">Medium</Button>
          <Button intent="primary" size="large" roundness="pill">Large</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-red-500 text-lg font-bold">Secondary</h2>
        <div className="flex items-center gap-4">
          <Button intent="secondary" size="small" roundness="square">Small</Button>
          <Button intent="secondary" size="medium" roundness="round">Medium</Button>
          <Button intent="secondary" size="large" roundness="pill">Large</Button>
        </div>
      </div>
    </div>
  )
}



export default App;
