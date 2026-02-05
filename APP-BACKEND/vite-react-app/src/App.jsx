import { Button, Card } from 'flowbite-react'

function App() {
  return (
    <div className="p-6 space-y-4">
      <Button color="purple">Flowbite Button</Button>

      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Flowbite Card
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          If this looks styled, Flowbite is working.
        </p>
      </Card>
    </div>
  )
}

export default App
