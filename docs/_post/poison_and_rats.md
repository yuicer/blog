---
title: poison and rats
date: 2020/11/22 20:50:19
---

## how many cats can detect the one black blood potion in 1000 white honey postion?

<img src="/img/20201122-1.png" width="40%"/>
<img src="/img/20201122-2.png" width="40%"/>

## Point

the point is we have to mixing the postion and make it to simple question

## Solution1

**bisection method**

the problem can transform to binary search. Mixing top 500 potion to one potion and left 500 potion to one potion, so one of them will be poison. and do this again untill there is just one

## Solution2

**binary**

lets make it an easy problem first. what if we have 8 postions.

| number | binary |
| ------ | ------ |
| 0      | 0 0 0  |
| 1      | 0 0 1  |
| 2      | 0 1 0  |
| 3      | 0 1 1  |
| 4      | 1 0 0  |
| 5      | 1 0 1  |
| 6      | 1 1 0  |
| 7      | 1 1 1  |

#### the rat1 will drink the mixing of

[1,3,5,7] => [001, 011, 101, 111]

#### the rat2 will drink the mixing of

[2,3,6,7] => [010, 011, 110, 111]

#### the rat3 will drink the mixing of

[4,5,6,7] => [100, 101, 110, 111]

so we can know which one is poison by these three rats. for three rats can number eight item。

we can think every rat is a filter. its life can filter some potion to make sure these potion is not our target.

---

**this is an unfriendly problem to rats**

<img src="/img/20201122-3.png" width="140px"/>
