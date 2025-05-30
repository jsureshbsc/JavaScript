let titles = document.getElementById("title");
        let title = document.createElement("h1");
        let textbox = document.createElement("input");
        title.textContent="this is my webpage"
        let fruits = ['apple','lemeon', 'orange', 'jack fruit', 'mango',]
        fruits.push("tree")
        fruits.pop();
        fruits.unshift("graphs","lemenoo","apple")
        console.log(fruits.indexOf("mango" ))
        console.log(fruits.length)
        console.log(fruits.slice(4,7))
        console.log(fruits.splice(1,2,"yellow","pickle"))
        
        for(let i=0;i<fruits.length;i++){

            let table = document.getElementById("table");
            let tbody = document.createElement("tbody");
            let tr = document.createElement("tr");
            let serialNo = document.createElement("td");
            serialNo.textContent=i+1
            let fruitname = document.createElement("td")
            fruitname.textContent = fruits[i];
           
            titles.appendChild(title);
            titles.appendChild(textbox)
            table.appendChild(tbody);
            tbody.appendChild(tr);
            tr.appendChild(serialNo);
            tr.appendChild(fruitname);

        }