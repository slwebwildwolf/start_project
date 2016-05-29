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
            scoreDisplay:
            {
                default : null,
                type : cc.Label,
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
            this.score = 0;
            
            this.groundY = this.ground.y + this.ground.height/2;
            this.spawnNewStar();
        },
        gainScore:function()
        {
            this.score += 1;
            this.scoreDisplay.string = 'Score: '+this.score.toString();
        }
        // called every frame, uncomment this function to activate update callback
        // update: function (dt) {
    
        // },
    }
);
