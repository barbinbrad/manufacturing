# Building Blocks

Last time, we concluded with the following hypothesis:

#### Hypothesis: 1/ by creating a graph-based visual editor for manufacturing routing, it becomes easier to represent graph-based routing. And 2/ representing manufacturing as a graph has great benefits.

After hacking together a solution with with React, the hypothesis is still untested. 

To recap, the prototype currently has 3 types of nodes:

1. Input (order)
2. Output (product)
3. Manufacturing Process (custom)

None of the nodes store any meta-information (like what materials and resources are required). Without this type of information at each step, it would be impossible to do scheduling or parts ordering. Let's work towards that goal.

A simple approach might be to add some type of form to each node to collect the relevant information. Using this approach, a "Manufacturing Process" node might collect the following information:

- The procedures to be completed during the process
- The material requirements of the process
- The space or equipment requirements of the process
- The time constraints of the process
- The process parameters of the related equipment
- The constraints on which type of manufacturing processes outputs can serve as inputs to the process

That sounds complex. Let's try to start with a simple process like baking a cake. It might be enough to say that process requires an aluminum baking sheet (material) at the oven (equipment) for 45 minutes (time) with the oven set to 350F (parameters). And of course, we need the batter, but the batter is an output of a previous process, so we might also add the constraint that baking steps should be preceded by batter mixing steps. How can we visually model this?

In order to create a graph-based model, we need to define each process and each process's relationship to other processes. But a graph with 100 nodes could be difficult to comprehend. It may be convenient to group processes together. For lack of a better word, we might call a group of processes a module. By this definition, any manufacturing process that transforms an order into a product could be thought of as a module. 

If modules are only made up of processes, then we have only moved our 100-node graph down a level (to the module). But if modules can be made up of processes AND other modules, then we can create infinitely nestable graphs with easy-to-understand abstractions at each level. This convention should limit the visual complexity and allow for reusable modules.

So now we have the following types of nodes:

1. Order
2. Module
3. Process
4. Product

It may be useful to use the convention that each manufactured in this schema has the same top-level representation. Let us suppose, for the sake of prototyping, that each part has the same top-graph such that:

An order is an input to a module. A module is an input to a product. A product is an output.

Good.

So far we've said a bit about what a process is, and what a module is. Now let's try to think through orders. Suppose that we have an order for 10 cherry pies, and cherry pies have the following material requirements:

```
1 Pie:
  - 2 pie crusts
    - 2 cups of flour
    - 1 cup of butter
    - 1 tbsp of sugar
  - 1 pie filling
    - 20 cherries
    - 1/2 cup of sugar
```

In order to figure out how much flour we need, we must walk the graph. If 1 pie requires 2 cups * 2 crusts of flour. Then 20 pies requires 80 cups of flour. Thus, in order to determine its material requirements, each process node must have acess to its ancestors, including the order. In addition to providing the quantity, an order may specify parameters that can be passed to each node.

For example, consider a simple order interface for a pie with two fields:

1. An input for the number of pies
2. A checkbox for whether to add sugar

If we were using JavaScript, we could create a function to determine the qty of sugar for each pie crust module:

```js
function f({params}) {
  const { addSugar } = params;
  return (addSugar) ? 1 : 0;
}
```
Thus we can pass the entire order object, including the `params`, to each function for evaluation. We might even want to pass more information in the future.

There is, of course, a question of units of measure, but let's leave that alone for now. Let us suffice it to say that for any material requirement of a process, we may specify a constant (as in the case of flour) or a pure function that takes a order object and returns a number.

But there is no reason to restrict order-based evaluation to material quantities. The same could be applied to process times, module quantities, process parameters values and more.

Finally, let us consider one more type of building block: a routing utility. For example, during the process there may be a need to split the output between the next steps, as we discussed in the previous note. There may also be a need for conditional routing. 

In functional programming, the same inputs should always give the same outputs. But life laughs at functional programming. For example, a manufacturing process might require that a sample be taken and tested in the lab. If the sample passes, the product may take one path, and if it fails, it may take an entirely different path. Thus, we have identified two types of routing utilities:

1. A split component that allows certain quantities or percentages to be diverted toward different paths
2. A conditional component that allows some user input (a test result posted through the GUI or API) to determine the routing of the process

Since our goal is to provide scheduling and parts ordering, let us consider the scheduling implications of a conditional component. The problem is that the behavior is non-deterministic. But the schedule can still be approxmiated stoichastically (with statistics). And it's very likely that such a schedule would be much more accurate than a deterministic schedule. The important information from a routing perspective is the percentage likelihood that a condition evaluates to true. 

For example, if we had a condition that evaluated whether a lab test passed, then we'd need to know the percentage likelihood that the test passes in order to successfully weight the equipment hours estimates. 

The other problem is loops. If, for example, we have a conditional output that leads back to the same condition's input, we will create a scheduling problem with an infinite loop. Thus, some threshold is needed for determining when to `break`.