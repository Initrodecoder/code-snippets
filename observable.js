class Observable {
  constructor(obsf) {
    this._obsf = obsf
  }

  subscribe(o) {
    return this._obsf(o)
  }
}

const o = new Observable(obs => {
  setTimeout(() => {
    obs.next("got data!")
    obs.complete()
  }, 1200)
})

const myObserver = {
  next(data) {
    console.log(data)
  },
  error(e) {
    console.log(e)
  },
  complete() {
    console.log("request complete")
  }
}

o.subscribe(myObserver)
