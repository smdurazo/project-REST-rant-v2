const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="/images/puppies.jpg" alt="Cute Puppies!"></img>
              <div>
                    Photo by <a href="https://unsplash.com/@victoranthony_">Victor Otero</a> on<a href="http://upsplash.com/">Unsplash</a>
                </div>
          </main>
      </Def>
    )
}

module.exports = error404