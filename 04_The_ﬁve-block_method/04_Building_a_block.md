---
title: Building A Block
order: 4
---

# Building a block

When a hand has fewer than ﬁve blocks, we need to build a new
block, possibly from a ﬂoating tile we already have in the hand. In
doing so, we should envision the kind of yaku that the hand is going
to have eventually. Consider the following hand. Suppose you are
the dealer and this is East-1. What would you discard?


<fieldset class="no-border">

![drawtile](/image/tiles/6-man.png)
![drawtile](/image/tiles/7-man.png)
![drawtile](/image/tiles/7-man.png)
![drawtile](/image/tiles/8-man.png)
![drawtile](/image/tiles/3-pin.png)
![drawtile](/image/tiles/3-pin.png)
![drawtile](/image/tiles/4-pin.png)
![drawtile](/image/tiles/9-pin.png)
![drawtile](/image/tiles/4-sou.png)
![drawtile](/image/tiles/7-sou.png)
![drawtile](/image/tiles/8-sou.png)
![drawtile](/image/tiles/9-sou.png)
![drawtile](/image/tiles/chun.png)
![drawtile](/image/tiles/pei.png)

</fieldset>

As usual, we will split the hand into blocks. Notice that the hand
has at most four blocks only.


<fieldset class="no-border">
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/6-man.png">
        <img class="drawtile" src="/image/tiles/7-man.png">
        <img class="drawtile" src="/image/tiles/7-man.png">
        <img class="drawtile" src="/image/tiles/8-man.png">
    </div>
    <hr class="my-line">
    <div class="decrease-margin-top">2</div>
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/3-pin.png">
        <img class="drawtile" src="/image/tiles/3-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
    </div>
    <hr class="my-line">
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/9-pin.png">
    </div>   
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/4-sou.png">
    </div>
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/7-sou.png">
        <img class="drawtile" src="/image/tiles/8-sou.png">
        <img class="drawtile" src="/image/tiles/9-sou.png">
    </div>
    <hr class="my-line">
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/chun.png">
    </div>
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/pei.png">
    </div>
</div>
</fieldset>

We should thus compare the four ﬂoating tiles <img class="singletile" src="/image/tiles/9-sou.png">
<img class="singletile" src="/image/tiles/4-sou.png">
<img class="singletile" src="/image/tiles/chun.png">
<img class="singletile" src="/image/tiles/pei.png"> in terms
of their relative capabilities to grow into an independent block. Of
these four tiles, 
<img class="singletile" src="/image/tiles/4-sou.png"> is the strongest candidate, because it can form a
side-wait protorun with two kinds of tiles, 
<img class="singletile" src="/image/tiles/3-sou.png"> and 
<img class="singletile" src="/image/tiles/5-sou.png">. Any simple tiles
between 3 and 7 are a strong ﬂoating tile because of their ability to
form a side-wait protorun. Terminals (1 and 9) will never become
a side-wait protorun, and 2 and 8 can become a side-wait protorun
when paired with only one kind of tiles (3 or 7). However, number
tiles are still stronger than honor tiles because honor tiles can never
form a run.

We should thus choose between the two honor tiles, 
<img class="singletile" src="/image/tiles/chun.png"> and 
<img class="singletile" src="/image/tiles/pei.png">.
Which one should we discard? Notice that this hand is clearly a
pinfu hand and that it is currently lacking the head. Since value tiles
can never be the head of a pinfu hand, we should discard 
<img class="singletile" src="/image/tiles/chun.png"> rather
than 
<img class="singletile" src="/image/tiles/pei.png">.

We may want to choose a discard from an existing block rather
than discarding a ﬂoating tile in order to enhance the hand value.
Consider the following hand.



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


From a pure perspective of tile eﬃciency, the discard choice should
be either <img class="singletile" src="/image/tiles/4-sou.png">
<img class="singletile" src="/image/tiles/7-sou.png"> or 
<img class="singletile" src="/image/tiles/6-pin.png">, for discarding either of the three will maximize
tile acceptance. The block conﬁguration behind such a decision is as
follows.


<fieldset class="no-border">

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/5-man.png">
        <img class="drawtile" src="/image/tiles/6-man.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/6-man.png">
        <img class="drawtile" src="/image/tiles/8-man.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-pin.png">
        <img class="drawtile" src="/image/tiles/2-pin.png">
        <img class="drawtile" src="/image/tiles/2-pin.png">
    </div> 
    <hr class="my-line">  
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/6-pin.png">
    </div>
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-sou.png">
        <img class="drawtile" src="/image/tiles/1-sou.png">
    </div>
    <hr class="my-line">
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/4-sou.png">
        <img class="drawtile" src="/image/tiles/5-sou.png">
        <img class="drawtile" src="/image/tiles/6-sou.png">
        <img class="drawtile" src="/image/tiles/7-sou.png">
    </div>
    <hr class="my-line">
</div>

</fieldset>


However, doing so makes it almost inevitable that the hand ends up
having a low score and/or a bad wait. Alternatively, we can expect
the stretched single shape 
<img class="singletile" src="/image/tiles/4-sou.png">
<img class="singletile" src="/image/tiles/5-sou.png">
<img class="singletile" src="/image/tiles/6-sou.png">
<img class="singletile" src="/image/tiles/7-sou.png"> to produce two runs, 
<img class="singletile" src="/image/tiles/6-pin.png">to form
a run, and the tiles in manzu (cracks) to produce one run, as follows.


<fieldset class="no-border">

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/5-man.png">
        <img class="drawtile" src="/image/tiles/6-man.png">
        <img class="drawtile" src="/image/tiles/6-man.png">
        <img class="drawtile" src="/image/tiles/8-man.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-pin.png">
        <img class="drawtile" src="/image/tiles/2-pin.png">
        <img class="drawtile" src="/image/tiles/2-pin.png">
    </div> 
    <hr class="my-line">  
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/6-pin.png">
    </div>
    <hr class="my-line">
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-sou.png">
        <img class="drawtile" src="/image/tiles/1-sou.png">
    </div>
</div>
<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/4-sou.png">
        <img class="drawtile" src="/image/tiles/5-sou.png">
        <img class="drawtile" src="/image/tiles/6-sou.png">
        <img class="drawtile" src="/image/tiles/7-sou.png">
    </div>
    <hr class="my-line">
    <div class="decrease-margin-top">2</div>
</div>

</fieldset>


We should thus discard the 
<img class="singletile" src="/image/tiles/1-pin.png"> for now, anticipating to discard the
pair of 
<img class="singletile" src="/image/tiles/1-sou.png"> eventually. That way, we can expect to have tanyao, pinfu,
and possibly sanshoku.




## Exercises: building a block

## Excercise 12


<fieldset class="excercise">
<legend class="left-align">Exercise 12</legend>

<div class="discard-question">What would you discard?</div>
<div class="discard-question">How do you divide the hand into tile blocks</div>

<img class="drawtile" src="/image/tiles/1-man.png">
<img class="drawtile" src="/image/tiles/3-man.png">
<img class="drawtile" src="/image/tiles/5r-man.png">
<img class="drawtile" src="/image/tiles/8-man.png">
<img class="drawtile" src="/image/tiles/9-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/4-pin.png">
<img class="drawtile" src="/image/tiles/4-pin.png">
<img class="drawtile" src="/image/tiles/2-sou.png">
<img class="drawtile" src="/image/tiles/2-sou.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">



</fieldset>




<fieldset class="excercise">
<legend class="right-align">Answer 12</legend>


<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-man.png">
        <img class="drawtile" src="/image/tiles/3-man.png">
        <img class="drawtile" src="/image/tiles/5r-man.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/8-man.png">
        <img class="drawtile" src="/image/tiles/9-man.png">
    </div>
    <hr class="my-line">
</div>


<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/3-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/2-sou.png">
        <img class="drawtile" src="/image/tiles/2-sou.png">
        <img class="drawtile" src="/image/tiles/3-sou.png">
    </div>
    <hr class="my-line">    
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/5-sou.png">
        <img class="drawtile" src="/image/tiles/6-sou.png">
        <img class="drawtile" src="/image/tiles/7-sou.png">
    </div>
    <hr class="my-line">
</div>


<div class="analysis">
If we were to simply maximize tile acceptance, the discard choice
should be either <img class="singletile" src="/image/tiles/1-man.png"> or 
<img class="singletile" src="/image/tiles/5r-man.png">. However, that would make the block
in manzu (cracks) too weak. Breaking the 
<img class="singletile" src="/image/tiles/3-pin.png">
<img class="singletile" src="/image/tiles/4-pin.png">
<img class="singletile" src="/image/tiles/4-pin.png"> or 
<img class="singletile" src="/image/tiles/2-sou.png">
<img class="singletile" src="/image/tiles/2-sou.png">
<img class="singletile" src="/image/tiles/3-sou.png"> is
not ideal, as these blocks are very strong. We should therefore
discard the 
<img class="singletile" src="/image/tiles/9-man.png"> to get rid of this edge-wait block. This will temporarily
reduce the number of blocks from ﬁve to four, but we
can expect to get back to ﬁve soon with this hand.
</div>

</fieldset>



## Excercise 13


<fieldset class="excercise">
<legend class="left-align">Exercise 13</legend>

<div class="discard-question">What would you discard?</div>
<div class="discard-question">How do you divide the hand into tile blocks</div>

<img class="drawtile" src="/image/tiles/1-man.png">
<img class="drawtile" src="/image/tiles/3-man.png">
<img class="drawtile" src="/image/tiles/5r-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/4-pin.png">
<img class="drawtile" src="/image/tiles/4-pin.png">
<img class="drawtile" src="/image/tiles/5-pin.png">
<img class="drawtile" src="/image/tiles/2-sou.png">
<img class="drawtile" src="/image/tiles/2-sou.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">

</fieldset>




<fieldset class="excercise">
<legend class="right-align">Answer 13</legend>


<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-man.png">
        <img class="drawtile" src="/image/tiles/3-man.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/5r-man.png">
        <img class="drawtile" src="/image/tiles/5-man.png">
    </div>
    <hr class="my-line">
</div>


<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/3-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
        <img class="drawtile" src="/image/tiles/5-pin.png">
    </div>
    <hr class="my-line">
    <div class="decrease-margin-top">2</div>
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/2-sou.png">
        <img class="drawtile" src="/image/tiles/2-sou.png">
        <img class="drawtile" src="/image/tiles/3-sou.png">
    </div>
    <hr class="my-line">    
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/5-sou.png">
        <img class="drawtile" src="/image/tiles/6-sou.png">
        <img class="drawtile" src="/image/tiles/7-sou.png">
    </div>
    <hr class="my-line">
</div>


<div class="analysis">
Discarding <img class="singletile" src="/image/tiles/4-pin.png"> or 
<img class="singletile" src="/image/tiles/2-sou.png"> will make this hand 1-Away, so our choice is
between these two options. Notice that the 
<img class="singletile" src="/image/tiles/1-man.png">
<img class="singletile" src="/image/tiles/3-man.png"> block is weaker
than the other four. As a back up, we should keep two 
<img class="singletile" src="/image/tiles/4-pin.png"> to
maintain the bulging ﬂoat block in pinzu (dots) for now, hoping
to get two runs out of it. If we draw 
<img class="singletile" src="/image/tiles/2-pin.png"> - 
<img class="singletile" src="/image/tiles/5-pin.png"> or 
<img class="singletile" src="/image/tiles/3-pin.png"> 
- 
<img class="singletile" src="/image/tiles/7-pin.png"> ﬁrst, we will
get rid of the 
<img class="singletile" src="/image/tiles/1-man.png">
<img class="singletile" src="/image/tiles/3-man.png">‌ block. We should thus discard 
<img class="singletile" src="/image/tiles/2-sou.png">. If we draw
any of 
<img class="singletile" src="/image/tiles/1-sou.png">
<img class="singletile" src="/image/tiles/4-sou.png">
<img class="singletile" src="/image/tiles/2-sou.png">, we should do insta-riichi.
</div>

</fieldset>



## Excercise 14


<fieldset class="excercise">
<legend class="left-align">Exercise 14</legend>

<div class="discard-question">What would you discard?</div>
<div class="discard-question">How do you divide the hand into tile blocks</div>

<img class="drawtile" src="/image/tiles/1-man.png">
<img class="drawtile" src="/image/tiles/1-man.png">
<img class="drawtile" src="/image/tiles/3-man.png">
<img class="drawtile" src="/image/tiles/5r-man.png">
<img class="drawtile" src="/image/tiles/5-man.png">
<img class="drawtile" src="/image/tiles/3-pin.png">
<img class="drawtile" src="/image/tiles/4-pin.png">
<img class="drawtile" src="/image/tiles/4-pin.png">
<img class="drawtile" src="/image/tiles/5-pin.png">
<img class="drawtile" src="/image/tiles/2-sou.png">
<img class="drawtile" src="/image/tiles/3-sou.png">
<img class="drawtile" src="/image/tiles/5-sou.png">
<img class="drawtile" src="/image/tiles/6-sou.png">
<img class="drawtile" src="/image/tiles/7-sou.png">


</fieldset>

<fieldset class="excercise">
<legend class="right-align">Answer 14</legend>


<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/1-man.png">
        <img class="drawtile" src="/image/tiles/1-man.png">
        <img class="drawtile" src="/image/tiles/3-man.png">
        <img class="drawtile" src="/image/tiles/5r-man.png">
        <img class="drawtile" src="/image/tiles/5-man.png">
    </div>
    <hr class="my-line">
    <div class="decrease-margin-top">2</div>
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/3-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
        <img class="drawtile" src="/image/tiles/4-pin.png">
        <img class="drawtile" src="/image/tiles/5-pin.png">
    </div>
    <hr class="my-line">
</div>


<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/2-sou.png">
        <img class="drawtile" src="/image/tiles/3-sou.png">
    </div>
    <hr class="my-line">
</div>

<div class="garisbawah">
    <div class="empty-container">
        <img class="drawtile" src="/image/tiles/5-sou.png">
        <img class="drawtile" src="/image/tiles/6-sou.png">
        <img class="drawtile" src="/image/tiles/7-sou.png">
    </div>
    <hr class="my-line">    
</div>


<div class="analysis">As we drew another <img class="singletile" src="/image/tiles/1-man.png">, the block in manzu (cracks) is now a
decent shape. This can become one group and the head with a
draw of 
<img class="singletile" src="/image/tiles/1-man.png">
<img class="singletile" src="/image/tiles/2-man.png">
<img class="singletile" src="/image/tiles/4-man.png">
<img class="singletile" src="/image/tiles/5-man.png">. Therefore, we should discard 
<img class="singletile" src="/image/tiles/4-pin.png"> to break
the bulging ﬂoat shape.</div>

</fieldset>
