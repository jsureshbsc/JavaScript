                                    CSS - castcading Style Sheet
                                    -------------------------------

 HOW many ways to declere the css 
    1) Inline css - <h1 style="color: white;">white colour</h1>
    2) exteranal css - create a new file called as style.css 
    3) Internal css -   <style> h1:{ color:white }  </style>

CSS Selectors
--------------
    1) element selector --> tag name selectors [example: h1, p, img]
    2) Class selector --> it represents by .
        [example:
        HTML ==> <h1 class="one">External css</h1> 
        css ==> .one{
            color : red;
            }]
    3) Id Selector --> Id represents by #, id is a one time want to mention 
            [ example:
                html ==>: <h1 id="one"> Heading</h1>
                css ==> : #one{
                    color: red;
                }
            ]
        
    4) universal Selector --> it is represents by * , it will select the fully
            [example:
            html ==> <h1 class="one">External css</h1>
             <h1 class="two">Class selectores</h1>
             <h1 class="three">sample</h1>
             css==>
                *{
                    color :red;
                }
            ]

CSS Box model
-------------
    The css box model is essentially a box that wraps around every HTML element 
    It consists of :
        1) Margins
        2) borders
        3) padding
        4) content
Display property
-----------------
    inline --> same line, fill the size of the content, cannot set width and Hight.
    Inline-block --> same line , fill the size of the content we can set width and hight
    block --> different line, fill the size of entrie width we can set height and width
    none --> this will hide the element from the html

        Example
        ==========
         css==>
         <style>
        h1{
            background-color: blue;
            display: inline;
        }
        span{
            background-color: yellow;
            color: red;
            text-align: center;
            padding: 100px;
            font-size: 45px;
           
        }
      </style>
      html==> 
      <h1>hello suresh</h1>
      <span>span tag</span>