# Vending Machine Component Kata

A code kata for building (and testing) components.

------
![vending machines](vendingmachine.jpg)

------

# The Rules Of TDD

1. You must write a failing test before you write any production code.
2. You must not write more of a test than is sufficient to fail, or fail to compile.
3. You must not write more production code than is sufficient to make the currently failing test pass.

------

1. If the money given to the machine is less than the item cost return "Not enough money!"

2. If the quantity is 0 for an item return "<Item Name>: Out of stock!". Where **Item Name** is the name of the item selected.

3. If an item is correctly selected return "Vending <Item Name> with {n} change.". Where **Item Name** is the name of the item and change if any given.

4. If an item is correctly selected and there is no change needed then return "Vending <Item Name>". Where **Item Name** is the name of the item.

5. If an invalid item is selected return "Invalid selection! : Money in vending machine = {n}. Where {n} is the amount of money in the vending machine reprensented in decimals with with a precision of two ie 11.20.

6. If a selection is successful then the quantity should be updated.

7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime

8. Change is always given in in decimals with with a precision of two ie 7.00
