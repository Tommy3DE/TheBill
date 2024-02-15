import { useState } from "react"

const Articles = () => {
    const [category, setCategory] = useState<string>('Wszytskie')
  return (
    <section className='mt-5'>
        <div className="h-24 bg-gray-400 flex flex-row justify-center items-center">
            <h1 onClick={setCategory('Wszystkie')}>Wszystkie</h1>
            <h1>Zarządzanie</h1>
            <h1>Procesy biznesowe</h1>
            <h1>Technologia</h1>
            <h1>Finanse</h1>
        </div>
    </section>
  )
}

export default Articles