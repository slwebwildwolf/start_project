cc.Class(
    {
        extends: cc.Component,
    
        properties: 
        {
            starPrefab :
            {
                default : null,
                type : cc.Prefab,
            },
            maxStarTime : 0,
            minStarTime : 0,
            
            ground :
            {
                default : null,
                type : cc.Node,
            },
            
            player :
            {
                default : null,
                type : cc.Node
            }
        },
        getNewStarPosition: function () 
        {
            var randX = 0;
            var randY = this.groundY + cc.random0To1() * this.player.getComponent('Player').jumpHeight + 50;
            
            var maxX = this.node.width/2;
            randX = cc.randomMinus1To1() * maxX;
            return cc.p(randX, randY);
        },
        spawnNewStar : function()
        {
            var newStar = cc.instantiate(this.starPrefab);
            this.node.addChild(newStar);
            newStar.setPosition(this.getNewStarPosition());
            newStar.getComponent('Start').game = this;
        },
        // use this for initialization
        onLoad: function () 
        {
            this.groundY = this.ground.y + this.ground.height/2;
            this.spawnNewStar();
        },
    
        // called every frame, uncomment this function to activate update callback
        // update: function (dt) {
    
        // },
    }
);
