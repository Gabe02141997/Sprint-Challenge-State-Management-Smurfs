1. What problem does the context API help solve?

Context Api solves the reptitiveness of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The Store is where all the data state is kept, and it allows the app to access that store by a provider.
The actions are objects that are passed in the reducer, and it goes through an update depending on what type of action was triggered.
The reducers are functions that update the state of the application, once an action is triggered.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is when state can be accessed throughout the component tree, whereas regular component state can be accessed only in that component.

State Application should be used if your building an app with multiple components and functionalities.  


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is middlwWare and it allows the use of multiple action type to be dispatched in action creators

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management is Context Api because it is much simplier than redux and it includes react hooks. 