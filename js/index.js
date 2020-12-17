function get(item){
	return document.querySelector(item);
}
function getAll(item){
	return document.querySelectorAll(item);
}
let p=getAll('.p');

setTimeout(()=>{
	p[1].style.display='none'
	p[1].style.display='block'
	setTimeout(()=>{
		p[0].style.opacity=0;
		p[1].style.opacity=1;
	},1)

	setTimeout(()=>{
		p[0].style.top='-100%'
	},600)
},1000)

p.forEach((item,index)=>{
	
	if(index!==0){
		
		item.addEventListener('touchstart',()=>{
			p[index].style.display='block';
			setTimeout(()=>{
				p[index-1].style.top='-100%';
				p[index].style.top='0%'
			},1)
		})
		
	}
})
p[1].ontouchstart=function(){ //p2点击事件
	
	p[2].style.display='block'
	setTimeout(()=>{
		p[1].style.top='-100%';
		p[2].style.top='0%'
	},1)
}

p[2].ontouchstart=function(){ //p3点击事件
	
	p[3].style.display='block'
	setTimeout(()=>{
		p[2].style.top='-100%';
		p[3].style.top='0%'
	},1)
}
p[3].ontouchstart=function(){ //第4页点击事件
	
	p[4].style.display='block'
	setTimeout(()=>{
		p[3].style.top='-100%';
		p[4].style.top='0%'
	},1)
}

p[4].ontouchstart=function(){ //第5页点击事件
	
	p[5].style.display='block'
	setTimeout(()=>{
		p[4].style.top='-100%';
		p[5].style.top='0%'
	},1)
}