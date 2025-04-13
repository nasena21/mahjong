---
title: Waits
order: 4
---

# Waits

There are ﬁve basic wait patterns, as summarized in Table 3.5.
More complicated wait patterns can emerge when some of these ﬁve
basic patterns are combined.

Table 3.5: Five basic waits


| Name           | Japanese | Example                                                                                                                                              | Wait                                                                                                                                               | Acceptance              |
|----------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| side wait      | ryanmen  | <img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png">                                             | <img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png">                                          | 2 kinds<br> 8 tiles     |
| dual pon wait  | shanpon  | <img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"> <img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"> | <img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png">                                          | 2 kinds<br> 4 tiles     |
| closed wait    | kanchan  | <img alt="FSmidletile" src="/image/souzu/8-sou.png"><img alt="FSmidletile" src="/image/souzu/9-sou.png">                                             | <img alt="FSmidletile" src="/image/souzu/7-sou.png">                                                                                               | 1 kind <br>4 tiles      |
| edge wait      | penchan  | <img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/2-pin.png">                                             | <img alt="FSmidletile" src="/image/pinzu/3-pin.png">                                                                                               | 1 kind <br>4 tiles      |
| single wait    | tanki    | <img alt="FSmidletile" src="/image/manzu/2-man.png">                                                                                                 | <img alt="FSmidletile" src="/image/manzu/2-man.png">                                                                                               | 1 kind <br>3 tiles      |


As we can see in the table, side wait is the strongest of all the basic
waits in terms of the kinds and the number of tiles to win on. Single
wait appears to be much worse than others, but single-wait hands
tend to have many possibilities of improving the wait and/or scores
further. Moreover, single wait of an honor tile has a relatively high
chance of winning it by ron.

Stretched single wait and semi side wait

Table 3.6 summarizes two wait patterns, each of which can be
thought of as a combination of some basic wait patterns. As I men-
tioned before, a stretched single shape in a ready hand forms a 2-way
single wait. It is a decent wait pattern, as the number of tiles to win
on (2 kinds–6 tiles) is twice as big compared with a regular single
wait.

Table 3.6: Stretched single wait and semi side wait

| Name                  | Example                                              | Wait                                                             | Acceptance              |
|-----------------------|------------------------------------------------------|------------------------------------------------------------------|-------------------------|
| stretched single wait | <img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"> | <img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"> | 2 kinds<br>6 tiles      |
| semi side wait        | <img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/souzu/5-sou.png"> | <img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/6-sou.png"> | 2 kinds<br>6 tiles      |


However, stretched single wait should not be confused with side
wait for a few reasons. First, the number of tiles a 2-way stretchedsingle-wait
hand can win on is at most 6, whereas it is 8 for a 2-way
side-wait hand. The diﬀerence between 6 and 8 is non-trivial. Second,
stretched single wait is still a variant of single wait, which means
two things. On the one hand, we cannot claim pinfu when the wait is
stretched-single wait. For example, the following hand has no yaku
and hence we cannot win it by ron without calling riichi.

<div class="no-border">


![FSmidletile](/image/manzu/4-man.png)
![FSmidletile](/image/manzu/5-man.png)
![FSmidletile](/image/manzu/6-man.png)
![FSmidletile](/image/pinzu/1-pin.png)
![FSmidletile](/image/pinzu/2-pin.png)
![FSmidletile](/image/pinzu/3-pin.png)
![FSmidletile](/image/pinzu/4-pin.png)
![FSmidletile](/image/souzu/1-sou.png)
![FSmidletile](/image/souzu/2-sou.png)
![FSmidletile](/image/souzu/3-sou.png)
![FSmidletile](/image/souzu/4-sou.png)
![FSmidletile](/image/souzu/5-sou.png)
![FSmidletile](/image/souzu/6-sou.png)


</div>

On the other hand, we get 2 minipoints (fu) with a stretched single
wait. For example, if we win the following hand by drawing ![onetile](/image/souzu/1-sou.png), we
get 40 minipoints (20 base minipoints + 8 for a concealed set of honor
tiles + 2 for self-draw + 2 for single wait = 32, rounded up to 40).
15

<div class="no-border">


![FSmidletile](/image/manzu/4-man.png)
![FSmidletile](/image/manzu/5-man.png)
![FSmidletile](/image/manzu/6-man.png)
![FSmidletile](/image/pinzu/1-pin.png)
![FSmidletile](/image/pinzu/2-pin.png)
![FSmidletile](/image/pinzu/3-pin.png)
![FSmidletile](/image/pinzu/4-pin.png)
![FSmidletile](/image/souzu/1-sou.png)
![FSmidletile](/image/souzu/2-sou.png)
![FSmidletile](/image/souzu/3-sou.png)
![FSmidletile](/image/honor/chun.png)
![FSmidletile](/image/honor/chun.png)
![FSmidletile](/image/honor/chun.png)


</div>

When we have a side-wait protorun right next to a pair (e.g., 1123,
2234, 7899, etc.), we call it semi side wait. We distinguish this from
regular side wait for two reasons. First, the number of tiles to win
on is smaller (6 rather than 8) because we are already using 2 of the 8 winning tiles in our hand. Second, we can treat this wait pattern
either as single wait or as side wait, depending on which interpretation
gives us a greater score. For example, consider the following
hand.


<div class="no-border">


![FSmidletile](/image/manzu/4-man.png)
![FSmidletile](/image/manzu/5-man.png)
![FSmidletile](/image/manzu/6-man.png)
![FSmidletile](/image/pinzu/1-pin.png)
![FSmidletile](/image/pinzu/1-pin.png)
![FSmidletile](/image/pinzu/2-pin.png)
![FSmidletile](/image/pinzu/3-pin.png)
![FSmidletile](/image/souzu/1-sou.png)
![FSmidletile](/image/souzu/2-sou.png)
![FSmidletile](/image/souzu/3-sou.png)
![FSmidletile](/image/souzu/4-sou.png)
![FSmidletile](/image/souzu/5-sou.png)
![FSmidletile](/image/souzu/6-sou.png)


</div>


We will treat the wait in this hand as side wait because that will give
us pinfu. However, consider the following hand that has the exact
same wait pattern: ![midletile](/image/pinzu/1-pin.png)
![midletile](/image/pinzu/1-pin.png)
![midletile](/image/pinzu/2-pin.png)
![midletile](/image/pinzu/3-pin.png)
.



<div class="no-border">


![FSmidletile](/image/manzu/4-man.png)
![FSmidletile](/image/manzu/5-man.png)
![FSmidletile](/image/manzu/6-man.png)
![FSmidletile](/image/pinzu/1-pin.png)
![FSmidletile](/image/pinzu/1-pin.png)
![FSmidletile](/image/pinzu/2-pin.png)
![FSmidletile](/image/pinzu/3-pin.png)
![FSmidletile](/image/souzu/1-sou.png)
![FSmidletile](/image/souzu/2-sou.png)
![FSmidletile](/image/souzu/3-sou.png)
![FSmidletile](/image/honor/chun.png)
![FSmidletile](/image/honor/chun.png)
![FSmidletile](/image/honor/chun.png)


</div>


If we win this hand by drawing 
![onetile](/image/pinzu/1-pin.png), we will treat the wait as single
wait: 
![onetile](/image/pinzu/1-pin.png) + 
![midletile](/image/pinzu/1-pin.png)
![midletile](/image/pinzu/2-pin.png)
, which will give us 40 minipoints. If we treated
the wait as side wait: 
![midletile](/image/pinzu/1-pin.png)![onetile](/image/pinzu/1-pin.png)
+ 
![midletile](/image/pinzu/2-pin.png)
![onetile](/image/pinzu/3-pin.png)
, we would get only 30 minipoints.
Of course, if we win this hand on ![onetile](/image/pinzu/4-pin.png), we cannot think of the wait as
single wait (because it is not). Similarly, if we win it by ron, it does
not make a diﬀerence if it is side wait or single wait (either way we
get 40 minipoints).

3-way side wait

When a side-wait protorun is combined with an adjacent run, we
get a regular 3-way side-wait pattern. There are only three of this
kind, summarized in Table 3.7.

Table 3.7: Regular 3-way side wait

| Example                                                                                                                | Wait                                                                                             | Acceptance               |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------|
| <img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/6-man.png"> | <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/7-man.png"> | 3 kinds<br>11 tiles     |
| <img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/4-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/6-pin.png"><img alt="FSmidletile" src="/image/pinzu/7-pin.png"> | <img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/8-pin.png"> | 3 kinds<br>11 tiles     |
| <img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/souzu/5-sou.png"><img alt="FSmidletile" src="/image/souzu/6-sou.png"><img alt="FSmidletile" src="/image/souzu/7-sou.png"><img alt="FSmidletile" src="/image/souzu/8-sou.png"> | <img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/6-sou.png"><img alt="FSmidletile" src="/image/souzu/9-sou.png"> | 3 kinds<br>11 tiles     |


When we have a stretched single shape or semi side-wait shape
combined with an adjacent run, we also get a 3-way wait pattern.
Table 3.8 summarizes some examples.

Table 3.8: Some irregular 3-way waits
| Example                                                                                                                | Wait                                                                                             | Acceptance               |
|------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|--------------------------|
| <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/6-man.png"><img alt="FSmidletile" src="/image/manzu/7-man.png"> | <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/7-man.png"> | 3 kinds<br>9 tiles     |
| <img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/4-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/6-pin.png"><img alt="FSmidletile" src="/image/pinzu/7-pin.png"><img alt="FSmidletile" src="/image/pinzu/6-pin.png"> | <img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/8-pin.png"> | 3 kinds<br>9 tiles     |
| <img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/souzu/5-sou.png"><img alt="FSmidletile" src="/image/souzu/6-sou.png"><img alt="FSmidletile" src="/image/souzu/7-sou.png"><img alt="FSmidletile" src="/image/souzu/8-sou.png"><img alt="FSmidletile" src="/image/souzu/9-sou.png"><img alt="FSmidletile" src="/image/souzu/9-sou.png"> | <img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/6-sou.png"><img alt="FSmidletile" src="/image/souzu/9-sou.png"> | 3 kinds<br>9 tiles     |



Notice that the number of tiles to win on in each pattern is smaller
than those for the regular 3-way side waits, although the kinds of tiles
to win on are the same (either 1-4-7, 2-5-8, or 3-6-9). This is because
we are already using some of the winning tiles within the hand.

Notice also that not all the wait patterns qualify as side wait, so
claiming pinfu is not always possible (similarly, claiming single wait
is not always possible). For example, the ﬁrst pattern in Table 3.8 is
essentially a 3-way stretched single shape; none of the waits embedded
in this shape qualiﬁes as side wait. In the second pattern, if we
win on ![onetile](/image/pinzu/2-pin.png)  , the wait must be interpreted as single wait; if we win on
![onetile](/image/pinzu/8-pin.png)  , the wait must be interpreted as side wait; and if we win on 
![onetile](/image/pinzu/5-pin.png)  ,
we adopt whichever interpretation that generates the higher score.
In the third pattern, winning on 	
![onetile](/image/souzu/9-sou.png)
 allows us to claim single wait if
doing so gives us a higher score.

Complex waits

When a set is combined with a ﬂoating tile nearby, we get some
complex wait patterns with multiple waits. Table 3.9 summarizes a
few examples of irregular waits that involve a set and a ﬂoating tile.
Table 3.9: Some irregular waits (set and a ﬂoating tile)

| Example                                                                                                                | Combination               | Wait                                                                                             | Acceptance               |
|------------------------------------------------------------------------------------------------------------------------|---------------------------|--------------------------------------------------------------------------------------------------|--------------------------|
| <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"> | single and edge            | <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"> | 2 kinds<br>7 tiles     |
| <img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"> | single and closed          | <img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/2-pin.png"> | 2 kinds<br>7 tiles     |
| <img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"> | single and side            | <img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/1-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"> | 3 kinds<br>11 tiles    |


When a set is combined with a protorun, pair, or a four-tile shape,
we get even more complicated waits. Table 3.10 summarizes only a
few representative examples.

Table 3.10: Some irregular waits (set and a protorun, pair, or a four-tile shape)


| Example                                                                                                                                                                                           | Wait                                                                                                                              | Acceptance              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"> | <img alt="FSmidletile" src="/image/manzu/1-man.png"><img alt="FSmidletile" src="/image/manzu/2-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"> | 3 kinds<br>5 tiles     |
| <img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"> | <img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"> | 3 kinds<br>5 tiles     |
| <img alt="FSmidletile" src="/image/souzu/1-sou.png"><img alt="FSmidletile" src="/image/souzu/1-sou.png"><img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"><br><img alt="FSmidletile" src="/image/honor/pei.png"><img alt="FSmidletile" src="/image/honor/pei.png"> | <img alt="FSmidletile" src="/image/souzu/1-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/honor/pei.png"> | 3 kinds<br>6 tiles     |
| <img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/6-man.png"><img alt="FSmidletile" src="/image/manzu/7-man.png"><img alt="FSmidletile" src="/image/honor/nan.png"><img alt="FSmidletile" src="/image/honor/nan.png"> | <img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/8-man.png"><img alt="FSmidletile" src="/image/honor/nan.png"> | 3 kinds<br>7 tiles     |
| <img alt="FSmidletile" src="/image/pinzu/6-pin.png"><img alt="FSmidletile" src="/image/pinzu/7-pin.png"><img alt="FSmidletile" src="/image/pinzu/8-pin.png"><img alt="FSmidletile" src="/image/pinzu/8-pin.png"><img alt="FSmidletile" src="/image/pinzu/9-pin.png"><img alt="FSmidletile" src="/image/pinzu/9-pin.png"><img alt="FSmidletile" src="/image/pinzu/9-pin.png"> | <img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/8-pin.png"><img alt="FSmidletile" src="/image/pinzu/9-pin.png"> | 3 kinds<br>9 tiles     |
| <img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/2-sou.png"><img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"><img alt="FSmidletile" src="/image/souzu/5-sou.png"> | <img alt="FSmidletile" src="/image/souzu/3-sou.png"><img alt="FSmidletile" src="/image/souzu/6-sou.png"><img alt="FSmidletile" src="/image/souzu/4-sou.png"> | 3 kinds<br>9 tiles     |
| <img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/3-man.png"><img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/6-man.png"><img alt="FSmidletile" src="/image/manzu/7-man.png"> | <img alt="FSmidletile" src="/image/manzu/4-man.png"><img alt="FSmidletile" src="/image/manzu/5-man.png"><img alt="FSmidletile" src="/image/manzu/8-man.png"> | 3 kinds<br>10 tiles    |
| <img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/1-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"><img alt="FSmidletile" src="/image/pinzu/5-pin.png"> | <img alt="FSmidletile" src="/image/pinzu/2-pin.png"><img alt="FSmidletile" src="/image/pinzu/3-pin.png"><img alt="FSmidletile" src="/image/pinzu/4-pin.png"> | 3 kinds<br>10 tiles    |


## Footnotes
15
We will discuss methods of scoring and minipoints calculations extensively in
Chapter 6.