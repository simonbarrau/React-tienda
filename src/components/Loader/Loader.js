
const Loader = (loading = true) => {

    const compLoadding= loading ? "Loading..." : " ";
    return (
    <div>{compLoadding}</div>
  )
}

export default Loader