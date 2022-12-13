// #region vazamento de escopo var
function canDrink(age) {
    if (age > 18) {
        var canDrink = true
    }
    console.log(canDrink)
}

canDrink(21)
// #endregion

// #region vazamento de escopo let
function canDrink2(age) {
    if (age > 18) {
        let canDrink2result = true
    }
    console.log(canDrink2result)
}

canDrink2(21)
// #endregion

// #region vazamento de escopo const
function canDrink3(age) {
    if (age > 18) {
        const canDrink3result = true
    }
    console.log(canDrink3result)
}

canDrink3(21)
// #endregion
