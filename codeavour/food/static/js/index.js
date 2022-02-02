

service1 = document.getElementById("service-box-1")
service2 = document.getElementById("service-box-2")

let ser_btn1 = document.getElementById("ser-btn-1")
let ser_btn2 = document.getElementById("ser-btn-2")

let conBtn = document.getElementById("con-btn");

conBtn.addEventListener("click",(e) => {
    e.preventDefault()
    let donCont = document.getElementById("don-container");
    let name = document.getElementById("don-name").value;
    let money = document.getElementById("don-money").value;

    if (name != "" && money != ""){
            let donConty = document.createElement("span");
            donConty.setAttribute("class","doners")

            let donName = document.createElement("span");
            donName.setAttribute("class","don-name");
            donName.innerText = name;
            let donMoney = document.createElement("span");
            donMoney.setAttribute("class","don-money");
            donMoney.innerText = money;

            donConty.appendChild(donName);
            donConty.appendChild(donMoney);

            donCont.appendChild(donConty);





    }
    donCont.appendChild("")
    
    
    
})

ser_btn1.addEventListener("click",() => {
    console.log("hello")
    let cont = document.getElementById("ser-cont-1");
    if(ser_btn1.innerText == "More"){
        ser_btn1.innerText = "less";
        cont.innerHTML = `
        <span class="res-help">
								restuarnts available for help
							</span>
										
							<div class="res-doners">
													<span class="res-doner">andy's resturant  </span>
													<span class="res-doner">andy's resturant</span>
													<span class="res-doner">andy's resturant</span>
													<span class="res-doner">andy's resturant</span>
													<span class="res-doner">andy's resturant</span>
													<span class="res-doner">andy's resturant</span>
							</div>
        `

    }
    else{
        cont.innerHTML = `
        <h3 class="sub_title">Food from resturant</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        `
        ser_btn1.innerText = "More";
    }
})
ser_btn2.addEventListener("click",() => {
    console.log("hello")
    let cont = document.getElementById("ser-cont-2");
    if(ser_btn2.innerText == "More"){
        ser_btn2.innerText = "less";
        cont.innerHTML = `
        <span class="res-help">
								restuarnts available for help
							</span>
										
							<div class="res-doners">
													<span class="res-doner">randy's wedding  </span>
													<span class="res-doner">randy's wedding</span>
													<span class="res-doner">randy's wedding</span>
													<span class="res-doner">randy's wedding</span>
													
							</div>
        `

    }
    else{
        cont.innerHTML = `
        <h3 class="sub_title">Food from marriages</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        `
        ser_btn2.innerText = "More";
    }
})
