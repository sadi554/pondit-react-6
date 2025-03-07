TOTAL COURSE JS:

1.Call stack.
2.Execution Context .
     two parts of execution context.
       a. Memory componant or variable environment.
       b. Code componant or Thread of execution.

    two phases of execution Context:
       a. Creation phase or Memory Creation phase .
       b. Execution phase or code execution phase.

3.Global execution context.
4.Local execution Context.

5.function .

       a. Firstclass Function.
       b. Callback function .
       c. Anonymous function.
       d. function statement or Declaration.
       e. function expression.
       f. Arrow function.
       g. IIFE function .
       h.Generator function.
       i.constructor function.

6.Arguments Vs parameter .
7.class.
8.object,
        {Property}:Method

9.Hoisting.
10.Object destructuring.
11.extends কে প্রোগ্রামিং ভাষায় বলে inheritance.
12.super,Babel,webpack.
13.scope,scope chain,Closure
14.lexical environment or lexical scope.
15.let,const,block,memory leaking problem.
16.temporary dead zone =>সাময়িক মারা যাওয়া অবস্থা।
17.variable shadowing.
18.immutable variable.
19.block => {}
20.script scope, block scope, global scope
21.browser.
22.javascript engine
23.browser features .
24.web api .
25.event loop.
26.callback queue .
27.priority queue .

DEFINE:

1. Execution Context : যখন কোন Js file Run হয় তখন একটি Execution Context তৈরী হয়।

    There are two parts of js Execution Context:

            a.Memory Component Or Variable Environment. [মেমোরী allowcate করে,var and function keyword খোঁজে]

            b.Code Component Or Thread of Execution.[কোডগুলোকে লাইন বাই লাইন এক্সিকিউট করে]

Javascript code Execute হয় দুটি step এঃ
                                    code :
                                    var a = 10;
                                    var b = 20;
                                    var c;
                                    c = a + b ;
                                    console.log(c);

    There are Two phase of Js Execution Context:

            a.Creation phase or Memory Creation Phase. [যেখানে শুধুমাত্র ভেরিয়েবল এবং ফাংশন এর জন্য মেমোরী তৈরী হবে,
                Variable এর value সবসময় undefined হবে। ফাংশন এর নাম এ কীওয়ার্ড হবে তারপর পুরো ফাংশন টাই এক্সিকিউট হবে]

            b.Execution Phase or Code Execution phase   [এখানে code লাইন বাই লাইন execute hobe,ফাংশন কখনো এক্সিকিউশন ফেজ এক্সিকিউট করে না,
                                                         এর জন্য নতুন আরেকটি এক্সিকিউশন কন্টেক্সট তৈরী হবে, Print er pore jodi () হয় তাহলে নতুন
                                                         একটি এক্সিকিউশন কন্টেক্সট তৈরী হবে]

2. Call Stack :Execution Context Create হবার পর  JS কল স্ট্যাকে যায় । প্রতিবার যখন  একটি ফাংশন কল করা হয়, এটি স্ট্যাকে যোগ করা হয়।

  There are two types of call stack:

3.Global Execution Context.[প্রথমে যেই কন্টেক্সট ক্রিয়েট হয় তাকে বলে গ্লোবাল এক্সিকিউশন কন্টেক্সট]

4.Local Execution Context.[ফাংশন এর জন্য যেই এক্সিকিউশন কনটেক্সট ক্রিয়েট হয় তাকে বলে লোকাল এক্সিকিউশন কনটেক্সট।
                                       ফাংশন এর নামেই তার নাম দেয়া হবে]

         Function keyword er pore ja thakbe ta holo function, Variable keyword er por ja hakbe ta holo Variable.

5.Hoisting : Hoisting means Memory Create করা , কোন কিছু এক্সিকিউট হবার অনেক আগেই যদি মেমোরী তে ক্রিয়েট হয়ে থাকে
            তাহলে তাকে Hoisting বলে।

6.Function Statement:Function keyword দিয়ে শুরু হয় এমন ,ফাংশন এর নাম থাকবে
                    এবং ফাংশন Declare করা হলে তাকে ফাংশন statement বলে।

                        function sum(a,b){
                            var c= a+b;
                            console.log(c);
                        }
                        sum(10,20);

7.Function Declaration:Same as function statement.

8.Function Expression:যখন কোন ফাংশন কে ভেরিয়েবলের মাঝে Assign করা হয় তখন তাকে Function Expression bole.

                       var a = function sum(a,b){
                            var c= a+b;
                            console.log(c);
                        }
                        sum(10,20);

  Statement: আমরা একটি শর্ত লিখবো if এর ভিতরে , এখানে অনেক সত্য মিথ্যা যাচাই বা লজিক্যালি চিন্তা করে কার্লি ব্রেস এর ভিতর এসাইন করা হয়
        if (b>0) {
            console.log("Yes b is greater than 0");        [if statement]
        }

 Expression:প্রতিটি সিঙেল লাইন এক একটা এক্সপ্রেশন।

        var a =10;           [variable expression]

        function sum(){....} [Function Expression]

9.Anonymous Function:যার কোন নাম নেই এমন ফাংশন কে বলা হয় Anonymous Function.

                     (function (a,b){
                            var c= a+b;
                            console.log(c);
                        })

10.Arrow Function:Function Keyword মুছে দিয়ে () এর পরে => ব্যবহার করা হলে তাকেই অ্যরো ফাংশন বলে।

                        jhum = (a,b) =>{
                            var c= a+b;
                            console.log(c);
                        }
                        jhum();

11.First Class Function: কোন ফাংশন যদি  প্যারামিটার হিসেবে অন্য কোন ফাংশন  রিসিভ করে থবা অন্য
                         কোন ফাংশন কে রিটার্ন করে তাকে ফার্স্ট ক্লাস ফাংশন বলে।

                        function outer(cb) {       [outer ফার্স্ট ক্লাস ফাংশন]
                            var a =10 ;
                            cb(a);
                        }

                        function print(number){
                            console.log(number);
                        }

                        outer(print);

                        and:

                        function outer() {
                            function inner(number) {
                                console.log(number);
                        }
                        return inner;
                        }

                        var ii = outer();
                        ii();

                        outer(print);

12.Callback Function: First class function যদি কোন ফাংশন কে প্যারামিটার হিসেবে রিসিভ করে অইটাই কল ব্যাক ফাংশন।

                        function outer(cb) {       [cb কল ব্যাক ফাংশন]
                            var a =10 ;
                            cb(a);
                        }

                        function print(number){
                            console.log(number);
                        }

                        outer(print);

13. Object: Object কে  কার্লি ব্রেস দিয়ে Represent করবো। সংজ্ঞানুসারে,কার্লি ব্রেস দিয়ে কোন কিছু যদি ভেরিয়েবলের মাঝে এসাইন করা হয়
তাহলে তাকে বলে অবজেক্ট।

         There are Two items of Object:

                a.Property (key: value)      name: "jhum";

                b.Method  (key: function)    print:function(){
                                             console.log("Hello");
                                                        }

14.Generator Function: যখন কোন ফাংশন কোন অবজেক্ট জেনারেট করার ক্ষমতা রাখে তাকেই Generator Function বলে।

                        function newUser(x,y){
                            var user = {
                                name:x ,
                                age:y ,
                            }
                            return user;
                        }
                        var habib = newUser("Jhum" , "24");

15.Constructor Function:যখন কোন ফাংশন কোন অবজেক্ট কন্সট্রাক্ট করার ক্ষমতা রাখে তাকেই Constractor Function বলে।

                        function newUser(x,y){

                               this.name = x ;
                               this.age = y ;
                            };

                        }
                        var t = new newUser("Jhum" , "24");

 Generator Function Vs Constructor Function:

          Generator Function e object initialization থাকবে,Constructor Function e থাকবে না।
          Generator Function এ Object কে Return করতে হবে , Constructor Function এ Object কে Return করতে হবে না
          Generator Function কে কল করার আগে new লিখতে হয় না।  Constructor Function কে কল করার আগে new  লিখতে হয়োলে।

       Syntactical sugar: আসলে মেয়ে ভাবসাব ছেলেদের মতো অনেক টা এমন।কন্সট্রাকটর ফাংশন এর ভিতরে পূরাই জেনারেটর
       ফাংশন বাট কাজ করতেছে কন্সট্রাক্টর ফাংশন।এখানে সিন্টেক্স কম লিখতে হয় তাই তাকে সিন্টেকটিক্যাল সুগার বলে।

16.Arguments Vs Parameter:

                        function print(a){  [a holo parameter,যেগুলো রিসিভ করবো অইটা প্যারামিটার]
                            console.log(a);
                        }
                        print(10);          [10 holo Arguments,যা কল করবো অইটাই আর্গুমেন্ট]

17.IIFE (Immediately invocked function expression) : Immediately কোন ফাংশন কে কল করা হলে তাকে বলে IIFE.

                        (function (a,b){
                            var c= a+b;
                            console.log(c);
                        })(5,6);

object,generator function,constructor function,class Example:

   Object:                  var user = {
                            name: jhum ;
                            age: 24;
                        };

                        var teacher = {};
                        teacher.position = "Professor";
                        teacher.salary = "30000";

 generator:

function newUser(x, y) {
    var user = {
      name: x,
      age: y,
    };
    return user;
  }
  var iqbal = newUser('Jhum', '24');
  console.log(iqbal);

 constructor:

  function newUser(x, y) {
    this.name = x;
    this.age = y;
}
  var t = new newUser('Jhum', '24');
  console.log(t);

React:

1.installed node js.
2.insalled create-react-app with npm (npm i -g create-react-app).
3.created a priject with create-react-app
4.clean the project.
5.explanation of the project.
6.checking npm version : npm --version npm( node package manager)

			js:

1.Every js file is a module.
2.there are two types export:
    a.default
    b.normal

18.Object destructuring: যেমন, এক্সপ্রেশনের বাম দিকে, আমরা অবজেক্ট প্রপার্টি কী (এই ক্ষেত্রে নাম)
বাছাই করি এবং এটিকে {} এর ভিতরে রাখি। সম্পত্তি মান ধরে রাখার জন্য এটি পরিবর্তনশীল নামও হয়ে যায়।
 ডান দিক হল (user) প্রকৃত বস্তু যা মান বের করে। and normal export korle object destructuring Hobe .

var user = {
  'name':'jhum',
  'age':50,
};
console.log(user);
var {name} = user;
console.log(name);

//var a = document.getElementById('root');

                            class document{
                                constructor() {

                                }

                                getElementById(id){
                                  return 'div';//which has the same id
                                }
                              }
                              var document = new document();
                              var a = document.getElementById('root');

19.extends কে প্রোগ্রামিং ভাষায় বলে inheritance :উত্তরাধীকারসূত্রে প্রাপ্ত সম্পত্তি।একটি ক্লাস দিয়ে যদি আরেকটি ক্লাশ কে extends করি তাহলে অইটাই ইনহেরিট্যান্স।

                            class User {
                              constructor(x){
                                this.name = x;
                              }
                              printName(){
                                console.log("Hello:",this.Name);
                              }
                            }
                            class Teacher extends User {
                              constructor(x,y){
                                super(x);
                              }
                            }

5.super: parent class কে বলা হয় super.  এখানে user হলো সুপার।
6. React কে সিঙ্গেল page এপ্লিকেশন বলে।   (SPA)

7.Babel: advance যেই জাভাস্ক্রিপ্ট আছে jsx তাকে পুরনো ভার্সনে (vanilla js) নেয়ার জন্য বেবেল দরকার হয় ,বেবেলের মাধ্যমেই
জাভাস্ক্রিপ্ট ইঞ্জিনে যায়। বেবেল কে (transpiler,converter)বলে।

8. webpack: সব জাভাস্ক্রিপ্ট ফাইল কে একটি সিঙ্গেল file e কনভার্ট করে।

class 14 :

Scope: একটি ভেরিয়েবল ডিক্লেয়ার করার পর কোন কোন লাইনে  এর Value ta excess korte parbe
etakei scope bole. Scope Means সুযোগ .

     var x = 10;  // q1: ai line ta kon kon line e accesible?

     function outer(){
         console .log(x);
     function inner(){

        var y = 20;
        console.log(x);
        console.log(y);
     }

        inner();
     }

     outer();

     console.log(x);
     console.log(y);

     Scope Chain: যে কোন একটি কোড কম্পোনেন্ট এ একটি ভেরিয়েবলের ভেলু কে প্রিন্ট করতে গেলাম,এখন
     কোড কম্পোনেন্ট ভেলু আনতে যাবে মেমোরী কম্পোনেন্ট এ ,তখন যদি মেমোরী তে না থাকে ,তখন যেতে হবে
     পেরেন্ট এক্সিকিউশন কন্টেক্সট এর মেমোরী কম্পোনেন্ট এ অইখান থেকে ভেলু এনে এক্সিকিউট করা হলে তাকেই বলে
     স্কোপ চেইন।

     class 15 :

     Lexical Environment/ Lexical scope: Local Memory componant of execution context along with the
     lexical environment of it's parent.

     /* যদি দুইটা এক্সিকিউশন কন্টেক্সট থাকে তাহলে লোকাল এক্সিকিউশন কন্টেক্সট এর লেক্সিক্যাল
       এনভায়রন্মেন্ট হবে লোকালের মেমোরী কম্পোনেন্ট + গ্লোবালের মেমোরী কম্পোনেন্ট ।
       এটাকে Lexical Scope ও বলা যায়।
     */

    Closure: function along with it's lexical environment forms a Closure.
    //একটি ফাংশন এবং তার লেক্সিকেল এনভায়রন্মেন্ট মিলে একটা জায়গায় আবদ্ধ হয়াকে ক্লোজার ফর্ম বলে

        var x = 10;

     function outer() {
                console .log(x);
     function inner(){
        var y = 20;
        console.log(x);
        console.log(y);
     }

      return inner;
     }

      var fn = outer();
      fn();

      console.log(x);
      console.log(y);

class 16:

1.Block : Javascript er j kono curly brace {} e block.

if (5 === 5){...Example}

var a = 10;
console.log(a);

if (5 === 5){
    var a = 20;
    console.log(a);
}

call();
console.log(a);

2. Memory leaking problem : sudhu global execution context e execute complete hole
  memory leak hobe oitai memory leaking pblm.

3. Let :let হলো block scope.let মেমোরী কম্পোনেন্ট কে ৩ ভাগে কাজ করায় ,
        ১।গ্লোভাল, ২।স্ক্রিপ্ট ৩।ব্লক

[Let এ শুধু একবার ই let keyword use kora jabe , block chara let kaj korbe na,
    let a = 10; console.log(a);'let hobe na' a = 10; console.log(a); ]

let a = 10;
console.log(a);

if (5 === 5){
    let a = 20;
    console.log(a);
}

call();
console.log(a);

class 17 :

4. Const :একটি ভেরিয়েবল  ১ বার ই দেয়া যায় ,আপডেট করা যাবে না।
5.immutable variable:  holo jake change kora jabe na.

const a = 10;
console.log(a);

//const a = 100;  [এটা কাজ করবে না।]
console.log(a);

6.temporary dead zone =>সাময়িক মারা যাওয়া অবস্থা।

যখন let or const দিয়ে একটি ভেরিয়েবল declare করা হবে,তখন সে যখন মেমোরী তে initialized
হবে সে সময় থেকে শুরু করে তার ভিতরে undefined বাদে অন্য যে কোন ভেল্যু Assign করার আগ মুহুর্ত
পর্যন্ত সময়টাকে বলে temporary dead zone.

let a = 10;
console.log(a);

function call(){
    let a = 20;
    console.log(a);
}

call();
console.log(a);

7. Variable shadowing: একই নাম দিয়ে বারবার variable create হচ্ছে তাকে বলে variable shadowing.

CLASS 18:

1. Browser: browser হলো একটি application.প্রত্যেক ব্রাউজার এর ভিতরে একটি javascript Engine থাকে। তবে নাম ভিন্ন থাকে।

Browser>javascript Engine>Call Stack > Execution Context

2.there are many types are Browser features:

features: Timer  , Geolocation , URL, localStorage etc .
javascript ব্রাউজার এর ফিচার কে এক্সেস করতে পারে। Browser এর ১০০০ ফিচার থাকে।

3.web apis :Browser এর নির্দিষ্ট কিছু ফিচার থাকে ,সেই ফিচার গুলোকে এক্সেস করার জন্য
browser কোম্পানি API বানায় ,সেই api gulO javascript access korte pare ,oigular name
হলো  web apis .

    a. setTimeout:

    function print(){
        console.log("jhuma");
    }

    console.log("---------before-------");
    setTimeout(print, 10);  [setTimeout function এর কাজ হলো print,10 কে অন্য একটি নির্দিষ্ট জায়গায় Blackbox এ রেখে দেয়া  ]
    console.log(----------after----------);

    b. DOMAPIS

Document দিয়ে শুরু হয় এমন সব API কে বলে DOMAPIS.

4.event Loop:always calllstack  k check korbe,jokhn callstack empty hobe
tokhn kaj korbe,
5.Queue:j age asbe takei read korbe ..

    a.micro task queue:when callback function is created from Promise,its called micro task queue.
    micro task queue >call>call2
    b.callback queue>print>call3>call4

6.Black Box: er kaj holo 10 sec complete  holo kina ,hole print k realese kore dibe,erpor callback queue
te cole jabe,tokhn jodi line clear thake tahole cole jabe  sobar samne .

7.যখন javascript code run হয় তখন যত webapis আছে সব global Execution এর memory componant
এ যায় তারপর creation phase start হয়।
