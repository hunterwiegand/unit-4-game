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
    enemyImgSrc: "",

    //counter used to pick Player and Enemy faction
    counter: 0,
    test: 0,

    //set Values to global vars
    setPlayerStats: function (faction, health, attack, attackScale) {
        this.playerFaction = faction;
        this.playerBaseHealth = health;
        this.playerCurrentHealth = health;
        this.playerBaseAttack = attack;
        this.playerCurrentAttack = attack;
        this.playerAttackScale = attackScale;
    },
    setEnemyStats: function (faction, health, counterAttack, img) {
        this.enemyFaction = faction;
        this.enemyBaseHealth = health;
        this.enemyCurrentHealth = health;
        this.enemyCounterAttack = counterAttack;
        this.enemyImgSrc = img;

    },

    //Update display to show stats
    displayPlayerStats: function () {
        $("#fighter-card").removeClass("hidden");
        switch (game.playerFaction) {
            case "human":
                $("#fighter-img").attr("src", "https://vignette.wikia.nocookie.net/lotr/images/d/de/248px-Aragorn2.jpg/revision/latest?cb=20070802171658");
                $("#human-img").remove();
                break;

            case "elf":
                $("#fighter-img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6-QmgblrLgJRsccCHhzdTBnfWbHnRP6VahkYtDIgkzxOAHz2IQ");
                $("#elf-img").remove();
                break;

            case "dwarf":
                $("#fighter-img").attr("src", "https://static.giantbomb.com/uploads/scale_small/0/299/200890-gimli.jpg");
                $("#dwarf-img").remove();
                break;

            case "hobbit":
                $("#fighter-img").attr("src", "https://vignette.wikia.nocookie.net/lotr/images/8/80/4_hobbits.jpg/revision/latest?cb=20110117213317");
                $("#hobbit-img").remove();
                break;
        }
        $("#game-message").html("<h3>Choose your Enemy!</h3>");
        $("#game-message").addClass("text-center");
        console.log(game.playerFaction);
        console.log(game.playerBaseHealth);
        console.log(game.playerBaseAttack);
    },
    displayEnemyStats: function () {
        $("#enemy-card").removeClass("hidden");
        $("#fight-button").removeClass("hidden");
        switch (game.enemyFaction) {
            case "human":
                $("#enemy-img").attr("src", "https://vignette.wikia.nocookie.net/lotr/images/d/de/248px-Aragorn2.jpg/revision/latest?cb=20070802171658");
                $("#human-img").remove();
                break;

            case "elf":
                $("#enemy-img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6-QmgblrLgJRsccCHhzdTBnfWbHnRP6VahkYtDIgkzxOAHz2IQ");
                $("#elf-img").remove();
                break;

            case "dwarf":
                $("#enemy-img").attr("src", "https://static.giantbomb.com/uploads/scale_small/0/299/200890-gimli.jpg");
                $("#dwarf-img").remove();
                break;

            case "hobbit":
                $("#enemy-img").attr("src", "https://vignette.wikia.nocookie.net/lotr/images/8/80/4_hobbits.jpg/revision/latest?cb=20110117213317");
                $("#hobbit-img").remove();
                break;
        }
        game.displayGameMessage("<h3>!!!!BATTLE!!!!</h3>");
        $("#game-message").addClass("text-center");
        console.log(game.enemyFaction);
        console.log(game.enemyBaseHealth);
        console.log(game.enemyCounterAttack);
    },

    //When img is clicked changes img to show stats for character
    //Then change back to img is clicked again
    displayCharacterStats: function () {
    },


    //function to set player stats to choosen faction
    getPlayerStats: function () {

        $("#human-select").on("click", function () {
            if (game.counter === 0) {
                game.setPlayerStats("human", 311, 20, 5);
                game.counter++;
                game.displayPlayerStats();
            } else {
            }
        });

        $("#elf-select").on("click", function () {
            if (game.counter === 0) {
                game.setPlayerStats("elf", 250, 30, 7);
                game.counter++;
                game.displayPlayerStats();
            } else {
            }
        });

        $("#dwarf-select").on("click", function () {
            if (game.counter === 0) {
                game.setPlayerStats("dwarf", 400, 35, 5);
                game.counter++;
                game.displayPlayerStats();
            } else {
            }
        });

        $("#hobbit-select").on("click", function () {
            if (game.counter === 0) {
                game.setPlayerStats("hobbit", 211, 10, 25);
                game.counter++;
                game.displayPlayerStats();

            } else {
            }
        });
    },

    //function to set enemy stats to choosen faction
    getEnemyStats: function () {

        $("#human-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "human") {
                game.setEnemyStats("human", 311, 15, "https://vignette.wikia.nocookie.net/lotr/images/d/de/248px-Aragorn2.jpg/revision/latest?cb=20070802171658");
                game.displayEnemyStats();
            } else {
            }
        });

        $("#elf-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "elf") {
                game.setEnemyStats("elf", 250, 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6-QmgblrLgJRsccCHhzdTBnfWbHnRP6VahkYtDIgkzxOAHz2IQ");
                game.displayEnemyStats();
            } else {
            }
        });

        $("#dwarf-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "dwarf") {
                game.setEnemyStats("dwarf", 400, 35, "https://static.giantbomb.com/uploads/scale_small/0/299/200890-gimli.jpg");
                game.displayEnemyStats();
            } else {
            }
        });

        $("#hobbit-select").on("click", function () {
            if (game.counter === 1 && game.playerFaction != "hobbit") {
                game.setEnemyStats("hobbit", 211, 5, "https://vignette.wikia.nocookie.net/lotr/images/8/80/4_hobbits.jpg/revision/latest?cb=20110117213317");
                game.displayEnemyStats();

            } else {
            }
        });
    },


    initiateAttack: function () {
        $("#fight-button").on("click", function () {

            if (game.playerCurrentHealth > 0 && game.enemyCurrentHealth > 0) {
                game.evaluateDamage();
            }

        });
    },

    evaluateDamage: function () {

        game.playerCurrentHealth -= game.enemyCounterAttack;
        game.enemyCurrentHealth -= game.playerCurrentAttack;

        $("#combat-log").prepend("<br><hr>Player health: " + game.playerCurrentHealth + "<br><hr>Enemy health: " + game.enemyCurrentHealth);
        console.log("player health: ", game.playerCurrentHealth);
        console.log("enemy health", game.enemyCurrentHealth);

        //If damage was lethal
        if (game.playerCurrentHealth <= 0) {
            console.log("Get wrekt");
            game.displayGameMessage("<h3>You've lost the Battle for Middle Earth, refresh to try again</h3>");
        } else if (game.enemyCurrentHealth <= 0) {
            console.log("Winner winner chicken dinner");

            switch (game.test) {
                case 0:
                    $("#defeated-enemy1").attr("src", game.enemyImgSrc)
                    $("#defeated-enemy1").addClass("height-custom");
                    game.test++;
                    game.newEnemy();
                    break;
                case 1:
                    $("#defeated-enemy2").attr("src", game.enemyImgSrc)
                    $("#defeated-enemy2").addClass("height-custom");
                    game.test++;
                    game.newEnemy();
                    break;
                case 2:
                    $("#defeated-enemy3").attr("src", game.enemyImgSrc)
                    $("#defeated-enemy3").addClass("height-custom");
                    game.test++;
                    game.newEnemy();
                    break;
            }
            game.displayGameMessage("<h3>Pick a new Foe</h3>");
            game.newEnemy();

            if (game.test === 3) {
                game.displayGameMessage("<h3>You won!</h3>");
            }
            console.log(game.test);
            $("#combat-log").html("");
        }

        game.playerCurrentAttack += game.playerAttackScale;
    },

    newEnemy: function () {
        game.enemyFaction = "";
        game.enemyBaseHealth = "";
        game.enemyCurrentHealth = "";
        game.enemyCounterAttack = "";
        $("#enemy-card").addClass("hidden");
        $("#enemy-img").removeAttr("src");

        $("#defeated-foes-message").removeClass("hidden");

    },

    displayGameMessage: function (message) {
        $("#game-message").html(message);
    }

}
game.getPlayerStats();
game.getEnemyStats();
game.initiateAttack();