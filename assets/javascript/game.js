var game = {

    //PLayerStats
    playerFaction: "",
    playerBaseHealth: "",
    playerCurrentHealth: "",
    playerBaseAttack: "",
    playerAttackScale: "",
    playerCurrentAttack: "",

    //EnemyStats
    enemyFaction: "",
    enemyBaseHealth: "",
    enemyCurrentHealth: "",
    enemyCounterAttack: "",

    counter: 0,

    setPlayerStats: function (faction, health, attack, attackScale) {
        this.playerFaction = faction;
        this.playerBaseHealth = health;
        this.playerBaseAttack = attack;
        this.playerAttackScale = attackScale;
    },

    setEnemyStats: function (faction, health, counterAttack) {
        this.enemyFaction = faction;
        this.enemyBaseHealth = health;
        this.enemyCounterAttack = counterAttack;
    },

    
    displayPlayerStats: function () {
        console.log(game.playerFaction);
        console.log(game.playerBaseHealth);
        console.log(game.playerBaseAttack);
    },

    displayEnemyStats: function () {
        console.log(game.enemyFaction);
        console.log(game.enemyBaseHealth);
        console.log(game.enemyCounterAttack);
    },


    //function to set player stats to choosen faction
    getPlayerStats: function () {

            $("#human-select").on("click", function () {
                if (game.counter === 0) {
                game.setPlayerStats("human", 100, 5, 5);
                game.counter++;
                game.displayPlayerStats();
                } else {
                }
            });

            $("#elf-select").on("click", function () {
                if (game.counter === 0) {
                game.setPlayerStats("elf", 75, 5, 5);
                game.counter++;
                game.displayPlayerStats();
            } else {
            }
            });

            $("#dwarf-select").on("click", function () {
                if (game.counter === 0) {
                game.setPlayerStats("dwarf", 200, 5, 5);
                game.counter++;
                game.displayPlayerStats();
            } else {
            }
            });

            $("#hobbit-select").on("click", function () {
                if (game.counter === 0) {
                game.setPlayerStats("hobbit", 50, 5, 5);
                game.counter++;
                game.displayPlayerStats();
                
            } else {
            }
            });
    },

    //function to set enemy stats to choosen faction
    getEnemyStats: function () {
        // game.setEnemyStats("elf", 75, 5, 5);


        $("#human-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "human") {
            game.setEnemyStats("human", 100, 5, 5);
            game.counter++;
            game.displayEnemyStats();
            } else {
            }
        });

        $("#elf-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "elf") {
            game.setEnemyStats("elf", 75, 5, 5);
            game.counter++;
            game.displayEnemyStats();
        } else {
        }
        });

        $("#dwarf-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "dwarf"){
            game.setEnemyStats("dwarf", 200, 5, 5);
            game.counter++;
            game.displayEnemyStats();
        } else {
        }
        });

        $("#hobbit-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "hobbit") {
            game.setEnemyStats("hobbit", 50, 5, 5);
            game.counter++;
            game.displayEnemyStats();
            
        } else {
        }
        });
    }

 


    //function to set enemy stats to choosen enemy

    //function to deal combat damage

    //function to test if damage was lethal, and if so prompt for new opponent
}
game.getPlayerStats();
 game.getEnemyStats();