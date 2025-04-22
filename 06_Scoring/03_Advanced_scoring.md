---
title: Advanced Scoring
order: 3
---

# Advanced scoring

As I mentioned in the previous section, a hand with one or more
concealed set of terminal/honor tiles (or its equivalent) or quads
may have unusually high minipoints, calling for an actual calcula-
tion of minipoints.

## Minipoint calculation
Let’s ﬁrst review the basics of minipoint calculations. All stan-
dard hands (i.e., hands with melds) have the base 20 minipoints.
Then, we add the following minipoints depending on how we win
the hand:5
- tsumo (open or closed, except for pinfu): 2
- ron (closed): 10
- ron (open): 0

We add further minipoints for each set and quad in a hand depend-
ing on whether it is a concealed one or an open one. Table 6.6 sum-
marizes minipoint contributions from a set and a quad.

Table 6.6: Minipoint contributions from a set and a quad

<table>
  <thead>
    <tr>
      <th rowspan="2"></th>
      <th rowspan="2">Tile</th>
      <th colspan="2">Minipoint</th>
    </tr>
    <tr>
      <th>Open</th>
      <th>Concealed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">set</td>
      <td>simple</td>
      <td>2</td>
      <td>4</td>
    </tr>
    <tr>
      <td>terminal/honor</td>
      <td>4</td>
      <td>8</td>
    </tr>
    <tr>
      <td rowspan="2">quad</td>
      <td>simple</td>
      <td>8</td>
      <td>16</td>
    </tr>
    <tr>
      <td>terminal/honor</td>
      <td>16</td>
      <td>32</td>
    </tr>
  </tbody>
</table>


Finally, we add 2 minipoints for each of the following, if any.
- Pair of dragon tiles
- Pair of seat wind tiles
- Pair of prevailing wind tiles
- Closed, edge, or single wait

When the head of a hand is of seat wind and prevailing wind
(e.g., ﬄ for the East player in the East round), we get 2 + 2 = 4 minipoints.
6
If the wait is either side wait or dual pon wait, we don’t get
any minipoint for it. As we saw when we discussed wait patterns
in 3.4, we may get diﬀerent minipoints depending on which of the
multiple winning tiles to win on. For example, consider the following
hand.


<fieldset class="no-border">

<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/1-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

</fieldset>


The hand is waiting for -. If we win by ron on , we get no
minipoints for the wait and so this hand has 30 minipoints (base 20
+ 8 for a concealed set of honors + 2 for an open set of simple = 30).
However, if we win this hand on , we get additional 2 minipoints
for closed wait. This is because ‌ȷ can be thought of as
‌ + ȷ. Therefore, the hand has 40 minipoints in that case
(30 + 2 = 32, rounded up to 40).

## Scores for 50 minipoints or above
When a hand has one or more concealed set of honor tiles, the
hand may have 50 minipoints or above. You may want to memorize
the case of 50 minipoints, summarized below. If you are a perfectionist,
you may also want to memorize the cases of 70 and 110 minipoints
as well, but I can assure you that it would not be worth the eﬀort.

50 minipoints

Scores for 50 minipoints are quite easy to memorize if you have already
memorized scores for 25 minipoints (chiitoitsu), summarized
in 6.5. Recall that the score for a 1 han–50 minipoints hand
should be the same as that for a 2 han–25 minipoints hand.

Table 6.7: Scores for 50 minipoints
<table>
  <thead>
    <tr>
      <th rowspan="2">Han</th>
      <th colspan="2">Ron</th>
      <th colspan="2">Tsumo</th>
    </tr>
    <tr>
      <th>Non-dealer</th>
      <th>Dealer</th>
      <th>Non-dealer</th>
      <th>Dealer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1600</td>
      <td>2400</td>
      <td>400–800</td>
      <td>800–all</td>
    </tr>
    <tr>
      <td>2</td>
      <td>3200</td>
      <td>4800</td>
      <td>800–1600</td>
      <td>1600–all</td>
    </tr>
    <tr>
      <td>3</td>
      <td>6400</td>
      <td>9600</td>
      <td>1600–3200</td>
      <td>3200–all</td>
    </tr>
    <tr>
      <td>4+</td>
      <td colspan="4">limit hand</td>
    </tr>
  </tbody>
</table>

70 minipoints

Hands with 70 minipoints do not appear very often (probably once
in 20 games or so). Table 6.8 summarizes scores for 70 minipoints.
If you would like to memorize the table, notice that it is sequential
(until the end): 23 (non-delaer)
!
34 (dealer)
!
45 (non-dealer)
!
68 (dealer).

110 minipoints

For the sake of completeness, Table 6.9 summarizes scores for 110
minipoints.

Table 6.8: Scores for 70 minipoints
<table>
  <thead>
    <tr>
      <th rowspan="2">Han</th>
      <th colspan="2">Ron</th>
      <th colspan="2">Tsumo</th>
    </tr>
    <tr>
      <th>Non-dealer</th>
      <th>Dealer</th>
      <th>Non-dealer</th>
      <th>Dealer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>2300</td>
      <td>3400</td>
      <td>600–1200</td>
      <td>1200–all</td>
    </tr>
    <tr>
      <td>2</td>
      <td>4500</td>
      <td>6800</td>
      <td>1200–2300</td>
      <td>2300–all</td>
    </tr>
    <tr>
      <td>3+</td>
      <td colspan="4">limit hand</td>
    </tr>
  </tbody>
</table>




Table 6.9: Scores for 110 minipoints
<table>
  <thead>
    <tr>
      <th rowspan="2">Han</th>
      <th colspan="2">Ron</th>
      <th colspan="2">Tsumo</th>
    </tr>
    <tr>
      <th>Non-dealer</th>
      <th>Dealer</th>
      <th>Non-dealer</th>
      <th>Dealer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>3600</td>
      <td>5300</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>2</td>
      <td>7100</td>
      <td>10600</td>
      <td>1800–3600</td>
      <td>3600–all</td>
    </tr>
    <tr>
      <td>3+</td>
      <td colspan="4">limit hand</td>
    </tr>
  </tbody>
</table>



110 minipoints occur only in extremely rare occasions. Consider
the following hand.


<fieldset class="no-border">

<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/1-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

</fieldset>


Suppose you are in the East round. If the dealer wins this hand by
ron on %, he gets 20 (base) + 10 (closed hand ron) + 4 (pair of seat &
prevailing wind tiles) + 4 (open set of honors) + 32 (concealed quad
of terminals) + 32 (concealed quad of terminals) = 102, rounded up
to 110 minipoints. The score for 1 han–110 minipoints is 5300.

If he wins by ron on ﬄ, on the other hand, he gets more han
(set of seat & prevailing wind) but lower minipoints. This is because
the minipoint contribution of the pair of % (2) is smaller than that
of the pair of ﬄ (4). Since the score of 2 han–100 minipoints hand is
the same as that of 3 han–50 minipoints hand, he obtains 9600 points.

## Examples
Let’s see how scores change as we advance a hand. For each of
the examples below, try calculating the scores for diﬀerent winning
tiles and for tsumo and ron.



<fieldset class="excercise">
<legend class="right-align">Scoring 1</legend>

<img class="drawtile" src="/image/tiles/4-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/7-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/7-pin.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">

<div class="discard-question">What are the scores?</div>

</fieldset>



If you win this hand by ron, the hand has 1 han (Red Dragon) and
40 minipoints: 20 (base) + 10 (closed hand ron) + 8 (concealed set
of honors) = 38, rounded up to 40, so you get 1300 points.

If you win it by drawing 
, the hand has an additional yaku,
menzen tsumo (Fully Concealed Hand), with 30 minipoints: 20 + 8
+ 2 (tsumo) = 30. You thus get 500-1000 tsumo = 2000 points.

However, if you win it by drawing , you get 40 minipoints be-
cause of the additional 2 minipoints for
closed wait: . You thus get 700-1300 tsumo = 2700 points.

Let’s say you draw . What would you discard?

<fieldset class="no-border">

<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/1-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

<figure class="figure-caption">
    <img src="/image/tiles/7-sou.png"
         alt="opentile">
    <figcaption>Draw</figcaption>
</figure>


</fieldset>


If you discard , the wait is 
- (2 kinds–7 tiles). If you discard
, however, you get a 3-way wait: -  (3 kinds–7 tiles). Let’s
say you choose the latter, resulting in the following hand. Now, let’s
think about the scores for each winning tile.


<fieldset class="excercise">
<legend class="right-align">Scoring 2</legend>

<img class="drawtile" src="/image/tiles/4-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/7-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/7-pin.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">

<div class="discard-question">What are the scores?</div>

</fieldset>


If you win this hand on , the hand is still 1 han–40 minipoints =
1300. However, if you win on  or , the three tiles of  within
the hand are treated as a concealed set, giving you 4 additional minipoints:
20 (base) + 10 (closed ron) + 8 (set of %) + 4 (set of ) =
42, rounded up to 50 minipoints. You thus get 1 han–50 minipoints
= 1600 points. If you win by tsumo, you get 40 minipoints so you will
get 700-1300 = 2700 points.

Let’s say you draw ‌. What would you discard?

<fieldset class="no-border">

<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/1-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

<figure class="figure-caption">
    <img src="/image/tiles/7-sou.png"
         alt="opentile">
    <figcaption>Draw</figcaption>
</figure>

</fieldset>
If you discard , the wait is -. Let’s think about the scores for
each winning tile.


<fieldset class="excercise">
<legend class="right-align">Scoring 3</legend>

<img class="drawtile" src="/image/tiles/4-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/7-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/7-pin.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">

<div class="discard-question">What are the scores?</div>

</fieldset>


If you win the hand by ron on , you get an additional yaku, iipeiko
(Pure Double Chow), giving you 2 han–40 minipoints = 2600 points.
If you win the hand by tsumo, the minipoints are now lower than
before because you have side wait and only one concealed set; we
cannot think of the three tiles of  as a set any more. You get 2 han–
30 minipoints if you draw  (500-1000 tsumo = 2000), whereas you
get 3 han–30 minipoints if you draw  (1000-2000 tsumo = 4000).

Let’s say you draw . What would you discard?


<fieldset class="no-border">

<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/1-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

<figure class="figure-caption">
    <img src="/image/tiles/7-sou.png"
         alt="opentile">
    <figcaption>Draw</figcaption>
</figure>

</fieldset>

Discardingis the best option. To understand why, let’s think about
the scores.


<fieldset class="excercise">
<legend class="right-align">Scoring 4</legend>

<img class="drawtile" src="/image/tiles/4-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/7-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/7-pin.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">

<div class="discard-question">What are the scores?</div>

</fieldset>


Notice that the wait and the potential han counts did not change at
all. However, you get increased minipoints because you now have
the concealed set of  back again. You will get 2 han–50 minipoints
= 3200 points if you win by ron on . If you draw , you will get
3 han–40 minipoints, giving you 1300-2600 tsumo = 5200 points.

Let’s say you draw another . What would you discard?

<fieldset class="no-border">

<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/1-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/2-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/1-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

<figure class="figure-caption">
    <img src="/image/tiles/7-sou.png"
         alt="opentile">
    <figcaption>Draw</figcaption>
</figure>

</fieldset>

The best discard is , which makes this hand a toitoi (All Pungs)
hand, as follows.


<fieldset class="excercise">
<legend class="right-align">Scoring 5</legend>

<img class="drawtile" src="/image/tiles/4-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/6-man.png">
<img class="drawtile" src="/image/tiles/7-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/6-pin.png">
<img class="drawtile" src="/image/tiles/7-pin.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/4-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">

<div class="discard-question">What are the scores?</div>

</fieldset>


The hand has three concealed sets already, giving you at least san
anko (Three Concealed Pungs) in addition to toitoi and Red Dragon.
Now you no longer need any tedious minipoints calculation. If you
win this hand by tsumo, it is yakuman (su anko; Four Concealed Pungs).
If you win it by ron, you get ﬁve han (toitoi, san anko, and Red
Dragon); it is mangan regardless of minipoints.

## Footnotes
5
As mentioned, there are two exceptions to this calculation rule. First, it is de-
cided that pinfu tsumo is always 20 minipoints. Second, the so-called “open
pinfu hand is always 30 minipoints whether ron or tsumo.

6
This is the case with EMA rules and Tenhou rules, but this is not a universally
adopted rule.

