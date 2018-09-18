var names = ['monish' , 'billy', 2,3,4,5];
names.sort(names);
//remove billy
names.splice(1,1);
//add names
names[1]='aman';
//change monish to monisha
names[0]='monisha';
//add named indec at end of the array
names['colour']='blue';
console.log(names);