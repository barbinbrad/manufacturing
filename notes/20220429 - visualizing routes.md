# Visualizing Routes

A manufacturing process is a function that turns inputs to outputs. We can think of it like a math function:

`f(x) = y`

In this simplified example `x` is all inputs, `y` is the manufactured good, and `f` is a transformation function that turns `x` into `y`. Of course we know that `f` is not necessarily one process, but multiple processes such that:

`f(x) = g1(x) + g2(x) + ... gn(x)`

And we also know that each sub-process (`g`) does not require all inputs `x`:

`f(x) = g1(x1) + g2(x2) + ... gn(x2)`

What then can we say about the relationship between `x1`, `x2`.. and `xn`?

To answer that question let's first consider a process with one input (`x1`) at the beginning. This is akin to a process where a block of wood is refined by multiple steps to produce a sculpture, where the block of wood of wood is represented by `x1`. If we suppose that we have 3 steps to produce `y`, we have:

```
x1 = purchased material input
x2 = g1(x1)
x3 = g2(x2)
y = g3(x3) = f(x)
```

At first glance, this result -- `g3(x3) = f(x)` seems a bit odd, but it begins to make more sense when we rewrite the function as:

`y = g3(g2(g1(x1)))`

Beautiful. But we know that material doesn't transform itself. There are resources (`r`) required at each step:

`y = g3(g2(g1(x1, r1), r2), r3)`

Because this is getting difficult to read, let us rewrite the function using Elixir's pipe operator to chain functions:

```elixir
y =
  x1
  |> g1(r1)
  |> g2(r2)
  |> g3(r3)

```

Now we're getting somewhere. But how can we represent new materials being added to the process (in addition to the output of the previous step)? Let us distinguish between the output of the previous step and new materials added. So far we have used `x1` to represent the, perhaps purchased, material we started with. Let us renamed purchased materials as `m1` and use `x1` to denote the output of process `g1` such that:

```
x0 = 0
x1 = g1(x0, m1, r1)
x2 = g2(x1, m2, r2)
x3 = g3(x2, m2, r2)
```

This is to say that the output of each step is the transformation of:
1. The output of the previous step (`x`)
2. The materials required for the step (`m`)
3. The resources required for the step (`r`)

Returning to our Elixir syntax we have:

```elixir
y = 
  0
  |> g1(m1, r1)
  |> g2(m2, r2)
  |> g3(m2, r2)
```

This looks nice and generalizable. But what happens when the process forks like this, like in the case of two pieces of bread that are peanut-buttered (g3) and jellied (g4) in parrallel?

        g3 
       /  \
g1 - g2    g5 - g6
       \  /
        g4

Our generalization quickly falls apart. Particularly, we need a way to handle:

`x5 = g5((g3(x2, m3, r3) + g4(x2, m4, r4)), m5, r5)`

And of course, it's not accurate to say that x2 can serve as an input for both `g3` and `g4`, so we must invent another variable (`z`), which will denote percentage split between the output of g2 such that:

`z2/3 = 0.5` if half of the output x2 goes to g3.

Assuming no output is lost (to scrap), we can say that `Σz2/j = 1` for all `j`s. The same would apply for any `zi/j`.

Ok great, so now we have:

```
x3 = g3(x2 * z2/3, m3, r3)
x4 = g4(x2 * z2/4, m4, r4)
x5 = g5(x3 + x4, m5, r5)
```

Herein lies the current limitation of manufacturing modeling. When we had a linear process (without branching and merging) it was relatively straightforward to stick everything quite neatly into a database table. But things become a little more complex:

The problem is not complex because this kind of data structure is difficult to store in a relational database:

        g3 
       /  \
g1 - g2    g5 - g6
       \  /
        g4

That kind of structure can easily be represented in a relational database like this:
```
ID | TO | FROM | WEIGHT
1  | g2 | g1   | 1.0
2  | g3 | g2   | 0.5
3  | g4 | g2   | 0.5
4  | g5 | g4   | 1.0
5  | g5 | g3   | 1.0
6  | g6 | g5   | 1.0
```

The problem is complex because it's difficult for a human to figure out how to store this kind of thing in a relational database. Imagine trying to represent a complex graph with a single form with two fields: `FROM` and `TO`. The big picture is too easily lost. Thus, an interface is needed beyond the basic CRUD table view. 

#### Hypothesis: by creating a graph-based visual editor for manufacturing routing, it becomes easier to represent graph-based routing.



