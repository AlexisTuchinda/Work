//Node
class Piece{
    constructor (filling){
        this.filling = filling;
        this.before = null; //prev in Linked List
        this.behind = null; //next in Linked List
    }
}

//BST
class Plate{
    constructor (){
        this.atChopstick = null; //head of BSt
    }

    makeRoll(roll, piece){
        if (roll == null || roll.sushi == null || piece == null){ //checking if the Linked List is existant
            return;
        }else if (piece.filling > roll.sushi.filling){ //sorting in the BST
            return this.addRoll(roll.behind, piece);
        }else if (piece.filling < roll.sushi.filling){
            return this.addRoll(roll.before, piece);
        }else{
            return roll.makePiece(roll.sushi, piece), this.atChopstick;
        }
    }

    eatRoll(roll, piece){
        if (roll == null || piece == null || roll.sushi == null){
            return;
        }else if (roll.sushi.filling == piece.filling){
            if (roll.left == null && roll.right == null){
                roll = null;
            }else if (roll.left == null){
                roll = roll.right;
            }else if (roll.right == null){
                roll = roll.left;
            }else{
                store = roll.right;
                roll = roll.left;
                roll.right = store;
            }
        }else{
            if (roll.sushi.filling > piece.filling){
                return this.eatRoll(roll.left);
            }else{
                return this.eatRoll(roll.right);
            }
        }
    }

}

//Linked List (for sorting equal data)
class Roll{
    constructor (){
        this.sushi = null; //head of linked list
        this.left = null;
        this.right = null;
    }

    makePiece(current, filling){
        while (current.behind != null){
            current = current.behind; //traversing through linked list
        }
        //once found the end of the linked list
        current.behind = new Piece(filling);
    }

    eatPiece(current, filling){
        if (this.sushi.filling == filling){
            this.sushi = this.sushi.behind;
            this.sushi.behind.before = null;
            return this.sushi;
        }

        while (current.behind.filling != filling){ //however, the filling within the Linked List are all going to be the same. Therefore, the head sushi will be deleted.
            current = current.behind; //traversing through Linked List
        }
        current.behind = current.behind.behind; //changing pointers
        current.behind.behind.before = current;
        return current;
    }
}