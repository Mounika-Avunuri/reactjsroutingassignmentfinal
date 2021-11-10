import React from 'react'

function Mounting() {
    return (
        <div>
        <center>
        <h1>Mounting</h1>
            <p>In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.</p>
            <p>
                *componentWillMount()
                This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render.
                *componentDidMount()
                This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.
                *render()
                This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.
            </p>
    </center>
        </div>
    )
}

export default Mounting
