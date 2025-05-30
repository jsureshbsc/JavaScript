let ob = {
            'name' : "suresh",
            'course' : "developing",
            'fees': 340000,
            detail :function details(name,course,fees){
                let display_name = document. getElementById("name").textContent = name;
                let display_course = document.getElementById("course").textContent = course;
                let display_fees = document.getElementById("fees").textContent = fees;
            }
            
        }
        
        ob.detail (ob.name,ob.course,ob.fees);
        ob.detail (ob.name,ob.course,ob.fees);