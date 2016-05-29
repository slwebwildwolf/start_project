cc.Class(
    {
        extends: cc.Component,
    
        properties: 
        {
            Shoujifanwei : 0,
        },
    
        // use this for initialization
        onLoad: function () 
        {
    
        },
        getPlayerDistance:function()
        {
            var playerPos = this.game.player.getPosition();
            var dist = cc.pDistance(this.node.getPosition(), playerPos);
            return dist;
        },
        onPicked:function()
        {
            this.game.spawnNewStar();
            this.node.destroy();
            this.game.gainScore();
        },
        // called every frame, uncomment this function to activate update callback
        update: function (dt) 
        {
            if (this.getPlayerDistance() < this.Shoujifanwei) 
            {
                this.onPicked();
                return;
            }
        },
    }
);
