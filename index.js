console.log("Translate")
var nstr= "";
var wordlist = ['hi','bye','your mum','vincent','olivia','leon','somayina','text','walk','run','vc','discord','build','win','loose','laugh','swear','smashyourmum','talk','read','write','know','play','kill','to','he','she','you','i','we','they']
var realwordlist = ['kek', 'eke', 'weas', 'potja','elser', 'anyo', 'bazn', 'dor','gu', 'gub', 'sophnia', 'setar','lubo', 'asa', 'sas', 'gol','loen', 'qopu', 'yob', 'yab','yub', 'yeb', 'hoq', 'qaw','q', 'a', 'z', 'w','h', 'p', 'i', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '','', '', '', '',]
var str = "hi leon i smashyourmum";
var arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
	var ind = wordlist.indexOf(arr[i])
	arr[i] = realwordlist[ind] 
}
for (var i = arr.length - 1; i >= 0; i--) {
 	nstr = arr[i]+" "+nstr
}
console.log(nstr);