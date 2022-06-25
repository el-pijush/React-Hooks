Hooks

We were previously known to react stateless components now , lets introduce hooks which allows us
to use rect state. We also name them function components.
Hooks dont work inside classes, but we can use them instead of classes 

What is a hook?
Hook is a special component that lets you "hook into" react features. For exapmple react useState hook lets you 
add state into react function components.

when do we use hook??
If you use a function component you can see that you need to add some state to it. previously we used to do it by converting it
class now we useState directly inside the function component.

What does calling usestate does?
It declares state variable our variable is called count but we can name it anything . This is a way to preserve some values between function calls useState is a new way to use the exact same capabilities that this.state provides in a class.Normally variables dissapear after the exit of the function call but State variables preserve the state of the variable.


What argument we pass to usestate ??
The Only argument we pass to useState is initial state

What does useState return?
 It returns a pair of values: the current state and a function that updates it.

