const start = document.querySelector(".start");
const cardGames = document.getElementById("card-games");
const btn = document.getElementById("button");
const click = document.getElementById("click");
const count = document.getElementById("count");
const bet = document.getElementById("bet");
const bets = document.querySelector(".bet-container");

btn.addEventListener("click", function() {
    cardGames.classList.add("active");
    btn.classList.add("active")
    setTimeout(() => {
        click.classList.add("active")
        bet.classList.add("active")

    }, 3000);


    displayscreen();
})

bet.addEventListener("click", function() {
    bets.classList.toggle("active")
})
let counts = 3
function displayscreen() {

    const thirdScreen = document.querySelector(".third-screen")
    const secondScreen = document.querySelector(".second-screen")
    const cards = document.querySelector(".CARDS")
    secondScreen.classList.add("active")
    count.textContent = counts
  

    // COUNT DOWN
        setInterval(function() {
            counts--;

            if (counts === 3) {
                count.textContent = 3;
            } else if (counts === 2) {
                count.textContent = 2;
            } else if (counts === 1) {
                count.textContent = 1
            } else if (counts === 0) {
                count.textContent = counts
                console.log(counts)
                thirdScreen.classList.toggle("active")
                cards.classList.add("active")
                secondScreen.classList.remove("active")
            }
        }, 1000)

    
}

const kingCards = document.getElementById("king-cards");
const quenCardsCards = document.getElementById("quen-cards");
const jackCards = document.getElementById("jack-cards");
const alasCards = document.getElementById("alas-cards");
const teenCards = document.getElementById("teen-cards");
const nineCards = document.getElementById("nine-cards")



const alphabet = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];



let balance = 50
let userBalanceBet = 0
let bool = true
function randomCards() {

    const userBalance = document.getElementById("balance");
      const btnBets = document.querySelectorAll(".btn-bets button"); 
        btnBets.forEach((button, index) => {
                button.addEventListener("click", () => {
                    if (index === 0) {
                        balance -= 10
                        console.log(balance)
                        userBalanceBet = balance
                        console.log(userBalanceBet)
                        userBalance.textContent = balance
                    } else if (index === 1) {
                        balance -= 20
                        console.log(balance)
                        userBalanceBet = balance
                        console.log(userBalanceBet)
                        userBalance.textContent = balance
                    } else if (index === 2) {
                        balance -= 30
                        console.log(balance)
                        userBalanceBet = balance
                        console.log(userBalanceBet)
                        userBalance.textContent = balance
                    } else if (index === 3) {
                        balance -= 40
                        console.log(balance)
                        userBalanceBet = balance
                        console.log(userBalanceBet)
                        userBalance.textContent = balance
                    } else if (index === 4) {
                        balance -= 50
                        console.log(balance)
                        userBalanceBet = balance
                        console.log(userBalanceBet)
                        userBalance.textContent = balance
                    }

                    if(balance < 0) {
                        console.log("sorry you dont have enough balance to bet")
                        userBalance.textContent = 0
                    }
      
                })


        });
        
      
    // when click the button click the user will get yhier cards
    click.addEventListener("click", () => {
        const description = document.getElementById("discription");
        const spinning = setInterval(() => { // i use setinterval for the repeated value so meaning it will reapeat the code like (a b c d e...... and so on, it will stop until he reach it goal)
            const random = alphabet[Math.floor(Math.random() * alphabet.length)]
            kingCards.textContent = random
            

        
            
        }, 50)

        setTimeout(() => { // i use set time out to stop setinterval
            clearInterval(spinning)
        }, 2000);

        const spinning2 = setInterval(() => { // i use setinterval for the repeated value so meaning it will reapeat the code like (a b c d e...... and so on, it will stop until he reach it goal)
            const random = alphabet[Math.floor(Math.random() * alphabet.length)];
            quenCardsCards.textContent = random
            
        }, 50)

        setTimeout(() => {
            clearInterval(spinning2)
        }, 3000);

        const spinning3 = setInterval(() => { // i use setinterval for the repeated value so meaning it will reapeat the code like (a b c d e...... and so on, it will stop until he reach it goal)
            const random = alphabet[Math.floor(Math.random() * alphabet.length)];
            jackCards.textContent = random
            
        }, 50)

        setTimeout(() => {
            clearInterval(spinning3)
        }, 4000)

        const spinning4 = setInterval(() => { // i use setinterval for the repeated value so meaning it will reapeat the code like (a b c d e...... and so on, it will stop until he reach it goal)
            const random = alphabet[Math.floor(Math.random() * alphabet.length)]
            alasCards.textContent = random
            
        }, 50)

        setTimeout(() => {
            clearInterval(spinning4)
        }, 5000);


        const spinning5 = setInterval(() => { // i use setinterval for the repeated value so meaning it will reapeat the code like (a b c d e...... and so on, it will stop until he reach it goal)
            const random = alphabet[Math.floor(Math.random() * alphabet.length)]
            teenCards.textContent = random
            
        }, 50)

        setTimeout(() => {
            clearInterval(spinning5)
        }, 6000);

        const spinning6 = setInterval(() => { // i use setinterval for the repeated value so meaning it will reapeat the code like (a b c d e...... and so on, it will stop until he reach it goal)
            const random = alphabet[Math.floor(Math.random() * alphabet.length)]
            nineCards.textContent = random
            
        }, 50)

        setTimeout(() => {
            clearInterval(spinning6)
        }, 7000)

        if (balance < 0) {
            clearInterval(spinning);
            clearInterval(spinning2);
            clearInterval(spinning3);
            clearInterval(spinning4);
            clearInterval(spinning5);
            clearInterval(spinning6);

            description.textContent = "Sorry, your balance is 0";
            description.style.color = "white"  

            setTimeout(() => {
                description.textContent = ""
            }, 2000)
        }

        // --- all your spinning intervals here --- //

    setTimeout(() => {
        clearInterval(spinning6);

        const values = [
            kingCards.textContent,
            quenCardsCards.textContent,
            jackCards.textContent,
            teenCards.textContent,
            nineCards.textContent
        ];

        const count = {};
        values.forEach(letters => {
            count[letters] = (count[letters] || 0) +1
        });


        console.log(count)

    
        const hasDuplicate = new Set(values).size !== values.length;

          for (const letters in count)  {
            if (count[letters] === 4) {
                console.log(`Letter ${letters} appears 4 times!`);
                balance += 50
                userBalance.textContent = balance
            }
            
            if(counts[letters] === 3) {
                console.log(`Letter ${letters} appears 3 times!`);
                balance += 40
                userBalance.textContent = balance
            }
            
            if (count[letters] == 2) {
                console.log(`Letter ${letters} appears 2 times!`);
                balance += 30
                userBalance.textContent = balance
            }
            
            if (count[letters] === 1) {
                console.log(`Letter ${letters} appears 1 times!`);
                balance += 0
                userBalance.textContent = balance
            }
        }

        if (hasDuplicate) {
            console.log("You got duplicate!");
        } else {
            console.log("No duplicates");
        }

    }, 7000);


    })
}

randomCards();




