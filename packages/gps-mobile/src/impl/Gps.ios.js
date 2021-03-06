export default class Gps {
  constructor(options) {
    this.options = options || { enableHighAccuracy: true, timeout: 20000, maximumAge: 30000 }
    this.defaultRequestDescription = {
      title: 'GPS Permission',
      message: 'This App needs access to your geolocation'
    }
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.position = position
          resolve(this.position)
        },
        error => reject(new Error(error.message)),
        this.options
      )
    })
  }
}
