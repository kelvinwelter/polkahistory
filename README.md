# Polkahistory

> This website helps people find their account balance at any date and time. The user simply enters the address and date he wants to search for, the website will then perform a binary search through the blockchain looking for the block with the timestamp closest to the target date and time. It currently only works for the Polkadot network, however there are plans to expand the website to other networks like Kusama.

## :straight_ruler: Techs used in the project

The website was built using React.js with Chakra UI, Polkadot API and react-datepicker. Chakra UI and React were chosen because of my familiarity with such tools, which enabled me to build the initial version of the site in a few hours.

### How it works

When I got the idea to do this project, the first Google search I did was "how to find Polkadot blocks by date". The research ended up showing me that this was not possible in an easy way and hardly something like this would be implemented since there were block indexers that already provided this feature.

The indexers I found did not serve me the way I would like and I came up with the idea of fetching the block manually. Assuming that we can see the timestamp of all blocks in the chain, I decided to implement a binary search to find the block closest to a timestamp. The use of binary search slightly impairs the speed of response for searches, since it will have to consult timestamps of several blocks until it finds the target block. However, it is a simple and straightforward solution.

## Roadmap

The website is still extremely simple, there are many improvements to be made, such as: error validation, UX improvements, possibility of consultation on other networks and so on. Such features will be implemented soon.

## Buy me a coffee

If you found the project interesting or were helped by the website, you can buy me a coffee. Just send me your tip in DOT to the following address: 12ENWcCZ6PsMPMULpYNhoevt2cVQypcR7sBEujzQJovJVdg8
