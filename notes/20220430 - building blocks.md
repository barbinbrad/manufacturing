# Building Blocks

Last time, we concluded with the following hypothesis:

#### Hypothesis: 1/ by creating a graph-based visual editor for manufacturing routing, it becomes easier to represent graph-based routing. And 2/ representing manufacturing as a graph has great benefits.

After hacking together a solution with with React, the hypothesis is still untested. 

To recap, the prototype currently has 3 types of nodes:

1. Input (order)
2. Output (product)
3. Manufacturing Process (custom)

None of the nodes store any meta-information (like what materials and resources are required). Without this type of information at each step, it would be impossible to do scheduling or parts ordering. A simple approach might be to add some type of form to each node to collect the relevant information. Using this approach, a "Manufacturing Process" node might collect the following information:

- The procedures to be completed during the process
- The material requirements of the process
- The space or equipment requirements of the process
- The time constraints of the process
- The process parameters of the related equipment
- The constraints on which type of manufacturing processes outputs can serve as inputs to the process

That sounds complex. Let's try to start with a simple process like baking a cake. It might be enough to say that process requires an aluminum baking sheet (material) at the oven (equipment) for 45 minutes (time) with the oven set to 350F (parameters). And of course, we need the batter, but the batter is an output of a previous process, so we might also add the constraint that baking steps should be preceded by batter mixing steps. How can we visually model this?

In order to create a graph-based model, we need to define each process and each process's relationship to other processes. But a graph with 100 nodes could be difficult to comprehend. It may be convenient to group processes together. For lack of a better word, we might call a group of processes a module. By this definition, any manufacturing process that transforms an order into a product could be thought of as a module. 

If modules are only made up of processes, then we have only moved our 100-node graph down a level (to the module). But if modules can be made up of processes AND other modules, then we can create infinitely nestable graphs with easy-to-understand abstractions at each level. This convention should limit the visual complexity and allow for reusable modules.

