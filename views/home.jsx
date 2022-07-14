const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pizza.jpg" alt="Pizza Slice" />
                    <div>
                        Photo by <a href="https://unsplash.com/@iavnt">Ivan Torres</a> on <a href="http://upsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home