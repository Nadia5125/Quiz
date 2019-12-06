var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');
  var ul=document.getElementById('ul');
  var btn=document.getElementById('button');
  var input=document.getElementById('reset');  
  var scoreCard=document.getElementById('scoreCard');
  var quizBox=document.getElementById('questionBox');
  

      var app={
                questions:[
                          {q:'HTML stands for?', options:['Hyper Text Markup Language','High Text Markup Language','Hyper Tabular Markup Language','None of these'],answer:1},

                          {q:'which of the following tag is used to mark a begining of paragraph ?',options:['TD','br','P','tr'],answer:3},

                          {q:'Correct HTML tag for the largest heading is ?',options:['h4','h1','h8','h9'],answer:2}
                          ],
                index:0,
                load:function(){
                	   if(this.index <= this.questions.length-1){
                        quizBox.innerHTML = this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML = this.questions[this.index].options[0];
                        op2.innerHTML = this.questions[this.index].options[1];
                        op3.innerHTML = this.questions[this.index].options[2];
                        op4.innerHTML = this.questions[this.index].options[3];
                        
                           this.scoreCard();
                        }
                        else{    //this the last page where the game is ended

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        input.style.display ="inline-block";
                                            
                        };
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ans){
                   
                         var id = ans.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ans.className= "correct";  
                         	ans.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ans.className="wrong";
                         	ans.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){        
                       for(var i = 0; i < ul.children.length; i++){
                       	    ul.children[i].style.pointerEvents="none";  //this is for one click then no more and go to next one
                       }
                },

                clickAble:function(){
                       for(var i = 0; i <ul.children.length; i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,     //This is on score section
                scoreCard:function(){
                	scoreCard.innerHTML = this.questions.length +"/"+ this.score;
                }
 
           }


           window.onload = app.load();

           function button(ans){
           	     app.check(ans);
           	     app.notClickAble();    //this is part of the after you click one then you can't click anymore then you only can go to next
           }

         function  next(){          //for next button
              app.next();
              app.clickAble();
         };


         function reset() {              //this is for the reset button                      
            location.reload('reset');
            app.reset();         
            
        };



