import { Link } from "react-router-dom"

const Error = () => {
    return(
        <section className="center">
        <article>
          <h1 className="header">404</h1>
          <p className="error">ERROR</p>
        </article>
        <article>
          <p className="my-6">Lost? Maybe I can help.</p>
          <Link to="/" className="bg-success p-2 rounded-md text-white">Back to home page</Link>
        </article>
        </section>
    )
}

export default Error;