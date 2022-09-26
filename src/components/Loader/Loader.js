
const Loader = () => {
    const load= "loading"
    const noLoad= ""
    const loaded= false
    const Loader = loaded ? load : noLoad

  return (
    <div>
        {Loader}
    </div>

  )
}

export default Loader