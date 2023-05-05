function Player() {
}
Player.prototype.sayName= function () {
    console.log(this.name)
}
function infoplayer(name) {
    this.name=name
    this.grade=8
}

infoplayer.prototype=Object.create(Player.prototype)

const player1= new infoplayer('dai')
player1.sayName()
player1.grade