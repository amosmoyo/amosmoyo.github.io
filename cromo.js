
// side menu functions:::
function openSideMenu(){
    document.getElementById("side").style.width = "250px";
}
function closeSideMenu(){
    document.getElementById("side").style.width = "0";
}

document.querySelector('#Open').addEventListener('click',openSideMenu);
document.querySelector('#Close').addEventListener('click',closeSideMenu);

function forClosingSideAchor(){
  for(let click of document.querySelectorAll('.clickt')){
	   click.addEventListener('click',closeSideMenu);
  }
}
forClosingSideAchor(); 

// hinding the  diplay-property paragraph
document.getElementById('diplay-property').style.display = 'none'; 

//table details:::
let elements;
function tD(event){

      let target = event.target;

      if(target.tagName != "TD") return;
      highlight(target);
      document.getElementById('output').innerText = `${target.innerText}`;
      document.getElementById('output').setAttribute('data-action',target.dataset.action);
      document.getElementById('diplay-property').style.display = '';
      document.getElementById('diplay-property').style.color = '#40E0D0';

  function highlight(td){
	if(elements){
		elements.classList.remove('highlight');
	}
	elements = td;
	elements.classList.add('highlight');
  }

  for(let elem of document.getElementsByClassName('hide')){
	elem.style.borderColor = "#fff";
  }	
}

document.querySelector('table').addEventListener('click',tD);

// Hiding table details
function hideDiplay(){
	if(document.getElementById("hide-table").innerText === 'Hide The Table'){
		document.querySelector('.table-elements').style.display = 'none';
		document.getElementById("hide-table").innerText = 'Display The Table';
		document.getElementById('output').style.display = 'none';
		document.getElementById('diplay-property').style.display = 'none';
		
	}else{
		document.querySelector('.table-elements').style.display = '';
		document.getElementById('output').style.display = '';
		document.getElementById("hide-table").innerText = 'Hide The Table';
		document.getElementById('diplay-property').style.display = 'none';
		document.getElementById('diplay-property').style.color = '#999';	
	}
}

document.getElementById("hide-table").addEventListener('click',hideDiplay);

//window load
function windowLoad(){
	window.addEventListener('load',function(){
	document.querySelector('.table-elements').style.display = 'none';
	document.getElementById("hide-table").innerText = 'Display The Table';
   });
}
windowLoad();


//mapping
function mapping(){
	class tdDataPara{
		constructor(Name,Atomic,Electonic,Valency,Type,Oxidation,Group,Family,AtomicAdIonic){
			this.Name = Name;
			this.Atomic = Atomic;
			this.Electonic = Electonic;
			this.Valency = Valency;
			this.Type = Type;
			this.Oxidation = Oxidation;
			this.Group = Group;
			this.Family = Family;
			this.AtomicAdIonic = AtomicAdIonic;
		}
	}

	document.querySelector('.td-data-property').style.display = 'none';

	let array  =
	[
	   new tdDataPara('Hydrogen',1,1,1,'Metal',0,'I','Alkali Metals','Reduce down the group'),
	   new tdDataPara('Helium',2,2,0,'Non-Metal',0,'VIII','Noble gases','increase down the group'),
	   new tdDataPara('Lithium',3,2.1,1,'Metal',0,'I','Alkali Metas','Increase down the group'),
	   new tdDataPara('Beryllium',4,2.2,2,'Metal',0,'II','Alkaline Earth Metals','increase down the group'),
	   new tdDataPara('Boron',5,2.3,3,'Metal',0,'III','undifined','Increase down the group'),
	   new tdDataPara('Carbon',6,2.4,4,'Non-Metal',0,'VI','undifined','Reduce down the group'),
	   new tdDataPara('Nitrogen',7,2.5,1,'Non-Metal',0,'V','undefined','increase down the group'),
	   new tdDataPara('Oxygen',8,2.6,2,'Non-Metal',0,'VI','undefined','increase down the group'),
	   new tdDataPara('Fluorine',8,2.7,1,'Non-Metal',0,'VII','undefined','increase down the group'),
	   new tdDataPara('Neon',8,2.8,0,'Non-Metal',0,'VIII','Noble gases','increase down the group'),
	   new tdDataPara('Sodium',11,'2.8.1',1,'Metal',0,'I','Alkali Metals','increase down the group'),
	   new tdDataPara('Magnesium',12,'2.8.2',2,'Metal',0,'II','Alkaline Earth Metals','Increase down the group'),
	   new tdDataPara('Aluminium',13,'2.8.3',3,'Metal',0,'III','undefined','increase down the group'),
	   new tdDataPara('Silicon',14,'2.8.4',1,'Metal/Non-Metal',0,'VI','undefined','increase down the group'),
	   new tdDataPara('Phosphorus',15,'2.8.5',3,'Non-Metal',0,'V','undefined','increase down the group'),
	   new tdDataPara('Sulphur',16,'2.8.6',2,'Non-Metal',0,'VI','undefined','increase down the group'),
	   new tdDataPara('Chlorine',17,'2.8.7',1,'Non-Metal',0,'VII','Halogen','increase down the group'),
	   new tdDataPara('Argon',18,'2.8.8',0,'Non-Metal',0,'VIII','Noble gases','increase down the group'),
	   new tdDataPara('Potassium',19,'2.8.8.1',1,'Metal',0,'I','Alkali Metal','increase down the group'),
	   new tdDataPara('Calcium',20,'2.8.8.2',2,'Metal',0,'II','Alkaline Earth Metal','increase down the group')
	];
	console.log(array[0].Name);

	document.querySelector('#output').addEventListener('click',function(event){
	   let name = array.find(function(x){return x.Name === event.currentTarget.dataset.action});
	   for(let ord of document.querySelectorAll('.order')){
	   	  let dataInfo = ord.getAttribute('data-info');
	   	  ord.value = name[dataInfo];
	   }
	   document.querySelector('.td-data-property').style.display = '';
	   document.querySelector('.table-details').style.display = 'none';
	   document.querySelector('.home-details').style.display = 'none';
	   document.querySelector('#main-head').style.display = 'none';
	   document.body.style.backgroundColor = '#999';
	   document.querySelector('.footer').style.display = 'none';
	   
	});
}
mapping();

//properties
 //Output dispaly

 function outputDispaly(){
	 	document.querySelector('.close').addEventListener('click',function(){
		document.querySelector('.td-data-property').style.display = 'none';
		document.querySelector('.home-details').style.display = '';
		document.querySelector('#main-head').style.display = '';
		document.querySelector('.footer').style.display = '';
		document.querySelector('.table-details').style.display = '';
	 })

	for(let intro of document.querySelectorAll('.intro')){
		intro.style.marginLeft = '3px';
		intro.style.marginRight = '2px';
	}
 }
 outputDispaly();