import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <div className="card m-10 bg-accent text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What are the different ways to manage a state in a React application???</h2>
                        <p><strong>Different ways to manage a state in a React application:</strong>
                            <br />
                            The Four Kinds of React State to Manage
                            Local state. Global state. Server state. URL state.
                            React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app
                        </p>
                    </div>
                </div>
                <div className="card m-10 bg-accent text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">How does prototypical inheritance work???</h2>
                        <p><strong> prototypical inheritance work:</strong>
                            <br />
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                        </p>
                    </div>
                </div>
                <div className="card m-10 bg-accent text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What is a unit test? Why should we write unit tests???</h2>
                        <p><strong>Unit test:</strong>
                            <br />
                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                        <p><strong>We write unit tests cause:</strong>
                            <br />
                            Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions. It simplifies the debugging process. Unit testing is an integral part of extreme programming
                        </p>
                    </div>

                </div>
                <div className="card m-10 bg-accent text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">React vs. Angular vs. Vue??</h2>
                        <p><strong>React vs. Angular vs. Vue:</strong>
                            <br />
                            Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:
                            “The modern web developer’s platform”
                            It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.
                            React is considered a UI library. They define themselves as:
                            “A JavaScript library for building user interfaces” Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.
                            Last but not least, Vue.js is, according to its site:
                            “A progressive JavaScript framework”
                            Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;