class 19:

1.pc[ram ,cpu[processing Uint,Register set],hard disk ] > os [windows,linux,mac,ubuntu]> browser [file explorer,msword , python , node js , google chrome, terminal , docker]

2.processing Uint[sum,sub,mul ,div ,and ,or,not]
3.Register set : অনেকগুলো cell থাকে Registerset e . এক টা সেল এ একটা ডাটা রাখতে পারে ।শুধু মাত্র সংখ্যা রাখা যায়
সেল এর মাঝে,০ ,১ এমন ।

আধুনিক কম্পিউটারে ২০ ঘর পর্যন্ত ডাটা রাখা যায়।

class 20 :

1.Ram এ অনেকগুলো cell থাকে,এই সেল্গুলোতে শুধুমাত্র নাম্বার বসবে। র‍্যাম এ কত ঘর পর্যন্ত ডাটা রাখা যায় তা নির্ভর করে
সেল্গুলো কত বিট এর।

2.বীট (Bit) means binary Digit .Binary Digit or Bit means 0 or 1.

3. 8 Bit = 1 byte / 1 byte = 8 Bits [0 - 255 টি সংখ্যা রাখা যাবে। ]
4.1 kb = 1024 byte
5.1 mb = 1024 kbyte
6. 1 GB = 1024 mb

7.Digital Computer এর Ram e প্রতিটা cell এ 64bit থাকে।

8.Hard Disk: Ram and Hard Disk এ সেইম বীটের cell হতে হবে ।Hard disk Number ছাড়া কিছুই চিনে না, A,B ,a,b .. এই সবগুলোকে
সংখ্যায় প্রকাশ করে হার্ড ডিস্ক কাজ করে।

যেমনঃ  A = 65,B=66, C=67,D= 68 Etc
        a= 92,b= 93 ,c= 94 ,d=95 etc .

class 21:

1.js is created by C++ > is created by C > is created by Assembly Language > is created by machine language.

2.Ram e 1st 3 bit dekhei bolte pare processing unit ki kaj korbe .

000 = sum
001 = sub
010 = mul
011 = div
100 = and
101 = or
111 = not

3.process: os hard disk theke ekta programm er jotogula binary command ache
segulo k niye ram e ene load kore and pointing register and cpu k diye line by line execute
koray 1st to last porjonto,ei takei bole process.

4. Context switching:Context switching হল এমন একটি পদ্ধতি যা একটি কম্পিউটারের CPU অনুসরণ করে
একটি কাজ (বা প্রক্রিয়া) থেকে অন্য কাজগুলিতে পরিবর্তন করার সময় যাতে কাজগুলি বিবাদ না হয় তা নিশ্চিত করে।

Class 22:

1.concurrency: চোখে ধূলা দেয়া এমন কিছু , আমরা যখন অনেক গুলো কাজ একসাথে আউটপুট
পাই তখন ভাবি সব একই সময়ে এক্সিকিউট হয়েছে,আসলে এটা একটা শেষ করে আরেকটা তে যায়।

2.PCB: process control block হলো প্রোসেস গুলার স্টেট রেখে দেয় পরে যখন এক্সিকিউট
করবে তখন এখান থেকে নিয়ে যেনো এক্সিকিউট করতে পারে।

3.There are many items of process state:

    a.unique identifier.
    b.name
    C.cpu
    d. memory (ram)
    e.disk read
    f.disk write
    g. code
    h. many many things.

4.core i3 তে core thakbe 3 ta cpu thakbe ৬টা .

5.Parellal execution: মাল্টি প্রসেসর একসাথে রান করলে তাকে বলে প্যারালাল এক্সিকিউশন।

Class 23 :

1.প্রত্যেক টি প্রসেসের ই একটি করে cpu ,hard disk, ram থাকে।
2. process k run kore Operating system .

3.Javascript single threaded language.

4.Javascript er code run korle (node ekta environment,j javascript code run korte pare )
 nodejs er proccess seta run hoy ,process er majhe ekta  single thread thake,
 thread run hole code k line by line execute korbe.

5.threadpull : blackbox e ultimatly threadpull. os er nijer threadpull ,nodejs er nijer thread js k run kore,
os er thread nodejs use korte pare.
