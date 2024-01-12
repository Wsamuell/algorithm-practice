// (Intermediate): Ranked Voting System
// A Ranked Voting System is a system that chooses a result based on a ranked-preference rather than a simple majority. A standard ranked ballot generally has multiple choices, only one of which one can be picked. A ranked ballot allows you to choose the order in which you prefer candidates. An example could be that you prefer choice B first, then choice C, and finally choice A.

// There are some neat implications on how this differs from conventional voting systems, and is used in many different countries and states (check out the same [article's list of current uses](http://en.wikipedia.org/wiki/Ranked_voting_systems#Use_by_polities). CGP Grey has a great explanation on the overall system; well worth a watch! The overall difference between the two system is that a more agreed-upon candidate could win during a heavily split election.

// Your goal is to take a list of candidates and voter's ballots, implement this voting system (using the Instant-runoff rules), and print the results of the fictional election.

// Formal Inputs & Outputs
// Input Description
// On standard console input, you will be given two space-delimited integers, N and M. N is the number of votes, while M is the number of candidates. After this line, you will be given the candidates line, which is a space-delimited set of M-number of candidate names. These names are one-word lower-case letters only. This is followed by N-lines of ballots, where each ballot is a list of M-integers, from 0 to M-1, representing the order of preference.

// Note that the order of preference for ballots goes from left-to-right. The integers are the index into the candidate list. For the example below, you can map 0: Knuth, 1: Turing, 2: Church. This means that if the ballot row is "1 0 2", that means the voter prefers Turing over Knuth over Church.

// Output Description
// Given the candidates and ballots, compute the first-round of successful candidates (e.g. rank them based on all ballot's first choice). If the percentage of votes for any one candidate is more than 50%, print the candidate name as the winner. Else, take all the votes of the least-successful candidate, and use their ballot's 2nd choice, summing again the total votes. If needed (e.g. there is no candidate that has more than 50% of the votes), repeat this process for the 3rd, 4th, etc. choice, and print the winner of the election.

// For each round of computation, print the percentage of votes for each candidate, and rank them based on that percentage, using the output format.

// Sample Inputs & Outputs
// Sample Inputs
// 5 3
// Knuth Turing Church
// 1 0 2
// 0 1 2
// 2 1 0
// 2 1 0
// 1 2 0
// Sample Outputs
// Round 1: 40.0% Turing, 40.0% Church, 20.0% Knuth
// Round 2: 60.0% Turing, 40.0% Church
// Turing is the winner

// MY explanation ---------------------------------------------------

// 5 3
// Knuth Turing Church
// 1 0 2
// 0 1 2
// 2 1 0
// 2 1 0
// 1 2 0

// ok so basically,
// round 0
// knuth got 1 vote = 20%
// Turing got 2 vote = 40%
// Church got 2 vote = 40%
//  Knuth is eliminated

// round 1
// knuth got 3 vote = 40%
// Church got 1+1 vote = 40% ( since the first person second vote is elimited we use the next vote with is 2)
//

//

// SOLUTION
// function tallyRound(round: number, )

function checkDrawOrWinner(arr: number[]): {
  winners: number[];
  losers: number[];
} {
  let losers: number[] = [];
  let highest = 0;
  let winners: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    // ___ PSA sam find a way to return only the index of the item not the value.
    // if current item is greater than the highest
    // set draw to 0
    // set hhighest to item
    // returnArr = [highest]
    // if current item is equal to highest
    // add index to the returnArr
    // set draw++

    // if curr is lower than highest then do nothing
    if (arr[i] > highest) {
      losers = [...losers, ...winners];
      highest = arr[i];
      winners = [i];
    } else if (arr[i] === highest) {
      winners.push(i);
    } else if (arr[i] < highest) losers.push(i);
  }
  return { winners, losers };
}
// console.log(checkDrawOrWinner([3,5,5,2,7,7]))

function election(candidates: string[], votes: number[][]): string {
  let rounds = 0;
  while (rounds < candidates.length) {
    // create an array with empty votes that equals the amount of candidates we have
    let candidateVotes: number[] = new Array(candidates.length).fill(0);

    //  For each iteration grab the candidate voter voted for
    for (let i = 0; i < votes.length; i++) {
      candidateVotes[votes[i][rounds]]++;
    }

    // map through the votes for the round and see result string
    candidateVotes.map((num, index) => {
      const percentage = ((num / votes.length) * 100).toFixed(2);
      console.log(`Round:${rounds + 1}: ${percentage}% ${candidates[index]}`);
    });

    // grab the index for the winner or the index for who tied
    const { winners, losers } = checkDrawOrWinner(candidateVotes);
    // console.log(winners, losers)

    // return winner if we have one 1 candidate left
    if (winners.length === 1) {
      console.log(`${candidates[winners[0]]} is the winner`);
      return candidates[winners[0]];
    }

    // remove all candidates that lost
    losers.map((index) => {
      console.log(`Eliminating ${candidates[index]}`);
      candidates = candidates.filter((_, i) => i !== index);
    });
    console.log(candidates);

    // Start next round voting
    rounds++;
  }
  // return candidates[0]
  if (candidates.length > 1) {
    const tiedCandidates = candidates.join(', ');
    return `We have a voting tie between ${tiedCandidates}`;
  } else return candidates[0];
}

// Note: There is a problem thats not serious, when a candidate gets eleminated we need to also remove the votes for removed candiates as well
console.log(
  election(
    ['Knuth', 'Turing', 'Church'],
    [
      [1, 0, 2],
      [0, 1, 2],
      [2, 1, 0],
      [2, 1, 0],
      [1, 2, 0],
    ]
  )
);
