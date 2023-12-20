type visType = {
    handleVis: ()=>void
} 

const AddAccountant = ({handleVis}:visType) => {
  return (
    <div className="h-full w-full bg-gray-600 bg-opacity-80 absolute left-0 top-0 z-10" onClick={handleVis}>
        <div className="relative top-[25%] w-[60%] bg-white z-20 left-[20%] h-auto rounded-lg">
            <div className="flex flex-row text-xl">
                <label htmlFor="name">Imie:</label>
                <input type="text" id='name' />
            </div>
            <div className="flex flex-row text-xl">
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' />
            </div>
        </div>
    </div>
  )
}

export default AddAccountant