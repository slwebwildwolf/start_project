cc.Class({
    "extends": cc.Component,

    properties: {
        Shoujifanwei: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},
    getPlayerDistance: function getPlayerDistance() {
        var playerPos = this.game.player.getPosition();
        var dist = cc.pDistance(this.node.getPosition(), playerPos);
        return dist;
    },
    onPicked: function onPicked() {
        this.game.spawnNewStar();
        this.node.destroy();
        this.game.gainScore();
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.getPlayerDistance() < this.Shoujifanwei) {
            this.onPicked();
            return;
        }
    }
});